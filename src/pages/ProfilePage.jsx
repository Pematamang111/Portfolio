// This is a static page mocking an "About Us" section for our fake user data
import './profilePage.css';
import weatherImg from '../assets/images/Weather-Forecast.png';
import rechargeImg from '../assets/images/recharge.png';
import blogImg from '../assets/images/Blog-Post.png';
import groceryImg from '../assets/images/grocery.png';
import socialNetdbImg from '../assets/images/social-network.png';
import pgSqlImg from '../assets/images/sqldb.png';

export default function ProfilePage() {
	return (
		<div className="container portfolio">
			<div className="weather">
				<a href="https://pematamang111.github.io/Weather-Dashboard/">
					<img src={weatherImg} alt="weather" className="images" />
				</a>
				<h4>Weather App</h4>
				<p>
					Weather Dashboard is a webpage where user can see current and future 5
					more days weather forecast.
				</p>
				<p>Tools: HTML, CSS, JavaScript, JQuery, Tailwind, DaisyUI</p>
			</div>
			<div className="recharge">
				<a href="https://stewpra.github.io/R3Charge/">
					<img src={rechargeImg} alt="battery" className="images" />
				</a>
				<h4>R3Charge</h4>
				<p> R3Charge is the ultimate time management tool with a twist.</p>
			</div>
			<div className="blog">
				<a href="https://tech-blog-sxgv.onrender.com/">
					<img src={blogImg} alt="blog post" className="images" />
				</a>
				<h4>Blog Post</h4>
				<p>
					Blog Post is Restful Api based app, where users can post blogs by
					creating username and password.
				</p>
				<p>Tools: PostgreSQL, Sequelize, express, session</p>
				<p>
					Note: This page has been deployed in Render so, it might take little
					time for loading.
				</p>
			</div>
			<div className="arlington">
				<a href="https://bootcamp-arlington-food-shelf.onrender.com/">
					<img src={groceryImg} alt="food grocery" className="images" />
				</a>
				<h4>Arlington Food Shelf</h4>
				<p>
					The Arlington Food Shelf is an organization in Arlington, VT. that
					provides food free of charge to anyone in need.
				</p>
				<p>
					Tools: Express, PostgreSQL, Express-Session, Sequelize, Google-Map
					API, Handlebars, Bootstrap
				</p>
				<p>
					Note: This page has been deployed in Render so, it might take little
					time for loading.
				</p>
			</div>
			<div className="network">
				<a href="https://drive.google.com/file/d/1sbmvVAnLooX2bR2cBcH4nd8ZVijzG5hj/view?usp=sharingLinks">
					<img src={socialNetdbImg} alt="social network" className="images" />
				</a>
				<h4>Social Network</h4>
				<p>
					Social Network is based on api routes, where users can create, read,
					update and delete them.
				</p>
				<p>Tools: Restful Api, dotenv, PostgreSQL, Sequelize, HTML, CSS</p>
			</div>
			<div className="ecommerce">
				<a href="https://drive.google.com/file/d/14QutSDw_u8ft6toErXzfd5Cg8g3uT7yl/view">
					<img src={pgSqlImg} alt="database" className="images" />
				</a>
				<h4>E-Commerce-Database</h4>
				<p>
					This project is a ecommerce database, which has models of category,
					product and tag, and is based on Restful Api.
				</p>
				<p>Tools: Restful Api, dotenv, PostgreSQL, Sequelize, HTML, CSS</p>
			</div>
		</div>
	);
}
