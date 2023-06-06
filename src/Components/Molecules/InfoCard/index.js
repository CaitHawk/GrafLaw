import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import './styles.css'

const InfoCard = (copy, icon, header) => {
    return (
        <div className='infoCard'>
            <FontAwesomeIcon icon={faInfoCircle} className='infoCardIcon' />
            <p className='infoCardHeader'>I am researching lawyers</p>
            <p className='infoCardCopy'>Read more about Andrea Graf's background</p>
        </div>
    )
};

export { InfoCard };