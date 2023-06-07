import './styles.css';
import { quotes } from './quoteData';
import QuoteCard from '../../Molecules/QuoteCard';

const QuoteCards = () => {
    return (
        <section className='quoteCardsSection'>
            <div className='line'></div>
            <p className='quoteCardSubtitle'>Testimonials</p>
            <h3 className='quoteCardsTitle'>What Passed Clients Have Said</h3>
            <div className='quoteCardsDiv'>
                { quotes.map( card => (
                    <QuoteCard header={card.header} copy={card.copy} />
                )) }
            </div>
        </section>
    )
};

export default QuoteCards;