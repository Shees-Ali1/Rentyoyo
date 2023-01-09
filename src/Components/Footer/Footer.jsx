import React from 'react'
import './Footer.css'
import { TfiFacebook, } from 'react-icons/tfi';
import { FaInstagram, } from 'react-icons/fa';
import { SiTwitter, } from 'react-icons/si';

export default function Footer() {
  return (
    <>
    <div className='Main-footer'>
        <div className='Footer-Main'>
            <div className='Footer-head'>Rentyoyo</div>
            <div className='Mail-text'>@Rentyoyo.com</div>
            <div className='Icons'>
            <div  className='logo'><TfiFacebook/></div>
                <div  className='logo'><FaInstagram/></div>
                <div  className='logo'><SiTwitter/></div>

            </div>
        </div>
   

        <div className='Footer-SecMain'>
        
        <div className='Info-footer'>
           <div className='Info-Srvc'>Service</div> 
            <div className='click'>Home</div>
            <div className='click'>Categories</div>
            <div className='click'>Pickup</div>
            
        </div>
        <div className='Info-footer'>
           <div className='Info-Srvc'>Company</div> 
            <div className='click'>About</div>
            <div className='click'>Contact</div>
            <div className='click'>Sitemap</div>
            <div className='click'>Campaigns</div>
            <div className='click'>Blogs</div>
        </div>
        <div className='Info-footer'>
           <div className='Info-Srvc'>Help CENTER</div> 
            <div className='click'>Terms & Conditions</div>
            <div className='click'>Support</div>
            <div className='click'>Faqs</div>
        </div>
        </div>
    </div>
    </>
  )
}
