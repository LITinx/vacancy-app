import { Link } from 'react-router-dom'

export const Logo = ({ children, className }) => {
	return (
		<Link to='/' className={'logo-font ' + className}>
			<h2 className='lowercase font-bold text-lg md:text-xl'>{children}</h2>
		</Link>
	)
}
