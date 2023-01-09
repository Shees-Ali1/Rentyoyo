import React from 'react'

import Header from '../Header/Header'
import RenteeCard from './RenteCardMain/RenteeCard'
import RenteeMain from './RenteeMain/RenteeMain'
import Footer from '../Footer/Footer'




function MainSection() {
  return (
    <>
    <Header/>
    <RenteeMain/>
    <RenteeCard/>
    <Footer/>
    
    </>
  )
}

export default MainSection
