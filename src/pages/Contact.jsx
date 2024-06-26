import { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_kwhlfjy', 'template_5netiur', form.current, 
				 'lx-05ncNLBvq9Z6Wu'
			)
			.then(
				() => {
					console.log('SUCCESS!');
					e.target.reset();
					alert('Email Sent!');
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<div className="col-12 col-md-8 mb-3 form">
			<h1 className="title">Contact Me</h1>
			<p className="descrip">
				Please fill out the form below to discuss any work oppertunities.
			</p>
			<form ref={form} onSubmit={sendEmail}>
				<input
					type="text"
					className="name"
					placeholder="Your Name"
					name="your_name"
					required
				/>
				<input
					type="text"
					className="emailInput"
					placeholder="Your Email"
					name="your_email"
					required
				/>
				<textarea
					name="message"
					className="msg"
					placeholder="Your Message"
					required></textarea>
				<button type="submit" value="Send" className="submitbtn">
					Submit
				</button>
			</form>
		</div>
	);
}
