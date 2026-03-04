import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import Image from '../common/Image'
import Logo from '/src/assets/Logo.png'
import Button from '../common/Button'
import { Link, Links } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-gray-900 py-5">
      <Container>
        <Flex className="justify-between">
          <div className="">
            <Link to="/">
              <Image imgSrc={Logo} />
            </Link>
          </div>
          <div className="">
            <ul className="flex items-center space-x-8">
              <li className="font-openSans text-white font-bold hover:text-amber-200 cursor-pointer"><Link to="/">Home</Link></li>
              <li className="font-openSans text-white font-bold hover:text-amber-200 cursor-pointer"><Link to="/about">About</Link></li>
              <li className="font-openSans text-white font-bold hover:text-amber-200 cursor-pointer"><Link to="/services">Services</Link></li>
              <li className="font-openSans text-white font-bold hover:text-amber-200 cursor-pointer"><Link to="/Portfolio">Portfolio</Link></li>
              <li className="font-openSans text-white font-bold hover:text-amber-200 cursor-pointer"><Link to="/Price">Price</Link></li>
            </ul>
          </div>
          <h1 className="text-white font-bold text-2xl bg-bntclr hover:text-amber-200">Contact Us</h1>



        </Flex>
      </Container>
    </div>
  )
}

export default Header
