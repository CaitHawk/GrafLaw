import './styles.css';
import { FormatQuote } from '@mui/icons-material';

const QuoteCard = ({header, copy}) => {
    return (
        <div className='quoteCard'>
            <div className='quoteIcon'>
                <FormatQuote style={{ width: '66px', height: '66px', margin: '10px'}} />
            </div>
            <div className='quoteTextDiv'>
                <h4>{ header }</h4>
                <p className='quoteCopy'>{ copy }</p>
            </div>
        </div>
    )
};

export default QuoteCard;