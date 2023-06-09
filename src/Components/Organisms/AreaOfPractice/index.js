import './styles.css';
import { Button } from '@mui/material';

const AreaOfPractice = () => {
    return (
        <section className='areasOfPracticeSection'>
            <p className='practiceAreasSubtitle'>Practice Areas</p>
            <h2 className='practiceAreasTitle'>Areas of Practice</h2>
            <p className='practiceAreasP1'></p>
            <p className='practiceAreasP2'></p>
            <p className='practiceAreasP3'></p>
            <Button color='orange' copy='Free Consultation'/>
        </section>
    )
};

export default AreaOfPractice;