import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Activity from './components/Activity';
import RecentWork from './components/RecentWork';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import PreLoader from './components/PreLoader';
import { useEffect, useState } from 'react';

function App() {
  const [loading,setLoading]  = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLoading(false);
    },12000);
    return ()=>clearTimeout(timer);
  },[]);
  return (
    <>
      {
        loading ? (
          <PreLoader/>
        ) : (
          < >
            <CustomCursor />      
            <div className="w-screen overflow-x-hidden" id='home'>
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
        )
      }
      {/* <PreLoader/> */}
    </>
  );
}

export default App;
