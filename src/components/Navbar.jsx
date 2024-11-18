import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 24
      }
    }
  };

  return (
    <div className="h-[15vh] w-screen text-white px-[5vw] text-2xl bg-richblack-900">
      <div className="flex justify-between items-center w-[90vw] mt-[6vh]  bg-richblack-900 text-white h-[10vh] px-[2vw] rounded-full opacity-85 fixed z-40">
        <Link to="/" className="text-3xl font-bold overflow-y-hidden">
          KARAN STUDIOUS
        </Link>
        
        <button 
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex gap-[0.5vw] text-xl">
          <Link to="/" className="button overflow-visible">
            <div className="text-white hover:text-black">Home</div>
          </Link>
          <Link to="/activity" className="button overflow-visible">
            <div className="text-white hover:text-black">Activity</div>
          </Link>
          <Link to="/recentwork" className="button overflow-visible">
            <div className="text-white hover:text-black">Recent Work</div>
          </Link>
          <Link to="/contact" className="button overflow-visible">
            <div className="text-white hover:text-black">Contact</div>
          </Link>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-screen w-64 bg-richblack-800 shadow-lg z-40 md:hidden"
            >
              <div className="flex flex-col items-start pt-24 px-8 gap-8">
                <Link 
                  to="/" 
                  className="w-full text-xl font-semibold hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/activity" 
                  className="w-full text-xl font-semibold hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Activity
                </Link>
                <Link 
                  to="/recentwork" 
                  className="w-full text-xl font-semibold hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Recent Work
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full text-xl font-semibold hover:text-blue-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
