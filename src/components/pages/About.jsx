import React from 'react'
import Container from '../common/Container'

const About = () => {
  return (
    <div className=' bg-[#FFFFFF] py-80 bg-no-repeat bg-cover bg-center '>
      <Container>
        <div className='flex  items-center justify-between'>
          <div class="flex gap-4 w-full">
            <div class="flex flex-col gap-4 w-1/3">
              <div class="bg-gray-300 aspect-square"></div>
              <div class="bg-gray-300 aspect-square"></div>
              <div class="bg-gray-300 aspect-square"></div>
            </div>
            <div class="bg-gray-400 w-2/4 aspect-3/4"></div>
          </div>
          <div className="  ">
            <h1 className=' text-7xl font-bold p-4 text-zinc-950 '>We're Here To Service Your Hair Care Needs</h1>

            <p className=" text-cyan-900 italic pt-6 p-4 text-1xl font-medium leading-9">
              House of Hair Salon & Spa is one of Brooklyn's most trusted salons.
              Whether you're looking for a completely new style or want to enhance your
              existing look, our talented teams are here to make it happen.
            </p>
            <button className="bg-[#D6A033] text-white py-4 px-4 p-4 rounded-md hover:bg-[#C08E2B]">
              Learn More
            </button>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default About