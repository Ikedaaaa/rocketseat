import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { api } from '../lib/axios';
import { CheckboxComponent } from './CheckboxComponent';

interface HabitsListProps {
    date: Date,
    onCompletedChanged: (completed: number) => void
}

interface HabitsInfo {
    possibleHabits: {
        id: string,
        title: string,
        created_at: string
    }[],
    completedHabits: string[]
}

export function HabitsList({ date, onCompletedChanged }: HabitsListProps) {
    const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

    useEffect(() => {
        api.get('day', {
            params: {
                date: date.toISOString(),
            }
        }).then(response => {
            setHabitsInfo(response.data);
        })
    }, []);

    async function handleToggleHabit(habitId: string){
        await api.patch(`/habits/${habitId}/toggle`);

        const isHabitAlreadyCompleted = habitsInfo?.completedHabits.includes(habitId);
        let completedHabits: string[] = [];

        if (isHabitAlreadyCompleted) {
            completedHabits = habitsInfo!.completedHabits.filter(id => id !== habitId)
        } else {
            completedHabits = [...habitsInfo!.completedHabits, habitId];
        }

        setHabitsInfo({
            possibleHabits: habitsInfo!.possibleHabits,
            completedHabits
        });

        onCompletedChanged(completedHabits.length);
    };

    const isDateInPast = dayjs(date).endOf('day').isBefore(new Date());

    return (
        <div className='mt-6 flex flex-col gap-3'>
            {habitsInfo?.possibleHabits.map(habit => {
                return (
                    <CheckboxComponent key={habit.id} title={habit.title} checked={habitsInfo.completedHabits.includes(habit.id)}
                    onCheckedChange={() => handleToggleHabit(habit.id)} isDisabled={isDateInPast}
                    additionalClassname='font-semibold text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400' />
                );
            })}
        </div>
    );
}