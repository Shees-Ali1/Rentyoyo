import React from 'react'
import './RenteedItem.css'
import { Link } from 'react-router-dom'

function RenteedItem() {
  return (
    <>
    <div className='renteedItemMain'>
       <div className='MainShade-box'>
            <div className='Heading'>Profile</div>
        </div>


        <div className='renteedItemHead'>
            <div className='rI-Text'>

            XYZ has aggreed to rent your item for $ABC from xxx-xxx-x to 22-2212-233 XYZ will Pixkup
            </div>
        </div>
    </div>
     <div className='Btn-parent'>
     <div className='ThrdNext-Btn'>
         <Link to={'/RentedChats'}>
         <button className='SecNxt-Btn'>Next</button>
         </Link>
     </div>
 </div>
</>
  )
}

export default RenteedItem
