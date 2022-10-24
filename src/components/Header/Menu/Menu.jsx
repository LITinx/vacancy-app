import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
	return (
		<div className='flex md:hidden cursor-pointer'>
			<AiOutlineMenu size={24} />
			<div className=''>
				<div className=''>
					<div className=''></div>
					<ul>
						<li>
							<NavLink to='/'>Главная</NavLink>
						</li>
						<li>
							<NavLink to='/picks'>Подборки</NavLink>
						</li>
						<li>
							<NavLink to='/employer'>Работодателям</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
