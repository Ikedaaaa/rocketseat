import dayjs from 'dayjs';
import { FastifyInstance } from 'fastify'
import { z } from 'zod';
import { prisma } from "./prisma";

export async function appRoutes(app: FastifyInstance){
    app.post('/habits', async (request) => {
        const createHabitBody = z.object({
            title: z.string(),
            weekDays: z.array(
                z.number().min(0).max(6)
            )
        });
        const { title, weekDays } = createHabitBody.parse(request.body);

        const today = dayjs().startOf('day').toDate();

        await prisma.habit.create({
            data: {
                title,
                created_at: today,
                weekDays: {
                    create: weekDays.map(weekDay => {
                        return {
                            week_day: weekDay
                        }
                    })
                }
            }
        })
    });

    app.get('/day', async (request) => {
        const getDayParams = z.object({
            date: z.coerce.date()
        });

        const { date } = getDayParams.parse(request.query);

        const parsedDate = dayjs(date).startOf('day');
        const weekDay = parsedDate.get('day');

        //todos os hábitos possíveis
        //hábitos que já foram completados

        const possibleHabits = await prisma.habit.findMany({
            where: {
                created_at: {
                    lte: date
                },
                weekDays: {
                    some: {
                        week_day:weekDay
                    }
                }
            }
        });

        //trocado de findUnique() para findFirst() pois estava dando erro, e no rep da Rocket está assim
        const day = await prisma.day.findFirst({
            where: {
                date: parsedDate.toDate()
            },
            include: {
                dayHabits: true
            }
        });

        const completedHabits = day?.dayHabits.map(dayHabit => {
            return dayHabit.habit_id
        }) ?? [];

        return {
            possibleHabits,
            completedHabits
        };
    });

    // toggle: completar / não completar um hábito
    app.patch('/habits/:id/toggle', async (request) => {
        const toggleHabitParams = z.object({
            id: z.string().uuid(),
        });

        const {id} = toggleHabitParams.parse(request.params);

        const today = dayjs().startOf('day').toDate();

        let day = await prisma.day.findUnique({
            where: {
                date: today
            }
        });

        if (!day) {
            day = await prisma.day.create({
                data: {
                    date: today
                }
            });
        }

        const dayHabit = await prisma.dayHabit.findUnique({
            where: {
                day_id_habit_id: {
                    day_id: day.id,
                    habit_id: id
                }
            }
        })

        if (dayHabit) {
            await prisma.dayHabit.delete({
                where: {
                    id: dayHabit.id
                }
            })
        } else {
            await prisma.dayHabit.create({
                data: {
                    day_id: day.id,
                    habit_id: id
                }
            });
        }
    });

    app.get('/summary', async () => {
        // [ { date: 17/01, amount: 5, completed: 2 }, { date: 18/01, amount: 2, completed: 2 }]
        // ORM, Query Builder, Driver Nativo
        // Query mais complexa, mais condições, relacionamentos => SQL na mão (RAW / Nativo)
        // Prisma ORM: Consegue ser utilizado para operações em qualquer banco de dados. Se trocar de sql para postgresl, pra MySQL, pra SQLServer, Oracle, continua funcionando.
        // RAW SQL: Funciona somente no banco de dados para a qual a operação foi escrita.

        const summary = await prisma.$queryRaw`
            Select D.id, D.date,
                (
                    SELECT cast(count(*) as float)
                    FROM day_habits DH
                    WHERE DH.day_id = D.id
                ) as completed,
                (
                    SELECT cast(count(*) as float)
                    FROM habit_week_days HWD
                    JOIN habits H
                        ON H.id = HWD.habit_id
                    WHERE HWD.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
                    AND H.created_at <= D.date
                ) as amount
            From days D
            Order By D.date
        `;
        //Incrementei o order by diferente do Diego pq assim fica mais bonitinho :)

        // ** Epoch Timestamp: Quantidade de Segundos desde 1/1/1970 **
        // Unix epoch timestamp: SQLite gurda não só os segundos, mas também milisegundos
        // Ou seja, se os seg desde 1970 fossem 16.000, SQLite guardaria 16.000.000
        // Por isso para retornar uma data correta, foi necessário usar *** D.date/1000.0 *** 
        return summary;
    })
}