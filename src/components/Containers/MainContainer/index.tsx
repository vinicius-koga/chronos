import styles from './styles.module.css'

export function MainContainer({ children }: { children: React.ReactNode }) {
  return (
	<div className={styles.mainContainer}>
	  {children}
	</div>
  )
}