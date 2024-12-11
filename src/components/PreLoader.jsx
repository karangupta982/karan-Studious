import React from 'react'
import './PreLoader.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



gsap.registerPlugin(useGSAP);

export default function PreLoader() {
  useGSAP(()=>{
    gsap.timeline().to('.content',{
            opacity:0,
            duration:1,
            delay:10,
    }).to('.overlay',{
      opacity:1,
      y:'-100vh',
      duration:1,
    })
  })

  return (
    

    <div className='flex justify-center items-center h-[100vh] w-[100vw] bg-black'>
      <div className="  relative content">
        <h2 className=''>Karan Studious</h2>
        <h2 className='bg-gradient'>Karan Studious</h2>
      </div>
      <div className="overlay"></div>
    </div>
    
  )
}
