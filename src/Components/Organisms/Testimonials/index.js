import './styles.css';
import { quotes, titleData } from './data';
import QuoteCard from '../../Molecules/QuoteCard';
import Title from '../../Atoms/Title';

const Testimonials = () => {
    return (
        <section className='quoteCardsSection'>
            <Title 
                subtitle={titleData.subtitle}
                color={titleData.color}
                background={titleData.background}
                title={titleData.title} />
            <div className='quoteCardsDiv'>
                { quotes.map( card => (
                    <QuoteCard header={card.header} copy={card.copy} />
                )) }
            </div>
        </section>
    )
};

export default Testimonials;