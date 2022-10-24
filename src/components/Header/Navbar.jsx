import { Auth } from './Auth'
import { Links } from './Links'
import { Menu } from './Menu/Menu'

export const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<Links />
			<Auth />
			<Menu />
		</nav>
	)
}
