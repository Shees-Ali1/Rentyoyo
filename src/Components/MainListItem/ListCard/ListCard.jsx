import React from 'react'
// import SecCardArr from '../ListCard/SecCardArr'
import SecCardArr from './ListCardArr'
import { Link } from "react-router-dom";

function ListCard() {
  return (

    <>
<div className='Main-Section-Card'>
    <div className='MainListCard'>
     {SecCardArr.map((ite,index)=>{ 
             return( 
                 <div className='SecMainFirstCard'>
              {ite.map((item,arr)=> 
                 <div className='SecFirstPartyCard'>
                     <div className='SecImgPrnt'>
                     
                     <div className='SecShadeImg'>
                         <div >
                          
                             <img className='Main-SecPartyMainImg' 
                             src={item.image} />
                         </div>
                     </div>
                     </div>


                     <div className='SecContent'>
                         <div>
                             <div className='SecContentName'>
                                 {item.name}
                                 </div>
                             <div className='SecContentDesc'>{item.content}</div>
                         </div>
                         <div className='SecContentPrice'>{item.price}</div>
                         <div className='SecSenderDetail'>
                             <div >
                               
                                 <img className='SecImgChat' src={item.icon}/> 
                             </div>
                             <div>
                                {item.chatName}
                             </div>
                             </div>
                     </div>



                 </div>
                   )}  
                 </div> 
                  )}  
 )}  


    </div>



                                {/* ScndCard */}
          



    <div className='MainListCard'>
     {SecCardArr.map((ite,index)=>{ 
             return( 
                 <div className='SecMainFirstCard'>
              {ite.map((item,arr)=> 
                 <div className='SecFirstPartyCard'>
                     <div className='SecImgPrnt'>
                     
                     <div className='SecShadeImg'>
                         <div >
                          
                             <img className='Main-SecPartyMainImg' 
                             src={item.image} />
                         </div>
                     </div>
                     </div>


                     <div className='SecContent'>
                         <div>
                             <div className='SecContentName'>
                                 {item.name}
                                 </div>
                             <div className='SecContentDesc'>{item.content}</div>
                         </div>
                         <div className='SecContentPrice'>{item.price}</div>
                         <div className='SecSenderDetail'>
                             <div >
                               
                                 <img className='SecImgChat' src={item.icon}/> 
                             </div>
                             <div>
                                {item.chatName}
                             </div>
                             </div>
                     </div>



                 </div>
                   )}  
                 </div> 
                  )}  
 )}  


    </div>






                                    {/* ThrdCard */}

    <div className='MainListCard'>
     {SecCardArr.map((ite,index)=>{ 
             return( 
                 <div className='SecMainFirstCard'>
              {ite.map((item,arr)=> 
                 <div className='SecFirstPartyCard'>
                     <div className='SecImgPrnt'>
                     
                     <div className='SecShadeImg'>
                         <div >
                          
                             <img className='Main-SecPartyMainImg' 
                             src={item.image} />
                         </div>
                     </div>
                     </div>


                     <div className='SecContent'>
                         <div>
                             <div className='SecContentName'>
                                 {item.name}
                                 </div>
                             <div className='SecContentDesc'>{item.content}</div>
                         </div>
                         <div className='SecContentPrice'>{item.price}</div>
                         <div className='SecSenderDetail'>
                             <div >
                               
                                 <img className='SecImgChat' src={item.icon}/> 
                             </div>
                             <div>
                                {item.chatName}
                             </div>
                             </div>
                     </div>



                 </div>
                   )}  
                 </div> 
                  )}  
 )}  


    </div>




                                {/* FrthCard */}


    <div className='MainListCard'>
     {SecCardArr.map((ite,index)=>{ 
             return( 
                 <div className='SecMainFirstCard'>
              {ite.map((item,arr)=> 
                 <div className='SecFirstPartyCard'>
                     <div className='SecImgPrnt'>
                     
                     <div className='SecShadeImg'>
                         <div >
                          
                             <img className='Main-SecPartyMainImg' 
                             src={item.image} />
                         </div>
                     </div>
                     </div>


                     <div className='SecContent'>
                         <div>
                             <div className='SecContentName'>
                                 {item.name}
                                 </div>
                             <div className='SecContentDesc'>{item.content}</div>
                         </div>
                         <div className='SecContentPrice'>{item.price}</div>
                         <div className='SecSenderDetail'>
                             <div >
                               
                                 <img className='SecImgChat' src={item.icon}/> 
                             </div>
                             <div>
                                {item.chatName}
                             </div>
                             </div>
                     </div>



                 </div>
                   )}  
                 </div> 
                  )}  
 )}  


    </div>


    </div>
    <div className='MainPages'>

                 
                        <div className='borderPage'>
                        
                                 <div className='SizePage'>1</div>
                                           
                        </div>
                     

                        <div className='SecborderPage'>
                    
                            <div className='SecSizePage'>2</div>
                        
                        </div>

                        <div className='SecborderPage'>
                        
                            <div className='SecSizePage'>3</div>
                          
                        </div>

                        <div className='SecborderPage'>
                            <div className='SecSizePage'>4</div>
                        </div>



                        <div>
                             <div className='dots'></div>
                        </div>
                        <div>
                             <div className='dots'></div>
                        </div>
                        <div>
                             <div className='dots'></div>
                        </div>



                        <div className='SecborderPage'>
                            <div className='SecSizePage'>10</div>
                        </div>


                    </div>


                    <div className='Btn-parent'>
                <div className='ThrdNext-Btn'>
                    <Link to={'/Chat'}>
                        <button className='SecNxt-Btn'>Next</button>
                    </Link>
                </div>
            </div>
    
    </>
   
  )
}

export default ListCard
