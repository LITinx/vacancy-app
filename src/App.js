import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { MainPage } from './components/Main/MainPage'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='pt-16'>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/picks' element={<div>Picks</div>} />
					<Route path='/employer' element={<div>Employer</div>} />
				</Routes>
			</div>
		</div>
	)
}

export default App
