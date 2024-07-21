import type { FastifyInstance } from "fastify";
import { z } from 'zod';
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { prisma } from "../lib/prisma";
import { dayjs } from "../lib/dayjs";

export async function createActivity(app: FastifyInstance) {
    app.withTypeProvider<ZodTypeProvider>().post('/trips/:tripId/activities', {
        schema: {
            params: z.object({
                tripId: z.string().uuid()
            }),
            body: z.object({
                title: z.string().min(4),
                occurs_at: z.coerce.date(),
            })
        }
    }, async (request) => {
        const { tripId } = request.params;
        const { title, occurs_at } = request.body;

        const trip = await prisma.trip.findUnique({
            where: { id: tripId }
        });

        if (!trip)
            throw new Error('Trip not found!');

        const formattedStartDate = dayjs(trip.starts_at).format('LL');
        const formattedEndDate = dayjs(trip.ends_at).format('LL');
        const formattedActivityDate = dayjs(occurs_at).format('LL');
        

        if (dayjs(occurs_at).isBefore(trip.starts_at))
            throw new Error(`Can't create activity before the trip even started. Trip starts at ${formattedStartDate} and the selected date was ${formattedActivityDate}.`);

        if (dayjs(occurs_at).isAfter(trip.ends_at))
            throw new Error(`Can't create activity after the trip is over. Trip ends at ${formattedEndDate} and the selected date was ${formattedActivityDate}.`);

        const activity = await prisma.activity.create({
            data: {
                title,
                occurs_at,
                tripId
            }
        });
        
        return { activityId: activity.id };
    })
}