import { Outlet } from 'react-router-dom';
import Nav from '../src/components/nav';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;