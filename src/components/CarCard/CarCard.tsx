import { FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import data from '../../data/index.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const carsProductsData: CarCardProps[] = data?.carsProducts;
interface CarCardProps {
    id: number;
    model: string;
    description: string;
    role: string;
    isNew: boolean;
    year: string;
    price: string;
    photos: {
        front: string;
        back: string;
        side: string;
        interior: string;
    };
}
export default function CarCard() {
    const [IndexCar, setIndexCar] = useState<number | null>(null)
    const [ImageScale, setImageScale] = useState<number | null>(null)
    return (
        <>
            <section className='flex flex-wrap gap-4  justify-center items-center mt-30 mb-30 '>

                {carsProductsData?.map((car, index) => (
                    <>
                        <div key={car.id}

                            onClick={() => setIndexCar(index)}
                            onMouseLeave={() => setIndexCar(null)}
                            className={`flex 
                   flex-col max-w-[282px] h-[372px] rounded-3xl p-4  bg-[#000000]/40 justify-center items-center
transition-all duration-300 hover:scale-105

                      ${IndexCar === null ? "" : IndexCar === index ? "" : "blur-sm"}
                   
                   `}>
                            {/* image */}
                            <div className={`w-full h-full rounded-3xl overflow-hidden relative`}>
                                <img
                                onClick={() => setImageScale(index)}
                                onMouseLeave={() => setImageScale(null)}
                                    src={car?.photos?.front}
                                    alt={car.model}
                                    className={`w-full h-full object-cover transition-all duration-300
                                        
                                        ${ImageScale === null ? "" : ImageScale === index ?  " hover:scale-110" : "" }
                                        `}
                                />

                                {IndexCar === car.id ? <span className='absolute top-5 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm'>New</span>
                                    : <span className='absolute top-5 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm'>Used</span>
                                }
                            </div>
                            {/* title */}
                            <div className='w-full h-full  '>
                                <h3 className='text-white text-2xl font-bold mt-2'>{car.model}</h3>

                                <div className='flex justify-start items-center mt-5 '>
                                    <span className='text-[#CB9090] text-sm font-bold me-3 flex justify-center items-center gap-2'> <FaCalendarAlt className='size-4' /> {car.year}</span>
                                    <span className='text-[#CB9090] text-sm font-bold flex justify-center items-center gap-2'> <FaDollarSign className='size-4' /> {car.price}</span>
                                </div>

                                {/* under line */}
                                <div className='w-full h-1 mt-5   bg-[#CB9090]/30'>

                                </div>



                            </div>

                            {/* button */}
                            <div className='w-full h-full flex justify-start items-center mt-5'>
                                <Link to={`/car/${car.id}`} className='w-full h-[50px] cursor-pointer hover:bg-[#CB9090]/20 transition-all duration-300 bg-[#CB9090]/50 text-white rounded-2xl p-2 flex justify-center items-center'>View Details</Link>
                            </div>


                        </div>



                    </>

                ))}

            </section>



        </>
    )
}
