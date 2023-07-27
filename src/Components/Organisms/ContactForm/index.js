import './styles.css';
import React, { useState } from 'react';
import { send } from '@emailjs/browser';
// import Button from '../../Atoms/Button';

const ContactForm = () => {
	const [toSend, setToSend] = useState({
		from_name: '',
		reply_to: '',
		phone: '',
		location: '',
		referal: '',
		services: '',
		message: '',
	});

	const handleChange = e => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		send('service_sbbruya', 'template_kyfgi4g', toSend, '8ujJcvqA8Mjo3ztoa')
			.then(response => {
				console.log('SUCCESS!', response.status, response.text);
				alert('Email Sent');
			})
			.catch(err => {
				console.log('FAILED...', err);
				alert('Uh oh! Something went wrong.');
			});
		setToSend({
			...toSend,
			from_name: '',
			phone: '',
			location: '',
			services: '',
			referal: '',
			message: '',
			reply_to: '',
		});
	};

	return (
		<section className='contactFormSection'>
			<h2 className='contactFormH2'>
				It all starts with a <em>free,</em> no obligation phone call. Just fill
				out the form below
			</h2>
			<form
				className='contactForm'
				onSubmit={handleSubmit}
			>
				<label className='lable'>
					Name*
					<input
						type='text'
						className='input full'
						required
						name='from_name'
						value={toSend.from_name}
						onChange={handleChange}
					/>
				</label>
				<div className='formGroup'>
					<label>
						Email*
						<input
							type='email'
							required
							name='reply_to'
							value={toSend.reply_to}
							onChange={handleChange}
						/>
					</label>
					<label>
						Phone*
						<input
							type='tel'
							required
							name='phone'
							value={toSend.phone}
							onChange={handleChange}
						/>
					</label>
				</div>
				<div className='formGroup'>
					<label>
						Where do you live?*
						<span className='sublabel'>Only serving clients in Hawaii</span>
						<input
							type='text'
							required
							name='location'
							value={toSend.location}
							onChange={handleChange}
						/>
					</label>
					<label>
						Were you referred by someone?*
						<span className='sublabel'>If yes, please let us know by whom</span>
						<input
							type='text'
							name='referal'
							required
							value={toSend.referal}
							onChange={handleChange}
						/>
					</label>
				</div>
				<label>
					Services{' '}
					<span
						style={{
							fontSize: '12px',
							display: 'inline',
							padding: '4px',
						}}
						className='optionalSpan'
					>
						{'(optional)'}
					</span>
					<input
						type='text'
						name='services'
						value={toSend.services}
						onChange={handleChange}
					/>
				</label>
				<label>
					Please tell us a bit about your situation
					<input
						type='text'
						name='message'
						className='textArea'
						value={toSend.message}
						onChange={handleChange}
					/>
				</label>
				<button
					className='contactFormButton'
					type='submit'
				>
					send
				</button>
			</form>
			<p className='contactFormP'>
				Please do not send any confidential or time-sensitive information until
				you have received a written agreement from our office to perform legal
				services on your behalf.
			</p>
		</section>
	);
};

export default ContactForm;

// function ContactSection() {
// 	const [toSend, setToSend] = useState({
// 		from_name: '',
// 		phone: '',
// 		location: '',
// 		services: '',
// 		referal: '',
// 		message: '',
// 		reply_to: '',
// 	});

// 	const onSubmit = e => {
// 		e.preventDefault();
// 		send('service_noopmg9', 'template_qmsomwp', toSend, 'HcaUXf75I1PPZnyJ2')
// 			.then(response => {
// 				console.log('SUCCESS!', response.status, response.text);
// 				alert('Email Sent');
// 			})
// 			.catch(err => {
// 				console.log('FAILED...', err);
// 				alert('Uh oh! Something went wrong.');
// 			});
// 		setToSend({
// 			...toSend,
// 			from_name: '',
// 			phone: '',
// 			location: '',
// 			services: '',
// 			referal: '',
// 			message: '',
// 			reply_to: '',
// 		});
// 	};

// 	const handleChange = e => {
// 		setToSend({ ...toSend, [e.target.name]: e.target.value });
// 	};

// 	return (
// 		<section
// 			className='contactMain'
// 			id='contactSection'
// 		>
// 			<h1>
// 				Say <span className='contactSpan'>Hello</span>!
// 			</h1>
// 			<form
// 				onSubmit={onSubmit}
// 				className='contactForm'
// 			>
// 				<input
// 					type='text'
// 					name='from_name'
// 					placeholder='Your Name'
// 					value={toSend.from_name}
// 					onChange={handleChange}
// 					className='contactFromInput'
// 					required
// 				/>
// 				<input
// 					type='text'
// 					name='reply_to'
// 					placeholder='Your email'
// 					value={toSend.reply_to}
// 					onChange={handleChange}
// 					className='contactEmailInput'
// 					required
// 				/>
// 				<input
// 					type='text'
// 					name='message'
// 					placeholder='Your message'
// 					value={toSend.message}
// 					onChange={handleChange}
// 					className='contactMessageInput'
// 					required
// 				/>
// 				{/* <div class="g-recaptcha" data-sitekey="6LdM3K8gAAAAAHQSOmLpl5R8bnmTU7yJcHDorQ4R"></div> */}
// 				<button
// 					type='submit'
// 					className='contactSubmitBtn'
// 				>
// 					SEND
// 				</button>
// 			</form>
// 		</section>
// 	);
// }

// // export default ContactSection;
