import Icon from '@mdi/react';
import { mdiHandcuffs } from '@mdi/js';
import './styles.css';

const data = {
    icon: mdiHandcuffs,
    header: 'Criminal Law',
    copy: 'Read articles about family law and divorce issues'
}

const ServiceCard = ({ icon = data.icon, header = data.header, copy = data.copy }) => {
    return (
        <div className='serviceCard'>
           <Icon path={ icon } size={4} className='serviceCardIcon' />
            <h4 className='serviceCardHeader'>{ header }</h4>
            <p className='serviceCardCopy'>{ copy }</p>
        </div>
    )
};

export default ServiceCard;