import PageHead from '../Components/Organisms/PageHead';
import ServiceCards from '../Components/Organisms/ServiceCards';
import ServiceExplaination from '../Components/Molecules/ServiceExplanation';
import ContactBar from '../Components/Molecules/ContactBar';
import Footer from '../Components/Organisms/Footer';
import {
	firstTwo,
	lastTwo,
} from '../Components/Molecules/ServiceExplanation/serviceData';

export default function ServicesHomeRouter() {
	return (
		<main>
			<PageHead
				title='Services'
				copy='We are well versed in criminal, bankruptcy, divorce, and family law and ensure the best possible outcome for our clients.'
			/>
			<ServiceCards />
			{firstTwo.map(service => (
				<ServiceExplaination
					header={service.header}
					copy={service.copy}
					image={service.image}
					color={service.color}
					reversed={service.reversed}
					id={service.id}
				/>
			))}
			<ContactBar />
			{lastTwo.map(service => (
				<ServiceExplaination
					header={service.header}
					copy={service.copy}
					image={service.image}
					color={service.color}
					reversed={service.reversed}
					id={service.id}
				/>
			))}
			<Footer />
		</main>
	);
}
