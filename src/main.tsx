import './styles/global.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { AppContextProvider } from './contexts/appContext.tsx';

createRoot(document.getElementById('root')!).render(
		<AppContextProvider>
			<App />
		</AppContextProvider>
);
