//import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
	// The Outlet component will conditionally swap between the different pages according to the URL
	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
