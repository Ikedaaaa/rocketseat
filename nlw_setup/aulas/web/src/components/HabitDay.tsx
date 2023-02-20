import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { useState } from 'react';

interface HabitDayProps{
    date: Date,
    defaultCompleted?: number,
    amountTotal?: number
};

export function HabitDay({date, defaultCompleted = 0, amountTotal = 0}: HabitDayProps){
    const [amountCompleted, setAmountCompleted] = useState(defaultCompleted);

    const completedPercentage = amountTotal > 0 ? Math.round((amountCompleted / amountTotal) * 100) : 0;

    const dayAndMonth = dayjs(date).format('DD/MM');
    const dayOfWeek = dayjs(date).format('dddd');

    function handleCompletedChanged(completed: number) {
        setAmountCompleted(completed);
    }

    //Se não fizerem, criar condição para destacar o dia atual e também quando todos os hábitos forem completos, como fiz no mobile
    //Procurar exatamente qual seria a tonalidade para "Ouro"
    //Também tentar colocar ScrollView ao redor do componente <HabitsList />, pois com muitos hábitos, sai da tela
    //Tentar jogar todas as propriedades de focus em uma propriedade só, pois estão se repetindo muito no código:
    // (focus:outline-none - nos checkboxes ela não é usada) focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background
    // Talvez criar uma propriedade css do tailwind recebendo todos os outros, e mais uma concatenando o focus:outline-none
    //Seguir o exemplo do mobile de criar componente <HabitsEmpty /> para quando não houver hábitos no dia.
    //Seguir exemplo do mobile de indicar que não pode editar hábitos de dias passados, com opacity 50 e mensagem indicando isso
    return(
        <Popover.Root>
            <Popover.Trigger className={clsx("w-10 h-10 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background", {
                "bg-zinc-900 border-zinc-800": completedPercentage === 0,
                "bg-violet-900 border-violet-700": completedPercentage > 0 && completedPercentage < 20,
                "bg-violet-800 border-violet-600": completedPercentage >= 20 && completedPercentage < 40,
                "bg-violet-700 border-violet-500": completedPercentage >= 40 && completedPercentage < 60,
                "bg-violet-600 border-violet-500": completedPercentage >= 60 && completedPercentage < 80,
                "bg-violet-500 border-violet-400": completedPercentage >= 80 && completedPercentage < 100,
                "bg-yellow-600 border-yellow-700": completedPercentage === 100
            })} />

            <Popover.Portal>
                <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
                    <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

                    <ProgressBar progress={completedPercentage} />

                    <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />

                    <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
};