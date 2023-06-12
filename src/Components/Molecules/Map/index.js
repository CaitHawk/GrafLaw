import './styles.css';
import map from '../../../images/map.png';


const Map = () => {
    return (
        <section>
            <img src={map} alt='map' className='mapImg' />
            <div className='mapPDiv'>
                <p>P.O. Box 1210, Pearl City, Hawaii 96706</p>
                <p>Phone: <a href='tel:+18086206392'>{'(808) 620-6392'}</a></p>
                <p>{'Fax: (613) 208-0716'}</p>
                <p>General Inquiries: <a href='mailto:handreal@aol.com'>handreal@aol.com</a></p>
            </div>
        </section>
    )
};

export default Map;