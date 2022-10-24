import { AiFillHeart } from 'react-icons/ai'
import { BsFillGeoAltFill } from 'react-icons/bs'

const formatter = new Intl.NumberFormat('ru-RU', {
	style: 'currency',
	currency: 'RUB',
	maximumFractionDigits: 0,
})
const VacancyItem = () => {
	return (
		<div className='w-full p-3 shadow-md rounded-xl mb-4'>
			<div className='flex justify-between items-center pb-2'>
				<p className='text-sm'>Yandex</p>
				<AiFillHeart className='text-gray-400 hover:text-gray-500 transition-colors duration-200' />
			</div>
			<div className='pt-2 pb-4'>
				<h5 className='text-base font-bold'>Front-end developer</h5>
			</div>
			<div className='inline-flex flex-col space-y-1 items-start'>
				<div className='inline-flex items-center px-1 rounded text-xs bg-gray-200'>
					<BsFillGeoAltFill className='text-gray-400' />
					<p className='text-gray-400'>Москва</p>
				</div>
				<div className='inline-flex items-center px-1 rounded text-xs bg-lime-400'>
					<p className=''>от {formatter.format(90000)}</p>
				</div>
			</div>
		</div>
	)
}

export default VacancyItem
