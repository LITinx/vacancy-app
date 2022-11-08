import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './components/Main/MainPage'
import { PicksMain } from './Pages/Picks/PicksMain'

function App() {
	return (
		<div className='App '>
			<Header />
			<div className='pt-16 container mx-auto'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/picks' element={<PicksMain />} />
					<Route path='/employer' element={<div>Employer</div>} />
				</Routes>
			</div>
		</div>
	)
}

export default App
