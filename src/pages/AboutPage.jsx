// This is a static page mocking an "About Us" section for our fake user data
import './aboutPage.css';

export default function AboutPage() {
	return (
		<div className="container m-5 p-5">
			<div className="row">
				<div className="col-md-12 m-5 p-5 col-sm-12   aboutMe">
					<p>
						Full Stack Developer with experience in bootcamp classes in
						designing, developing, and maintaining web applications <br />
						for clients in the finance and ecommerce sectors. Proficient in
						frontend technologies (HTML, CSS, JavaScript) and <br />
						backend languages (SQL, NpSQL, MongoDB, Express.js, Node.js) to build the server side of a website or
						app, with expertise in web frameworks like React.
					</p>
					<p>
						With my knowledge of coding, I'm excited to refine my skills with
						the right company.
					</p>
				</div>
			</div>
		</div>
	);
}
