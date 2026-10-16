import { TimerReset } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
	return (
		<>
			<TimerReset className={styles.icon}/>
			<h1 className={styles.title}>Chronos</h1>
		</>
	)
}