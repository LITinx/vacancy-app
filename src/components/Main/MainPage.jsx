import { MainPicks } from './MainPicks/MainPicks'
import NewsSection from './News/NewsSection'
import { Vacancy } from './Vacancy/Vacancy'

export const MainPage = () => {
	return (
		<main className='px-8'>
			<section>
				<NewsSection />
			</section>
			<MainPicks />
			<Vacancy />
		</main>
	)
}
