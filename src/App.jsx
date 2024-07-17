import Topbar from './components/Topbar.jsx';
import Navbar from './components/Navbar.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='App'>
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
