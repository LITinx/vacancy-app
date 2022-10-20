import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<div>Hello</div>} />
				<Route path='/picks' element={<div>Hello</div>} />
				<Route path='/employer' element={<div>Hello</div>} />
			</Routes>
		</div>
	)
}

export default App
