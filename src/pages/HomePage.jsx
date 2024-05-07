import './homePage.css';
import profilePic from '../assets/images/profilePic.png';

export default function HomePage() {
	return (
		<div className="homePage">
			<div className="profile">
				<img src={profilePic} alt="Profile Picture" className="profilePic" />
			</div>
			<div className="about">
				<h1 className="heading">
					Hello, <br /> I'm <span className="name">Pema</span> <br /> Full Stack
					Developer
				</h1>
				<p>
					<em>
						I'm a computer programmer and, <br /> I love to code.
					</em>
				</p>
			</div>
		</div>
	);
}
