import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'
import LinkItem from './LinkItem'

export const Links = () => {
	return (
		<div className='flex justify-between items-center'>
			<Logo className='-mt-1'>KeiinCareer</Logo>
			<ul className='flex justify-between items-center space-x-4 pl-3 md:pl-8 text-xs '>
				<LinkItem to='/'>Главная</LinkItem>
				<LinkItem to='/picks'>Подборки</LinkItem>
				<LinkItem to='/employer'>Работодателям</LinkItem>
			</ul>
		</div>
	)
}
