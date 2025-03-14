import React from 'react'
import './Home.css'
import HeroSection from '../../components/heroSection/HeroSection'
import AboutUs from '../../components/aboutUs/AboutUs'
import HowWorkSection from '../../components/howWorkSection/HowWorkSection'
import ListingSection from '../../components/listingSection/ListingSection'
import BlogSection from '../../components/blogSection/BlogSection'
import SignUpSection from '../../components/signUpSection/SignUpSection'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <HowWorkSection/>
    <ListingSection/>
    <BlogSection/>
    <SignUpSection/>
    </>
  )
}

export default Home