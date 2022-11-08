import classNames from 'classnames'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BurgerMenu } from './BurgerMenu'

export const Menu = () => {
	const [isOpen, setIsOpen] = useState(true)
	const toggleBtn = () => setIsOpen(!isOpen)
	return (
		<div className='flex md:hidden '>
			<AiOutlineMenu size={24} className='cursor-pointer' onClick={toggleBtn} />
			<div className=''>
				<BurgerMenu isOpen={isOpen} />
			</div>
			<div
				className={classNames(
					{ hidden: isOpen },
					'h-screen w-screen absolute top-0 left-0 blur-0 bg-[rgb(0,0,0,0.4)]',
				)}
				onClick={toggleBtn}
			></div>
		</div>
	)
}
