import styles from './styles.module.css'
import { CirclePlay } from 'lucide-react'
import { useRef } from 'react';
import { useAppContext, type TaskType } from '../../contexts/appContext';
import { getNextCycleNumber, getNextCycleName } from '../../utils/getNextCycle';
import { formatTime } from '../../utils/formatTime';
import { Cycles } from '../Cycles';
import { FormMessage } from '../FormMessage';

export function HomeForm() {
	const { appState, setAppState } = useAppContext();

	// adding input reference
	const inputRef = useRef<HTMLInputElement>(null);
	// getting next cycle number
	const nextCycle = getNextCycleNumber(appState.currentCycle);
	// getting next cycle name
	const nextCycleName = getNextCycleName(nextCycle);

	// submit handler
	function handleSubmit(e: React.SubmitEvent) {
		e.preventDefault();
		
		// getting user input value
		const taskName = inputRef.current!.value.trim();
		if (!taskName) {
			inputRef.current!.value = ''
			alert('You need to type something');
		};

		// newTask creation
		const newTask: TaskType = {
			id: Date.now().toString(),
			name: taskName,
			duration: appState.config[nextCycleName],
			type: nextCycleName,
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
		};

		// appState update
		const secondsRemaining = newTask.duration * 60;
		setAppState(currentState => {
			return {
				...currentState,

				taskHistory: [...currentState.taskHistory, newTask],
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining: secondsRemaining,
				formattedTime: formatTime(secondsRemaining),
			};
		});
	};

	return (
		<>
			<form action="#" method="POST" onSubmit={handleSubmit} className={styles.taskForm}>
				<label htmlFor="task">Digite sua tarefa:</label>
				<input
					type="text"
					id="task"
					name="task"
					aria-describedby="user-task"
					required
					ref={inputRef}
				/>

				{appState.activeTask === null ? 
					<span className={styles.taskMessage}>Inicie seus estudos</span> 
					: 
					<FormMessage activeTask={appState.activeTask}/>
				}

				<Cycles />

				<button type='submit'>
					<CirclePlay size={26}/>
				</button>
			</form>
		</>
	)
}