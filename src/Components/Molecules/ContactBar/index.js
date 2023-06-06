import './styles.css';
import Button from '../../Atoms/Button';

const ContactBar = () => {
    return (
        <section className='contactBar'>
            <h3 className='contactBarCopy'>Contact us today to schedule a consultation and learn how we can help you with your legal needs.</h3>
            <Button 
                withArrow={true}
                copy='Free Consultation' 
                color='white' 
                className='contactBarBtn' />
        </section>

    )
};

export default ContactBar;