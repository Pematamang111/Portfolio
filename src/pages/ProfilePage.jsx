// This is a static page mocking an "About Us" section for our fake user data
import weatherImg from '../assets/images/Weather-Forecast.png'
import rechargeImg from '../assets/images/recharge.png'
import blogImg from '../assets/images/Blog-Post.png'
import groceryImg from '../assets/images/grocery.png'
import socialNetdbImg from '../assets/images/social-network.png'
import pgSqlImg from '../assets/images/sqldb.png'



export default function ProfilePage() {
    return (
      <div className="container">
        <a href="https://pematamang111.github.io/Weather-Dashboard/"><img src={weatherImg} alt="weather" className="images" /></a>
        <a href="https://stewpra.github.io/R3Charge/"><img src={rechargeImg} alt="battery" className="images" /></a>
        <a href="https://tech-blog-sxgv.onrender.com/"><img src={blogImg} alt="blog post" className="images" /></a>
        <a href="https://bootcamp-arlington-food-shelf.onrender.com/"><img src={groceryImg} alt="food grocery" className="images" /></a>
        <a href="https://drive.google.com/file/d/1sbmvVAnLooX2bR2cBcH4nd8ZVijzG5hj/view?usp=sharingLinks"><img src={socialNetdbImg} alt="social network" className="images" /></a>
        <a href="https://drive.google.com/file/d/14QutSDw_u8ft6toErXzfd5Cg8g3uT7yl/view"><img src={pgSqlImg} alt="database" className="images" /></a>
     </div>
    );
  }
  