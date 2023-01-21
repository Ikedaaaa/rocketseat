interface HabitProps{
    completed: number
};

export function Habit(props: HabitProps){
    return(
        <div className="classes tailwind">
            {props.completed}
        </div>
    )
};