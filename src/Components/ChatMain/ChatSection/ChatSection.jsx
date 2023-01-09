import React from 'react'
import "./ChatSection.css"
import chatIcon from '../../Images/chatIcon.png'
import { CgAttachment } from 'react-icons/cg';
import { BiVideoPlus } from 'react-icons/bi';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { Link } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
let chat = [
  {
    img: chatIcon,
    name: "Shees",
    date: '1 year ago',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio unde hic exercitationem aperiam nesciunt alias consequatur. Asperiores illum dolor explicabo! Rerum."
  },
  {
    img: chatIcon,
    name: "Shees",
    date: '1 year ago',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio unde hic exercitationem aperiam nesciunt alias consequatur. Asperiores illum dolor explicabo! Rerum."
  },
  {
    img: chatIcon,
    name: "Shees",
    date: '1 year ago',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio unde hic exercitationem aperiam nesciunt alias consequatur. Asperiores illum dolor explicabo! Rerum."
  },
  {
    img: chatIcon,
    name: "Shees",
    date: '1 year ago',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio unde hic exercitationem aperiam nesciunt alias consequatur. Asperiores illum dolor explicabo! Rerum."
  },
  {
    img: chatIcon,
    name: "Shees",
    date: '1 year ago',
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio unde hic exercitationem aperiam nesciunt alias consequatur. Asperiores illum dolor explicabo! Rerum."
  },

]

function ChatSection() {
  return (

    <>

      <div className='Chat-Main'>
        <Link to={'/'}>
        <div className='Return-btn'>
          {/* <IoIosArrowBack className='Return-icon' /> */}
          <div className='MainBtn'>Return</div>
        </div>
        </Link>
        <div className='MainShade-box'>
          <div className='Heading'>Chat</div>
        </div>
        <div className='Chat-Section'>
          {chat.map((item, index) => (
            <div className={index % 2 === 0 ? 'Sended-Chat' : 'RplySended-Chat'}>
              <img className={index % 2 === 0 ? 'Chat-Img' : 'SecChat-Img'} src={item.img} />
              <div className={index % 2 === 0 ? 'Chat-Name' : 'Sec-ChatName'}>
                <div className="chat-name--inner">
                  {item.name}
                  <span className='Chat-date'> {item.date}</span>
                </div>
                <div className='Chat-des'>{item.text}</div>
              </div>
            </div>
          ))}

          {/* <div className='line'>

            </div> */}
          <div className='ChatInput-bar'>
            <input className='ChatInput-Search' placeholder='Type here' />
            <div className='Chat-Icons'>
              <div className='Chat-Icon'><CgAttachment /></div>
              <div className='Chat-Icon'> <BiVideoPlus /></div>
              <div className='Chat-Icon'> <MdAddPhotoAlternate /></div>


              <div className='Send-btn'><button className='ChatSend-button'>Send</button>
              </div>
            </div>
          </div>





        </div>
        <div className='Btn-parent'>
          <div className='SecNext-Btn'>
            <Link to={"/PickUp"}>
              <button className='SecNxt-Btn'>Next</button>
            </Link>
          </div>
        </div>




      </div>
    </>
  )
}

export default ChatSection
