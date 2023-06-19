import './styles.css';
import Header from './../../Molecules/Header';
import Button from '../../Atoms/Button';
import pageHeadLogo from '../../../images/Vector.png';
import pageHeadLogoText from '../../../images/GRAF LAW.png';

const PageHead = ({ title, copy, button }) => {
    return (
        <section className='pageHeadSection'>
            <div className='pageHeadImage'>
                <div className='pageHeadHead'>
                    <a href='/' className='pageHeadHome'>
                        <img src={pageHeadLogo} className='pageHeadLogo' alt='Graf Law' />
                        <img src={pageHeadLogoText} className='pageHeadLogoText' alt='Graf Law' />
                    </a>
                    <Header />
                </div>
                <div className='pageHeadTextDiv'>
                    <h1 className='pageHeadTitle'>{title}</h1>
                    <p className='pageHeadCopy'>
                        {copy}
                    </p>
                    {button && <Button copy='Free Consultation' color='orange' withArrow={true}/>}
                </div>
            </div>
        </section>
    )
};

export default PageHead;