import './styles.css';
import { disclaimer, copyright, footerCopy, serviceArr, phoneNumber, emailAdress } from './footerData';
import { Phone, AlternateEmail, Facebook, LinkedIn, Copyright } from '@mui/icons-material';
import logoLight from '../../../logo-light.png';

const Footer = () => {
    return (
        <section>
            <div className='informationRow'>
                <div className='logoInfoDiv'>
                    <img className='footerLogo' src={logoLight} alt='Graf Law' />
                    <p className='footerCopy'>{ footerCopy }</p>
                </div>
                <div className='footerNavDiv'>
                    <div className='footerServices'>
                        <h4 className='footerHeader'>Services</h4>
                        <ol className='serviceOl'>{ serviceArr.map( service => (
                            <li className='serviceLink'
                                key={`${service}Footer`}>{ service }</li>))}</ol>
                    </div>
                    <div className='footerSocial'>
                        <h4 className='footerHeader'>Social Links</h4>
                        <div className='socialDiv'>
                            <Facebook />
                            <LinkedIn />
                        </div>
                    </div>
                    <div className='footerContact'>
                        <h4 className='footerHeader'>Contact</h4>
                        <a className='contactLink' href='mailto:handreal@aol.com'>
                            <AlternateEmail />{ emailAdress }
                        </a>
                        <a className='contactLink' href='tel:+18086206392'>
                            <Phone />{ phoneNumber }
                        </a>
                    </div>
                </div>

            </div>
            <p className='disclaimer'>{ disclaimer }</p>
            <p className='copyright'><Copyright />{ copyright }</p>
        </section>
    )
};

export default Footer;