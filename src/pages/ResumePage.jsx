import './resumePage.css';

export default function ResumePage() {
	return (
		<div className="container">
			<main className="m-5 header">
				<h2>Pema Sherpa</h2>
				<p>pematamang111@gmail.com | 646-732-6006 | Queens, NY</p>
				<p>
					LinkedIn:
					<a href="https://www.linkedin.com/in/pema-sherpa-b7073530a/">
						LinkedIn
					</a>{' '}
					| GitHub: <a href="https://github.com/Pematamang111">GitHub</a> |
					Portfolio:
					<a href="https://lucent-gumption-866be3.netlify.app/">Portfolio</a>
				</p>
				<button type="button" class="btn btn-info"><a href="https://plum-clemmie-11.tiiny.site" class="download">Download Resume</a></button>
			</main>
			<br />

			<section className="summary">
				<p>
					Full Stack Developer with a certificate in Full Stack Web Development
					from the Columbia University Coding Boot Camp. Innovative
					problem-solver who is passionate about developing apps with a focus on
					mobile-first design and development. Strengths in creativity,
					teamwork, and building projects from ideation to execution.
				</p>
			</section>
			<br />
			<section className="skills">
				<h3>TECHNICAL SKILLS</h3>
				<p>
					Frontend: HTML, CSS, JQuery, Javascript, React, Bootstrap, Tailwind, DaisyUI,
				</p>
				<p>
					Backend: PostgreSQL, NoSQL, MySQL, MongoDB, Express, React, Node.js, Handlebars, Webpack, MERN, ORM, State
				</p>
			</section>
			<br />
			<section className="projects">
				<h3>RELATED EXPERIENCE</h3>
				<p>
					<b>R3Charge</b> |{' '}
					<a href="https://github.com/Stewpra/R3Charge.git">Repo</a> |{' '}
					<a href="https://stewpra.github.io/R3Charge/">Deployed</a>
				</p>
				<ul>
					<li>
						Summary: R3Charge is the ultimate time management tool with a twist.
					</li>
					<li>
						Role: I created a function where the parameters are for calculating
						time after a user clicks a button to take a break or to start work.
					</li>
					<li>Tools: HTML, CSS, JavaScript, JQuery, Tailwind, DaisyUI</li>
				</ul>
				<br />
				<p>
					<b>Arlington-Food-Shelf</b> | Repo:{' '}
					<a href="https://github.com/SuperRonanCraft/bootcamp-Arlington-Food-Shelf.git">
						Repo
					</a>{' '}
					| Deployed: <a href=" https://arlingtonfoodshelf.com/ ">Deployed</a>
				</p>
				<ul>
					<li>
						Summary: The Arlington Food Shelf has an official page to
						communicate with the community.
					</li>
					<li>
						Role: The website shows what foods are currently in stock and user
						can sign in to place an order. I added the carousels from bootstrap
						in pages to show the images of food available, picture of Arington
						area and people who currently working.{' '}
					</li>
					<li>
						Tools: HTML, CSS, Javascript, Express, Express-Session, Bootstrap,
						PgSQL, Sequelize, Google-Map API, Handlebars{' '}
					</li>
				</ul>
				<br />
				<p>
					<b>1StopShop</b> | Repo:{' '}
					<a href="https://github.com/kadirbalkaya10/1StopShop.git">Repo</a> |
					Deployed: <a href="https://onestopshop-d956.onrender.com">Deployed</a>{' '}
				</p>
				<ul>
					<li>
						Summary: 1StopShop is a user-friendly online platform, offers a
						selection of high-fashion clothing shopping experience.
					</li>
					<li>Role: Back-end developer</li>
					<li>
						Tools: DaisyUI, Tailwind, CSS, HTML, JS, React + Vite, Node.js,
						Express.js, MongoDB, GraphQL
					</li>
				</ul>
			</section>
			<br />
			<section className="work-experience">
				<h3>ADDITIONAL EXPERIENCE</h3>
				<h4>Food Bazaar</h4>
				<p>Head Cashier</p>
				<li>
					Provided prompt and effective assistance to cashiers, ensuring a
					smooth and efficient checkout experience for customers.
				</li>
				<li>
					{' '}
					Maintained accurate shelf pricing by diligently correcting and
					updating price tags, enhancing the overall shopping experience.
				</li>

				<br />
				<h4>Walmart</h4>
				<p>Fabric Department Manager</p>
				<li>
					{' '}
					Procured necessary fabric items efficiently to meet production
					demands.
				</li>
				<li>
					Managed the process of sending damaged products to the claim
					department, ensuring timely resolution.
				</li>
				<li>
					Directed customers effectively, ensuring they received prompt
					assistance and guidance.
				</li>
				<li>
					Maintained optimal inventory levels by restocking low shelves with
					fabric items, ensuring product availability for customers.
				</li>
			</section>
			<br />
			<section className="education">
				<h3>EDUCATION</h3>
				<p>University: Columbia Engineering Boot Camp, Feb 2024 - May 2024</p>
			</section>
		</div>
	);
}
