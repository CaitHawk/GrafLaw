import './styles.css';
import { ArrowOutward } from '@mui/icons-material';

const Button = ({ copy, color, withArrow }) => {
    return (
        <button 
            style={{ backgroundColor: `${color === 'white' ? '#e6edff' : '#c36005'}`, 
                color: `${color === 'white' ? '#1e1e1e' : '#e6edff'}`}}>
            {copy}
            { withArrow ? <ArrowOutward /> : null }
        </button>
    )
};

export default Button;