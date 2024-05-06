import './nav.css';
import logo from '../assets/images/favicon.ico'
import contactImg from '../assets/images/contact.png'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar">
            <img className= "logo" src={logo} alt="P logo" />
            <div className="menu">
                <Link className="desktopMenus" to="/">Home</Link>  
                <Link className="desktopMenus" to="/about">About Me</Link>  
                <Link className="desktopMenus" to="/profile">Portfolio</Link>  

            </div>
            <button className="contactBtn"><img className='contactImg' src={contactImg} alt="contact logo" />Contact Me</button>
        </nav>
    )
}