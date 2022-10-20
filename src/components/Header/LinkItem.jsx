import { NavLink } from 'react-router-dom'

const LinkItem = ({ children, to }) => {
	return (
		<li className='text-black hover:text-blue-500 '>
			<NavLink
				to={to}
				end
				className={({ isActive }) => (isActive ? 'text-blue-500' : undefined)}
			>
				{children}
			</NavLink>
		</li>
	)
}

export default LinkItem
