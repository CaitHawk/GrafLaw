import Icon from '@mdi/react';
import './styles.css';

const ServiceCard = ({ icon, header, copy, link }) => {
	return (
		<a
			href={link}
			className='serviceCard'
		>
			<Icon
				path={icon}
				size={4}
				className='serviceCardIcon'
			/>
			<h4 className='serviceCardHeader'>{header}</h4>
			<p className='serviceCardCopy'>{copy}</p>
		</a>
	);
};

export default ServiceCard;
