import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<header className='bg-slate-100 shadow-md fixed w-full z-50'>
			<div className='container mx-auto px-6 py-3'>
				<Navbar />
			</div>
		</header>
	)
}
