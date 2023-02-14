import React,{useContext} from 'react'
import HeroSection from '../Components/HeroSection'


const About = () => {

  const data={
    name:"Kalesha Ecommerce"
  }
  return (
    <>

    <HeroSection  myData={data}/>
    </>
  )
}

export default About
