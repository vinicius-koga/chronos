export function getNextCycleNumber(currentCycle: number) {
	return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}

export function getNextCycleName(currentCycle: number) {
	if (currentCycle % 8 === 0) return 'longBreakTime';
	if (currentCycle % 2 === 0) return 'shortBreakTime';
	return 'workTime';
}