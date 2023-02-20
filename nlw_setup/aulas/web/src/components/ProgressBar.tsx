interface ProgressBarProps {
    progress: number
};

export function ProgressBar(props: ProgressBarProps){
    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div role="progressbar" 
                aria-label='Progresso de hábitos completos nesse dia'
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600 transition-all"
                style={/*Indica variável JS*/{ /*Indica um objeto*/ width: `${props.progress}%`}}/>
        </div>
    );
}