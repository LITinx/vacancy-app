export const Auth = () => {
	return (
		<div className='md:flex hidden justify-between items-center space-x-4 '>
			<button className='text-xs bg-zinc-200 px-3 py-2 rounded-md hover:bg-zinc-300 transition-colors ease-in-out duration-200 '>
				Создать аккаунт
			</button>
			<button className='text-xs bg-black px-3 py-2 rounded-md text-white hover:bg-gray-800 transition-colors ease-in-out duration-200'>
				Войти
			</button>
		</div>
	)
}
