import PageHead from '../Components/Organisms/PageHead';
import InfoCards from '../Components/Organisms/InfoCards';
import Testimonials from '../Components/Organisms/Testimonials';
import ContactBar from '../Components/Molecules/ContactBar';
import Footer from '../Components/Organisms/Footer';
import AreaOfPractice from '../Components/Organisms/AreaOfPractice';

export default function HomeRouter() {
	return (
		<main>
			<PageHead
				title='A trusted advisor for your business and your o’hana'
				copy='Legal matters can be overwhelming and stressful. That is why we offer personalized attention and support to ensure that you feel comfortable and confident throughout the legal process.'
				button={true}
			/>
			<InfoCards />
			{/* <AreaOfPractice /> */}
			<Testimonials />
			<ContactBar />
			<Footer />
		</main>
	);
}
