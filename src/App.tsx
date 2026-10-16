import './styles/global.css'

import { DefaultContainer } from './components/Containers/DefaultContainer'
import { MainContainer } from './components/Containers/MainContainer'
import { Logo } from './components/Logo'
import { Navbar } from './components/Navbar'
import { Countdown } from './components/Countdown'
import { HomeForm } from './components/HomeForm'

function App() {
  return (
    <>
		<MainContainer>
			<DefaultContainer>
				<Logo />
			</DefaultContainer>
			<DefaultContainer>
				<Navbar />
			</DefaultContainer>
			<DefaultContainer>
				<Countdown />
			</DefaultContainer>
			<DefaultContainer>
				<HomeForm />
			</DefaultContainer>
		</MainContainer>
    </>
  )
}

export default App
