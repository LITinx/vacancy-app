import { PicksItem } from '../../components/Main/MainPicks/PicksItem'

export const PicksMain = () => {
	return (
		<div className='py-4 space-y-5'>
			<h3 className='font-bold text-2xl pl-4 text-center sm:text-left'>
				Подборки вакансий
			</h3>
			<div className='sm:grid flex justify-center items-center flex-wrap sm:grid-cols-3 lg:grid-cols-4 gap-4'>
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />	
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
				<PicksItem />
			</div>
		</div>
	)
}
