export const SliderItem = () => {
	return (
		<div className='p-5 bg-yellow-300 rounded-3xl flex flex-col items-start mb-10 h-48 md:h-72'>
			<div className='pb-10 flex-grow'>
				<h4 className='font-bold text-2xl'>Take a course</h4>
				<p className='text-lg pl-1'>With examples</p>
			</div>
			<button className='text-sm bg-black px-4 py-2 rounded-xl text-white hover:bg-gray-800 transition-colors ease-in-out duration-200 flex-grow-0'>
				More
			</button>
		</div>
	)
}
