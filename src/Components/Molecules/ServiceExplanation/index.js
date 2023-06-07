import './styles.css';
import Image2 from '../../../divorceImage.png';

const data = {
    header: 'Divorce Law',
    copy: ['Divorce law is a complex area of family law that deals with the legal process of ending a marriage. It can be a difficult and emotionally charged time for all parties involved. The process of ending a marriage can encompass a wide range of issues, such as property division, alimony, child custody, and support. At the Law Office of Andrea Graf, our experienced attorneys understand the complexities of divorce law and are dedicated to helping our clients navigate the divorce process with compassion and professionalism.', 
    'Our team of attorneys is committed to providing personalized attention and support to each and every one of our clients. We take the time to listen to their concerns and provide guidance throughout the legal process to ensure that they feel comfortable and confident with the decisions being made on their behalf. Our goal is to help our clients achieve the best possible outcome for their case, while protecting their rights and interests.',
    'We understand that divorce can be a stressful and overwhelming experience. That\'s why we work tirelessly to ensure that our clients are informed of their legal rights and options, and that they have the support they need throughout the process. Our attorneys are skilled negotiators and litigators, and will work diligently to achieve a favorable outcome for our clients, whether through mediation or litigation.', 
    'If you\'re facing a divorce, it\'s important to have experienced legal counsel on your side. Our team of attorneys is here to help you navigate the complexities of divorce law and ensure that your legal interests are protected. Contact us today to schedule a consultation and learn how we can help you with your divorce case.'],
    image: Image2,
    color: '#aeccea',
    reversed: false,
};

const ServiceExplaination = ({
    header = data.header,
    copy = data.copy,
    image = data.image,
    color = data.color,
    reversed = data.reversed
}) => {
    console.log(color, reversed);
    return (
        <section className='serviceExplainationSection'
            style={{ flexDirection: `${ reversed ? 'row-reverse' : 'row' }`}}>
            <div className='serviceExplainationImageDiv'>
                <img src={ image } alt='scenic hawaii' className='serviceExplainationImage'
                    style={{ boxShadow: `${reversed ? '40px -40px' : '-40px 40px'} 30px 0 ${color}`}}/>
            </div>
            <div className='serviceExplainationTextDiv'
                style={{ padding: `${ reversed ? '0 40px 0 0' : '0 0 0 40px'}`}}>
                <h2 className='serviceExplainationHeader'>{ header }</h2>
                <div className='serviceExplainationParagraphDiv'>
                    {copy.map( paragraph => (
                        <p className='serviceExplainationCopy'>{ paragraph }</p>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default ServiceExplaination;