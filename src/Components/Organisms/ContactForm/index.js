import './styles.css';
import React, { useState } from 'react';
import Button from '../../Atoms/Button';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [referal, setReferal] = useState('');
    const [services, setServices] = useState('');
    const [about, setAbout] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleReferalChange = (event) => {
        setReferal(event.target.value);
    };

    const handleServicesChange = (event) => {
        setServices(event.target.value);
    };

    const handleAboutChange = (event) => {
        setAbout(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Location:', location);
        console.log('Referal:', referal);
        console.log('Services:', services);
        console.log('About:', about);
    };

    return (
        <section className='contactFormSection'>
            <h2 className='contactFormH2'>It all starts with a <em>free,</em> no obligation phone call. Just fill out the form below</h2>
            <form className='contactForm' onSubmit={handleSubmit}>
                <label className='lable'>
                    Name*
                    <input
                        type="text"
                        className='input full'
                        required
                        value={name}
                        onChange={handleNameChange} />
                </label>
                <div className='formGroup'>
                    <label>
                        Email*
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={handleEmailChange} />
                    </label>
                    <label>
                        Phone*
                        <input
                            type="tel"
                            required
                            value={phone}
                            onChange={handlePhoneChange} />
                    </label>
                </div>
                <div className='formGroup'>
                    <label>
                        Where do you live?*
                        <span className='sublabel'>Only serving clients in Hawaii</span>
                        <input
                            type="text"
                            required
                            value={location}
                            onChange={handleLocationChange} />
                    </label>
                    <label>
                        Were you referred by someone?*
                        <span className='sublabel'>If yes, please let us know by whom</span>
                        <input
                            type="text"
                            required
                            value={referal}
                            onChange={handleReferalChange} />
                    </label>
                </div>
                <label>
                    Services  <span style={{ 
                        fontSize: '12px', 
                        display: 'inline', 
                        padding: '4px'}} className='optionalSpan'>{'(optional)'}</span>
                    <input
                        type="text"
                        value={services}
                        onChange={handleServicesChange} />
                </label>
                <label>
                    Please tell us a bit about your situation
                    <input
                        type="email"
                        className='textArea'
                        value={about}
                        onChange={handleAboutChange} />
                </label>
                <Button
                    className='contactFormButton'
                    copy='book your free call now'
                    color='orange'
                    withArrow={true}
                    style={{ marginTop: '40px !important'}} />
            </form>
            <p className='contactFormP'>Please do not send any confidential or time-sensitive information until you have received a written agreement from our office to perform legal services on your behalf.</p>
        </section>
    );
}

export default ContactForm;
