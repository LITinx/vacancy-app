import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'

export const Links = () => {
	return (
		<div>
			<Logo>CareerSpace</Logo>
			<ul>
				<li>
					<Link to='/'>Главная</Link>
				</li>
				<li>
					<Link to='/picks'>Подборки</Link>
				</li>
				<li>
					<Link to='/employer'>Работодателям</Link>
				</li>
			</ul>
		</div>
	)
}
