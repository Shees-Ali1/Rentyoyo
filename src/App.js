import './App.css';
import React from 'react'

import Homemain from './Components/HomeMain/Homemain';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatHome from './Components/ChatMain/ChatHome/ChatHome';
import PickupMain from './Components/PickupMain/PickupMain';
import ReturnLocMain from './Components/ReturnLocationMain/ReturnLocMain';
import Confirmation from './Components/ConfirmationMain/Confirmation';
import RatingMain from './Components/Rating/RatingMain';
import ReviewMain from './Components/ReviewMain/ReviewMain';
import PaymentMain from './Components/PaymentMain/PaymentMain';

import MainSection from './Components/MainSection/MainSection';
import PartyMain from './Components/PartyMain/PartyMain';
import Pagenation from './Components/PartyMain/Pagination/Pagenation';
import MainList from './Components/MainListItem/MainList';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import RenteePickUp from './Components/RenteePickupMain/RenteePickUp.jsx/RenteePickUp';
import RenteeChatMain from './Components/RenteeChatMain/RenteeChatMain';
import RenteeReturn from './Components/RenteeReturnMain/RenteeReturn';

import RegisterMain from './Components/RegisterMain/RegisterMain';
import ProfileMain from './Components/ProfileMain/ProfileMain';
import ListCarMain from './Components/ListCartMain/ListCarMain';
import RenteedMain from './Components/RenteedItemMain/RenteedMain';
import RentedItemChatMain from './Components/RentedItemChat/RentedItemChatMain';
import RenteedTimeMain from './Components/RenteedTimeMain/RenteedTimeMain';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={ <Homemain/>} />
      <Route path ='/Chat' element={<ChatHome/>} />
      <Route path ='/PickUp' element={<PickupMain/>} />
      <Route path ='/ReturnLocation' element={<ReturnLocMain/>} />
      <Route path ='/Confirmation' element={<Confirmation/>} />
      <Route path ='/Rating' element={<RatingMain/>} />
      <Route path ='/Reviews' element={<ReviewMain/>} />
      <Route path ='/Payment' element={<PaymentMain/>} />
      <Route path ='/RenteeMain' element={<MainSection/>} />
      <Route path ='/PartyMain' element={<PartyMain/>} />
      <Route path ='/Pages' element={<Pagenation/>} />
      <Route path ='/MainList' element={<MainList/>} />
      <Route path ='/RenteePickUp' element={<RenteePickUp/>} />
      <Route path ='/RenteeChat' element={<RenteeChatMain/>} />
      <Route path ='/RenteeReturn' element={<RenteeReturn/>} />
      <Route path ='/LoginPage' element={<RegisterMain/>} />
      <Route path ='/Profile' element={<ProfileMain/>} />

      <Route path ='/AddListItem' element={<ListCarMain/>} />
      <Route path ='/RenteedItems' element={<RenteedMain/>} />
      <Route path ='/RentedChats' element={<RentedItemChatMain/>} />
      <Route path ='/RenteedPickup' element={<RenteedTimeMain/>} />

      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
