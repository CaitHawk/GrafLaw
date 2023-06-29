import PageHead from '../Components/Organisms/PageHead';
import ServiceCards from '../Components/Organisms/ServiceCards';
import ServiceExplaination from '../Components/Molecules/ServiceExplanation';
import ContactBar from '../Components/Molecules/ContactBar';
import Footer from '../Components/Organisms/Footer';
// import ServiceExplaination from "../Components/Molecules/ServiceExplanation";

export default function ServicesHomeRouter() {
	return (
		<main>
			<PageHead
				title='Services'
				copy='We are well versed in criminal, bankruptcy, divorce, and family law and ensure the best possible outcome for our clients.'
			/>
			<ServiceCards />
			<ServiceExplaination />
			<ContactBar />
			<Footer />
		</main>
	);
}
