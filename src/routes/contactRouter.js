import PageHead from "../Components/Organisms/PageHead";
import FormAndMap from '../Components/Organisms/FormAndMap';
import ContactBar from "../Components/Molecules/ContactBar";
import Footer from "../Components/Organisms/Footer";

export default function ContactRouter() {
    return (
        <main className='page'>
           <PageHead title='Contact Us' 
            copy='We look forward to hearing from you and providing the legal assistance you need.'
            button={false}/>
            <FormAndMap />
            <ContactBar />
            <Footer />
        </main>
    )
}