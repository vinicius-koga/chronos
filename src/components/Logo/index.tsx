import { HourglassCog } from 'lucide-react'
import styles from './styles.module.css'

export function Logo() {
	return (
		<>
			<HourglassCog size={30} className={styles.icon}/>
			<h1 className={styles.title}>Chronos</h1>
		</>
	)
}