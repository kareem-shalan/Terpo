
import { GoDotFill } from 'react-icons/go'
import { Link } from 'react-router-dom'

interface HeroProps {

}
export default function Hero({ }: HeroProps) {
    return (
        <>
            <div className='absolute top-0 left-0 w-full h-full '>

                <div id='hero' className='min-h-screen relative  '>
                    <div className='absolute flex justify-start  items-center bg-linear-to-r from-[#492222] to-white/10 top-0 left-0 w-full h-full  '>


                        <div className='flex flex-col gap-4 ms-5 z '>
                            <span className='p-2
                            text-[#F20D0D]
                            bg-[#F20D0D]/10 w-fit rounded-2xl flex justify-center items-center'>
                                <span className='text-[#F20D0D] size-5    '><GoDotFill />
                                </span>
                                New 2024 Arrivals</span>
                            <h1 className='text-white whitespace-break-spaces text-4xl font-bold '>Experience <br />
                                <span className='bg-linear-to-r from-[#ee1b1b] to-[#dac2c2] text-transparent bg-clip-text'>Performance</span>
                            </h1>
                            <p className='text-white text-lg  max-w-[400px]'>
                                Explore our curated collection of premium vehicles
                                designed for those who demand excellence in every
                                curve.
                            </p>
                            <div className='flex justify-start items-start md:flex-row gap-2 flex-col'>
                                <Link to={'/Cars'} className='cursor-pointer flex justify-center items-center w-[200px] bg-[#F20D0D] h-[50px] text-white rounded-2xl'>Browse Cars</Link>
                                <button className='cursor-pointer w-[200px] shadow-2xl drop-shadow-2xl shadow-black bg-[#9CA3AF]/10 h-[50px] text-white rounded-2xl ring-1 ring-black/20'>Visit Showroom</button>

                            </div>
                        </div>





                    </div>
                </div>
            </div>

        </>
    )
}
