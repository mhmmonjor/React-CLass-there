import React from 'react'
import Container from '../common/Container'

const Price = () => {
    return (


        <div className='bg-[#181D21] md-50 h-80 mt-10 '>
            <Container>
                <div className="">
                    <header className='flex items-center gap-8 justify-between py-15'>
                        <h2 className='text-white text-5xl font-semibold '>Work Showcase</h2>
                        <h5 className='text-white hover:text-primary duration-300 text-3xl'>Haircut</h5>
                        <h5 className='text-white hover:text-primary duration-300 text-3xl'> HAIR EXTENTSIONS</h5>
                        <h5 className='text-white hover:text-primary duration-300 text-3xl'>HIGHLIGHTS</h5>
                        <h5 className='text-white hover:text-primary duration-300 text-3xl'>HAIR COLOURING</h5>
                    </header>
                    <div className="boxs flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
                        <div className="w-90 h-75 bg-gray-400 hover:scale-105  "></div>
                        <div className="w-90 h-75 bg-gray-400 hover:scale-105"></div>
                        <div className="w-90 h-75 bg-gray-400 hover:scale-105"></div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Price