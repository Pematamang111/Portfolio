import './nav.css';
import logo from '../assets/images/favicon.ico';
import contactImg from '../assets/images/contact.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import contactForm from '../pages/Contact';

export default function Nav() {
	//const [showButton, setShowButton] = useState([]);
	//const showButton = contactForm;
	//setShowButton(showButton);
	return (
		<nav className="navbar">
			<img className="logo" src={logo} alt="P logo" />
			<div className="menu">
				<Link className="desktopMenus" to="/">
					Home
				</Link>
				<Link className="desktopMenus" to="/about">
					About Me
				</Link>
				<Link className="desktopMenus" to="/profile">
					Portfolio
				</Link>
			</div>
			<Link className="linkContact"to="/contact">
			{/* onClick={()=> {setShowButton}} */}
			<button className="contactBtn" >
				<img className="contactImg" src={contactImg} alt="contact logo" />
				Contact Me
			</button>
			</Link>
		</nav>


	);
}
