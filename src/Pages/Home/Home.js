import React from 'react'
import "./Home.css"
import Main from "../../Component/Main/Main"
import Who from '../../Component/Who/Who'
import Why from "../../Component/Why/Why"
import Services from "../../Component/Services/Services"
import Testimonial from "../../Component/Testimonial/Testimonial"
import Footer from "../../Component/Footer/Footer"
import Contect from "../../Component/Contect/Contect"

const Home = () => {
  return (
    <>

      <div className='home-wrapper'>
        <div className='main-element'>
          <Main />
        </div>
        <Who/>
        <Why/>
        <Services/>
        <Testimonial/>
        <Contect/>
        <Footer/>
      </div>
    </>
  )
}

export default Home