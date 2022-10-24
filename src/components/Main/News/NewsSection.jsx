import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SliderItem } from './SliderItem'

const NewsSection = () => {
	// TODO: Кнопка сделать с помощью хука
	return (
		<Swiper
			pagination={{
				dynamicBullets: true,
			}}
			modules={[Pagination]}
			className='my-5'
			spaceBetween={10}
			slidesPerView={1}
			breakpoints={{
				480: {
					slidesPerView: 2,
				},
			}}
		>
			<SwiperSlide>
				<SliderItem />
			</SwiperSlide>
			<SwiperSlide>
				<SliderItem />
			</SwiperSlide>
			<SwiperSlide>
				<SliderItem />
			</SwiperSlide>
		</Swiper>
	)
}

export default NewsSection
