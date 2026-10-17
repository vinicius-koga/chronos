import styles from './styles.module.css';
import { House, Moon, RotateCcwClock, Settings, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Navbar() {
	// theme initial state
	const [theme, setTheme] = useState<'dark' | 'light'>(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'dark';
	});

	// theme button handler
	function handleClick() {
		setTheme((currentTheme) => {
			return currentTheme === 'dark' ? 'light' : 'dark';
		});
	};

	// component render effect
	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.navItem}>
					<House className={styles.svg} size={26}/>
				</div>
				<div className={styles.navItem}>
					<RotateCcwClock size={26}/>
				</div>
				<div className={styles.navItem}>
					<Settings size={26}/>
				</div>
				<div className={styles.navItem} onClick={handleClick}>
					{theme === 'dark' ? <Sun size={26}/> : <Moon size={26}/>}
				</div>
			</div>
		</>
	)
}