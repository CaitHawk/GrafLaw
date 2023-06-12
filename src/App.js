import './App.css';
import FormAndMap from './Components/Organisms/FormAndMap';
import AboutBlurb from './Components/Organisms/AboutBlurb';
// import AreaOfPractice from './Components/Organisms/AreaOfPractice';
import ContactBar from './Components/Molecules/ContactBar';
import Footer from './Components/Organisms/Footer';
import Testimonials from './Components/Organisms/Testimonials';
import ServiceCards from './Components/Organisms/ServiceCards';
import InfoCards from './Components/Organisms/InfoCards';
import Header from './Components/Molecules/Header';
;
function App() {
  return (
    <>
      <Header />
      <FormAndMap />
      <InfoCards />
      <Testimonials />
      <AboutBlurb />
      <ServiceCards />
      <ContactBar />
      <Footer />
    </>
  );
}

export default App;
