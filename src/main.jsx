import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './components/nav.css';
import './components/footer.css';


import App from './App.jsx';

// Bringing in the pages the router will use to conditionally show the appropriate views
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'profile',
				element: <ProfilePage />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
		],
	},
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
