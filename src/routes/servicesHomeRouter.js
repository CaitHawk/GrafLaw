import PageHead from "../Components/Organisms/PageHead";
import AreasOfPractice from '../Components/Organisms/AreaOfPractice';
import ContactBar from '../Components/Molecules/ContactBar';
import Footer from '../Components/Organisms/Footer';

export default function ServicesHomeRouter() {
    return (
        <main>
            <PageHead title='Services' copy='We are well versed in criminal, bankruptcy, divorce, and family law and ensure the best possible outcome for our clients.' />
            <AreasOfPractice />
            <ContactBar />
            <Footer />
        </main>
    )
}