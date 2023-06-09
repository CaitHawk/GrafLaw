import './App.css';
import FormAndMap from './Components/Organisms/FormAndMap';
import AboutBlurb from './Components/Organisms/AboutBlurb';
// import AreaOfPractice from './Components/Organisms/AreaOfPractice';
import ContactBar from './Components/Molecules/ContactBar';
import Footer from './Components/Organisms/Footer';
import QuoteCards from './Components/Organisms/QuoteCards';
import ServiceCards from './Components/Organisms/ServiceCards';
import InfoCards from './Components/Organisms/InfoCards';
;
function App() {
  return (
    <>
      <FormAndMap />
      <InfoCards />
      <QuoteCards />
      <AboutBlurb />
      <ServiceCards />
      <ContactBar />
      <Footer />
    </>
  );
}

export default App;
