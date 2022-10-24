import useWindowDimensions from '../../../hooks/useWindowDimensions'
import VacancyItem from './VacancyItem'

export const Vacancy = () => {
	const { width } = useWindowDimensions()
	return (
		<div>
			<div className='mt-3 ml-4'>
				<h3 className='font-bold'>Все</h3>
			</div>
			<div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-3'>
				<div className=''>
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
				</div>
				<div className=''>
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
					<VacancyItem />
				</div>
				{width > 1024 && (
					<div className=''>
						<VacancyItem />
						<VacancyItem />
						<VacancyItem />
						<VacancyItem />
						<VacancyItem />
						<VacancyItem />
						<VacancyItem />
					</div>
				)}
			</div>
		</div>
	)
}
