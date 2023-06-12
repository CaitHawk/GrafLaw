import './styles.css';
import Header from './../../Molecules/Header';
import Button from '../../Atoms/Button';
import pageHeadLogo from '../../../images/logo-dark.png';

const data = {
    title: 'Services',
    copy: 'We are well versed in criminal, bankruptcy, divorce, and family law and ensure the best possible outcome for our clients.',
}

const PageHead = ({ title = data.title, copy = data.copy, button = true }) => {
    return (
        <section className='pageHeadSection'>
            <div className='pageHeadImage'>
                <div className='pageHeadHead'>
                    <img src={pageHeadLogo} className='pageHeadLogo' alt='Graf Law' />
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