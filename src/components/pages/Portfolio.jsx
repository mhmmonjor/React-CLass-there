import React from 'react'
import Container from '../common/Container'

const Portfolio = () => {
    return (
        <div className="bg-[#FFFFFF] py-16 border-color-black border-t-2  ">
            <Container>
                <div className=" py-16 px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                        <div className="w-full md:w-1/2">
                            <h2 className="text-6xl font-bold text-stone-800 mb-10">Why Choose Us</h2>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-orange-100"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-stone-800">We Love your Hair</h3>
                                        <p className="text-stone-500 italic leading-relaxed mt-1 text-2xl">
                                            We know-how, and ready to create your best look with natural products.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                                        <span className="text-amber-600 text-2xl">🌿</span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-stone-800">Only Natural Products</h3>
                                        <p className="text-stone-500 italic leading-relaxed mt-1 text-2xl">
                                            Hair is our passion, and our passion shows on every client that walks out of our doors.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                                        <span className="text-amber-600 text-2xl">✂️</span>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-stone-800">Professional Stylists</h3>
                                        <p className="text-stone-500 italic leading-relaxed mt-1 text-2xl">
                                            If you have a look you want, we can work together to form a plan for your hair.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative h-[450px]">
                            <div className="absolute top-0 right-10 w-64 h-80 border-2 border-amber-500 z-0"></div>

                            <div class="absolute top-10 right-20 w-72 h-80 bg-gray-300 shadow-xl z-10 border-4 border-white">
                            </div>

                            <div class="absolute bottom-10 left-25 w-32 h-36 bg-gray-400 shadow-lg z-20 border-4 border-white">
                            </div>
                        </div>

                    </div>
                </div>





            </Container>
        </div>
    )
}

export default Portfolio