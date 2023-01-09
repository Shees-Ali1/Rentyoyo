import React, { useState } from 'react'
import './Register.css'
import LoginMain from '../../Images/LoginMain.png'
import {FiFacebook }from 'react-icons/fi'

import {CiInstagram }from 'react-icons/ci'
import {CiTwitter }from 'react-icons/ci'
import {AiFillEye }from 'react-icons/ai'
import {AiFillEyeInvisible }from 'react-icons/ai'
import { Link } from 'react-router-dom'


function Register() {
    const [isRegister,setIsregister] =useState(true)
    const [isLogin,setIsLogin] =useState()




    const handleLoginPage = () =>{
        setIsregister(false)
        setIsLogin(true)
        
        
    }
    const handleRegisterPage = () =>{
        setIsregister(true)
        setIsLogin(false)
        
        
    }

  return (
    <>   
     <div className='RegisterMain'>

        {isRegister &&
        <>
            <div className='ImgPortion'>
            
                <img className='Img-back' src={LoginMain}/>
                <div className='LeftHead'>
                    <div className='Login-Head'>Rentyoyo</div>
                    <div className='Member'>Be a Member</div>
                    <div className='RegisterContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate error.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate error.
                    </div>


                    <div className='PortionIcons'>
                        <div className='borderIcon'>
                            <FiFacebook className='imageIcons' />
                            </div>
                        <div className='borderIcon'>
                            <CiInstagram className='imageIcons'/>
                            </div>
                        <div className='borderIcon'>
                            <CiTwitter className='imageIcons'/>
                            </div>
                    </div>
                </div>
        </div>


        <div className='TextPortion'>
            
            <div className='RightPortion'>
                <div className='TextHead'>Register</div>
                <div className='textContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis quae.</div>
            </div>
            

            <div className='InputPortion'>
                <div className='BarsPortion'>
                    <input className='InputBars' placeholder='Fullname'> 
                    
                    </input>
                    <input className='InputBars' placeholder='Username'/>
                    <div className='InputBars'>
                    <input className='pass-Input' type='password' placeholder='Password' />
                    <i className='pass-Icon'><AiFillEye/></i>
                        
                    </div>
                    <div className='InputBars'>
                    <input className='pass-Input' type='password' placeholder='Confirm Password' />
                    <i className='pass-Icon'><AiFillEyeInvisible/></i>
                        
                    </div>
                </div>

            <div className='LinkBtn'>
                <div onClick={handleLoginPage}  className='LinkBtn-Text'>Login?</div>
                </div>
            </div>

            <div className='registerBtn'>
                <button className='TextBtn'>Register</button>
            </div>

            
        </div>
        </>
        }
        {isLogin&&

<>
<div className='ImgPortion'>

    <img className='Img-back' src={LoginMain}/>
    <div className='LeftHead'>
        <div className='Login-Head'>Rentyoyo</div>
        <div className='Member'>Welcome Back</div>
        <div className='RegisterContent'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate error.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptate error.
        </div>


        <div className='PortionIcons'>
            <div className='borderIcon'>
                <FiFacebook className='imageIcons' />
                </div>
            <div className='borderIcon'>
                <CiInstagram className='imageIcons'/>
                </div>
            <div className='borderIcon'>
                <CiTwitter className='imageIcons'/>
                </div>
        </div>
    </div>
</div>


<div className='TextPortion'>

<div className='RightPortion'>
    <div  className='TextHead'>Login</div>
    <div className='textContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, veritatis quae.</div>
</div>


<div className='InputPortion'>
    <div className='BarsPortion'>
      
        <input className='InputBars' placeholder='Username/Email'/>
        <input className='InputBars' type='password' placeholder='Password'/>
        
    </div>

<div className='LinkBtn'>
    <div className='LinkBtn-Text'>Forgot Password?</div>
    </div>
</div>

    <Link to={'/Profile'}>
<div className='registerBtn'>
    <button className='TextBtn'>Login</button>
</div>
    </Link>
<div className='SecregisterBtn'>
   
    <button  onClick={handleRegisterPage}  className='SecTextBtn'>Create Account</button>
</div>



</div>
</>
        
        
        
        
        }
    </div>
    </>

  )
}

export default Register
