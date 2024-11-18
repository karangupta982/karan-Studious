import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Activity from './components/Activity';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <div className="w-screen" id='home'>
        <div className=''>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home ids={{home:"home"}} />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/recentwork" element={<RecentWork />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
