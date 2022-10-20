import { Auth } from './Auth'
import { Links } from './Links'

export const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<Links />
			<Auth />
		</nav>
	)
}
