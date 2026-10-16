export function formatTime(seconds: number): string {
	const minutesFormatted = String(Math.floor(seconds / 60)).padStart(2, '0');
	const secondsFormatted = String(Math.floor(seconds % 60)).padStart(2, '0');
	return `${minutesFormatted}:${secondsFormatted}`;
};