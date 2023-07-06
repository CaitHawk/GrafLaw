import './styles.css';
import ServiceCard from '../../Molecules/ServiceCard';
import Title from '../../Atoms/Title';
import {
	titleData,
	cardData,
	serviceCardParagraph1,
	serviceCardParagraph2,
} from './data';

const ServiceCards = () => {
	const topCards = cardData.slice(0, cardData.length / 2);
	const bottomCards = cardData.slice(2);
	return (
		<section className='serviceCardsSection'>
			<div className='serviceCardsCopyDiv'>
				<p className='serviceCardParagraph1'>{serviceCardParagraph1}</p>
				<p className='serviceCardParagraph2'>{serviceCardParagraph2}</p>
			</div>
			<Title
				subtitle={titleData.subtitle}
				color={titleData.color}
				background={titleData.background}
				title={titleData.title}
			/>
			<div className='serviceCardsCardDiv'>
				<div className='topCards'>
					{topCards.map(card => (
						<ServiceCard
							link={card.link}
							icon={card.icon}
							copy={card.copy}
							header={card.header}
						/>
					))}
				</div>
				<div className='bottomCards'>
					{bottomCards.map(card => (
						<ServiceCard
							link={card.link}
							icon={card.icon}
							copy={card.copy}
							header={card.header}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceCards;
