import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PicksItem } from './PicksItem'

export const MainPicks = () => {
	return (
		<div className=''>
			<div className='pb-4 ml-2'>
				<h3 className='font-bold text-xl '>Подборки вакансий</h3>
			</div>
			<Swiper
				spaceBetween={15}
				slidesPerView={1}
				className='p-1 pb-4'
				breakpoints={{
					960: {
						slidesPerView: 5,
						spaceBetween: 15,
					},
					640: {
						spaceBetween: 15,
						slidesPerView: 3,
					},
					410: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
				}}
			>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
				<SwiperSlide>
					<PicksItem />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
