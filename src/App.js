import './App.css';
import Button from './Components/Atoms/Button';
import InfoCards from './Components/Organisms/InfoCards';

function App() {
  return (
   <>
    <Button color='orange' copy='Free Consultation' />
    <Button color='white' copy='Free Consultation' />
    <InfoCards />
   </>
  );
}

export default App;
