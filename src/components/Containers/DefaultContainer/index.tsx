import styles from './styles.module.css'

export function DefaultContainer({children}: {children: React.ReactNode}) {
	return (
		<>
			<div className={styles.defaultContainer}>
				{children}
			</div>		
		</>
	)
}