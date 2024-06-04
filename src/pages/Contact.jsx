import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
				publicKey: 'YOUR_PUBLIC_KEY',
			})
			.then(
				() => {
					console.log('SUCCESS!');
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
			<form action="" ref={form}>
				<input type="text" className="name" placeholder="Your Name" required />
				<input
					type="text"
					className="emailInput"
					placeholder="Your Email"
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
