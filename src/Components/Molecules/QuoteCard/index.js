import './styles.css';
import { FormatQuote } from '@mui/icons-material';

const QuoteCard = () => {
    return (
        <div className='quoteCard'>
            <div className='quoteIcon'>
                <FormatQuote style={{ width: '66px', height: '66px', margin: '10px'}} />
            </div>
            <div className='quoteTextDiv'>
                <h4>Header here</h4>
                <p className='quoteCopy'>Andrea helped me on a couple of matters while I lived on Oahu. Now that I'm on the mainland I still call for her advice. Would HIGHLY recommend her to any one on Oahu that needs legal help!!!</p>
            </div>
        </div>
    )
};

export default QuoteCard;