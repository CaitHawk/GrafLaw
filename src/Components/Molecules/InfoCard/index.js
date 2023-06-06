import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css'

const InfoCard = ({ copy, icon, header }) => {
    return (
        <li className='infoCard'>
            <FontAwesomeIcon icon={ icon } className='infoCardIcon' />
            <p className='infoCardHeader'>{ header }</p>
            <p className='infoCardCopy'>{ copy }</p>
        </li>
    )
};

export { InfoCard };