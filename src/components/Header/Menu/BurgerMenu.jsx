import classNames from 'classnames'
import { Auth } from '../Auth'
import { CustomBurgerLink } from './CustomBurgerLink'

export const BurgerMenu = ({ isOpen }) => {
	return (
		<ul
			className={classNames(
				{ 'translate-x-96': isOpen },
				'absolute flex flex-col transition-transform top-4 right-4 py-3 px-2 bg-white shadow-md rounded-xl space-y-1 w-52 z-10',
			)}
		>
			<CustomBurgerLink to='/' end>
				Главная
			</CustomBurgerLink>
			<CustomBurgerLink to='/picks'>Подборки</CustomBurgerLink>
			<CustomBurgerLink to='/employer'>Работодателям</CustomBurgerLink>
			<Auth className='space-x-2' />
		</ul>
	)
}
