export const Logo = ({ children, className }) => {
	return (
		<div className={'logo-font ' + className}>
			<h2 className='lowercase font-bold text-base sm:text-lg md:text-xl'>
				{children}
			</h2>
		</div>
	)
}
