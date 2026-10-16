import { useAppContext } from '../../contexts/appContext'
import styles from './styles.module.css'

export function Countdown() {
	const { appState } = useAppContext();

	return (
		<h1 className={styles.countdown}>{appState.formattedTime}</h1>
	)
}