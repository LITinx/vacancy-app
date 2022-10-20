import { Auth } from './Auth'
import { Links } from './Links'

export const Navbar = () => {
	return (
		<nav>
			<Links />
			<Auth />
		</nav>
	)
}
