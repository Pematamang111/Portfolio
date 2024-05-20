import './homePage.css';
import profilePic from '../assets/images/profilePic.png';

export default function HomePage() {
	return (
		<div className="container m-5 p-5 homePage">
			<div className="row">
				<div className="col-md-8 col-lg-12 col-sm-8 col-xs-4 homePage">
					<div className="container profile">
						<img
							src={profilePic}
							alt="Profile Picture"
							className="profilePic"
						/>
					</div>
					<div className="p-5 about">
						<h1 className="heading">
							Hello, <br /> I'm <span className="myName">Pema</span> <br /> Full
							Stack Developer
						</h1>
						<p>
							<em>
								I'm a computer programmer and, <br /> I love to code.
							</em>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
