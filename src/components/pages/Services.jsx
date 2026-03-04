import React from 'react'
import Container from '../common/Container'

const Services = () => {
    return (
        <div className="bg-gray-200">
            <Container>
                <div className="  py-50 px-4 font-sans p-10 max-w-6xl mx-auto ">
                    <div className="max-w-10xl mx-auto text-center">
                        <h2 className="text-7xl font-bold text-stone-800 mb-6">Our Services</h2>
                        <p className="text-stone-500 italic leading-relaxed mb-12 text-3xl mx-auto">
                            Whether you are looking for a quick beach side getaway or a pampering day for yourself, we have hair treatments to meet your needs. All of our services are specially designed for restorative, recovery and relaxation.
                        </p>

                        <div className="grid md:grid-cols-2 gap-x-24 gap-y-12 text-left">

                            <div className="flex justify-between items-start">
                                <div className="pr-4">
                                    <h3 className="text-4xl font-bold text-stone-800 mb-2">Hair Cut</h3>
                                    <p className="text-stone-500 text-2xl leading-relaxed">
                                        Professional styling and precision cutting to help you look and feel younger, more energetic, and attractive.
                                    </p>
                                </div>
                                <span className="text-4xl font-bold text-amber-500">$20</span>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="pr-4">
                                    <h3 className="text-4xl font-bold text-stone-800 mb-2">Hair Extensions</h3>
                                    <p className="text-stone-500 text-2xl leading-relaxed">
                                        Premium quality extensions designed to add length and volume seamlessly for a natural, luxurious look.
                                    </p>
                                </div>
                                <span className="text-4xl font-bold text-amber-500">$230</span>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="pr-4">
                                    <h3 className="text-4xl font-bold text-stone-800 mb-2">Highlights</h3>
                                    <p className="text-stone-500 text-2xl leading-relaxed">
                                        Expertly placed color accents to brighten your complexion and add dimension to your natural hair tone.
                                    </p>
                                </div>
                                <span className="text-4xl font-bold text-amber-500">$90</span>
                            </div>

                            <div className="flex justify-between items-start">
                                <div className="pr-4">
                                    <h3 className="text-4xl font-bold text-stone-800 mb-2">Hair Colouring</h3>
                                    <p className="text-stone-500 text-2xl leading-relaxed">
                                        A wide array of coloring techniques ranging from full tint to balayage for a vibrant and lasting finish.
                                    </p>
                                </div>
                                <span className="text-4xl font-bold text-amber-500">$40</span>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services