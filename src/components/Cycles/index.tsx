import styles from './styles.module.css'

export function Cycles() {
	return (
		<>
			<span className={styles.cycleMessage}>Ciclos:</span>
				<div className={styles.cycles}>
					<div className={`${styles.cycle} ${styles.workTime}`}></div>
					<div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
					<div className={`${styles.cycle} ${styles.workTime}`}></div>
					<div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
					<div className={`${styles.cycle} ${styles.workTime}`}></div>
					<div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
					<div className={`${styles.cycle} ${styles.workTime}`}></div>
					<div className={`${styles.cycle} ${styles.longBreakTime}`}></div>
			</div>
		</>
	)
}