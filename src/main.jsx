import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'

// Bringing in the pages the router will use to conditionally show the appropriate views
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage.jsx';
import AboutPage from './pages/Aboutpage.jsx';


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
      ],
    },
  ]);
  
  // Render the RouterProvider component
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  