import React from 'react'
import Banner from '../layouts/Banner'
import About from './About'
import Service from './Services'
import Portfolio from './Portfolio'
import Price from '../layouts/Price'

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service/>
      <Portfolio />
      <Price />
    </>
  )
}

export default Home