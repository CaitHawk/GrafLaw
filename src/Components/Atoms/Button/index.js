import './styles.css';

const Button = ({ copy, color }) => {
    return (
        <button 
            style={{ backgroundColor: `${color === 'white' ? '#e6edff' : '#c36005'}`, 
                color: `${color === 'white' ? '#1e1e1e' : '#e6edff'}`}}>
            {copy}
        </button>
    )
};

export default Button;