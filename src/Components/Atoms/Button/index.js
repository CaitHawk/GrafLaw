import './styles.css';
import { ArrowOutward } from '@mui/icons-material';

const Button = ({ copy, color, withArrow }) => {
	return (
		<a
			style={{
				backgroundColor: `${color === 'white' ? '#e6edff' : '#c36005'}`,
				color: `${color === 'white' ? '#1e1e1e' : '#e6edff'}`,
			}}
			href='tel:+18086206392'
			className='button'
		>
			{copy}
			{withArrow ? <ArrowOutward /> : null}
		</a>
	);
};

export default Button;
