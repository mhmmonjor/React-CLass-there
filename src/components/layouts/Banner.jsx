import React from 'react'
import Container from '../common/Container'

const Banner = () => {
  return (

    <div className="bg-[url(/src/assets/13.jpg)] py-80 bg-no-repeat bg-cover bg-center ">

      <Container>
        <div class="flex items-center  justify-between">

          <div>
            <h2 class="text-[#f1c40f] text-6xl font-black p-1.5 uppercase mb-2">WELCOME!</h2>
            <h1 class="text-white text-5xl font-bold mb-6 p-2">The Best Hair Saloon</h1>
            <p class="max-w-150 text-2xl font-medium italic text-gray-100 mb-8 leading-9">
              We use quality products and the latest styling techniques to bring out your very best. We promise to provide you with 5-star service.
            </p>
            <button class="bg-[#f39c12] text-white px-14 py-5 rounded-sm font-bold uppercase hover:scale-105 transition-transform duration-300 p-3 ">
              Make Appointment
            </button>
          </div>

          <div className=" w-110 h-80 bg-gray-200 shadow-black shadow-2xl hover:scale-105 transition-transform duration-300 ">
         
          </div>

        </div>

      </Container>
    </div>

  )
}
export default Banner  