import { NavLink } from 'react-router-dom'

export const CustomBurgerLink = ({ children, to, end }) => {
	return (
		<li>
			<NavLink
				to={to}
				end={end}
				className={({ isActive }) =>
					(isActive ? 'bg-slate-200' : undefined) +
					' inline-block w-full py-1 px-4 rounded-md hover:bg-slate-200 transition-colors cursor-pointer'
				}
			>
				{children}
			</NavLink>
		</li>
	)
}
