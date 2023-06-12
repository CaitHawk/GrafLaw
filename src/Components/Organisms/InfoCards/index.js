import { infoCardData } from "./data";
import { InfoCard } from "../../Molecules/InfoCard";
import Title from "../../Atoms/Title";
import './styles.css';

const InfoCards = () => {
    return (
        <section className='InfoCardsSection'>
            <Title 
                subtitle='How I can help' 
                title='What Can I Help With Today?' 
                background='#fff' 
                color='#1e1e1e'  />
            <ol className='infoCardDiv'>
                {infoCardData.map((card, idx) => (
                    <InfoCard
                        key={`${idx}infoCard`}
                        icon={card.icon}
                        header={card.header}
                        copy={card.copy} />
                ))}
            </ol>
        </section>
    )
};

export default InfoCards;