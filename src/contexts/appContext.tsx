import { createContext, useContext, useEffect, useState } from "react";

// types
export type TaskType = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // quando o timer chega ao final
  interruptDate: number | null; // quando a task for interrompida
  type: keyof AppStateType['config'];
};
export type AppStateType = {
  taskHistory: TaskType[];
  secondsRemaining: number;
  formattedTime: string;
  activeTask: TaskType | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
type AppContextType = {
	appState: AppStateType;
	setAppState: React.Dispatch<React.SetStateAction<AppStateType>>;
};

// app initial state
const appInitialState: AppStateType = {
  taskHistory: [],
  secondsRemaining: 0,
  formattedTime: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

// context creation
const AppContext = createContext<AppContextType | null>(null);

// context provider
export function AppContextProvider({ children }: { children: React.ReactNode }) {
	const [appState, setAppState] = useState(appInitialState);

	useEffect(() => {
		console.log('appState:', appState);
	}, [appState]);

	return (
		<AppContext.Provider value={{appState, setAppState}}>
			{children}
		</AppContext.Provider>
	)
};

// context consumer
export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
        throw new Error("Profile deve estar dentro de UserProvider.");
    };
	return context;
};