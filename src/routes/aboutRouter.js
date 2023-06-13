import PageHead from '../Components/Organisms/PageHead';
import AboutBlurb from '../Components/Organisms/AboutBlurb';
import ContactBar from '../Components/Molecules/ContactBar';
import Footer from '../Components/Organisms/Footer';
import './styles.css';

export default function AboutRouter() {
    return (
        <main className='page'>
            <PageHead title='About'
                copy='We look forward to hearing from you and providing the legal assistance you need.'
                button={false} />
            <AboutBlurb />
            <ContactBar />
            <Footer />
        </main>
    )
};