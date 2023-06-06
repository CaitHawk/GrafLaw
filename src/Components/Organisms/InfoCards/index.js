import { infoCardData } from "./data";
import { InfoCard } from "../../Molecules/InfoCard";
import './styles.css';

const InfoCards = () => {
    return (
        <ol className='infoCardDiv'>
            { infoCardData.map(( card, idx ) => (
                <InfoCard
                    key={`${idx}infoCard`}
                    icon={card.icon}
                    header={card.header}
                    copy={card.copy}/>
            ))}
        </ol>
    )
};

export default InfoCards;