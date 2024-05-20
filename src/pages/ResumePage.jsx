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
			</main>
            <br />

			<section className="summary">
				<p>
					Motivated tech professional and problem solver with a background in
					big data. Experience with analytical thinking, project management,
					strong learn skills, and execellent verbal and written communication.
				</p>
			</section>
            <br />
			<section className="skills">
				<h3>TECHNICAL SKILLS</h3>
				<p>
					Frontend: HTML, CSS, JQuery, Javascript, Bootstrap, Tailwind, DaisyUI,
				</p>
				<p>
					Backend: MySQL, MongoDB, Express, ReactJS, Node, Handlebars, Webpack,
					AWS, MERN, ORM
				</p>
			</section>
            <br />
			<section className="projects">
				<h3>PROJECTS</h3>
				<p>
					<b>R3Charge</b> |{' '}
					<a href="https://github.com/Stewpra/R3Charge.git">Repo</a> |{' '}
					<a href="https://stewpra.github.io/R3Charge/">Deployed</a>
				</p>
				<ul>
					<li>
						The battery metaphor reminds user to take breaks, the inspirational
						quotes boost user's motivation, reducing stress, and improving
						productivity. Also Dad jokes keep user entertained and make them
						feel active to get back on work again.
					</li>
					<li>
						R3Charge is the Ultimate time management tool with a twist! This app
						uses a unique battery metaphor to guide user's work and breaks
						seamlessly. I created a function where the parameters are for
						calculating time after user clicks the button to take break or to
						start work.
					</li>
					<li>
						Tools/Languages: HTML, CSS, Javascript, Jquery, Tailwaing, daisyUI
					</li>
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
						The Arlington Food Shelf has an official page to communicate with
						the community.
					</li>
					<li>
						The website shows what foods are currently in stock and user can
						sign in to place an order. I added the carousels from bootstrap in
						pages to show the images of food available, picture of Arington area
						and people who currently working.{' '}
					</li>
					<li>
						Tools/Languages: HTML, CSS, Javascript, Express, Express-Session,
						Bootstrap, PgSQL, Sequelize, Google-Map API, Handlebars{' '}
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
						This app is a user-friendly online platform, offers a seamless
						shopping experience, featuring a curated selection of high-fashion
						clothing for every style and occasion.
					</li>
					<li>
						The products from product.js has been seeded using React hook. Users
						can see what products are available on inventory list. I used query
						hook to get all products and mapping through product, if data of
						product is there, then elements has the product.value which is
						title, description, image will be shown on browser.
					</li>
					<li>
						Tools/Languages: DaisyUI, Tailwind, CSS, HTML, JS, React + Vite,
						Node.js, Express.js, MongoDB, GraphQL
					</li>
				</ul>
			</section>
            <br />
            <section className='work-experience'>
                <h3>WORK EXPERIENCE</h3>
                 <h4>Food Bazaar</h4>
                 <p>Head Cashier</p>
                 <li>Fix issues when Cashier double charge product.</li>
                 <li>Make sure customers get what they looking for.</li>
                 <li>remove wrong price tags from shelf.</li>
                 <br />
                 <h4>Walmart</h4>
                 <p>Fabric Department Manager</p>
                 <li>Get all needed fabric items before runs out.</li>
                 <li>Claim damage product.</li>
                </section>
            <br />
			<section className="education">
                <h3>EDUCATION</h3>
             <p>University: Columbia Engineering Boot Camp, Feb 2024 - May 2024</p> 
             
            </section>
		</div>
	);
}
