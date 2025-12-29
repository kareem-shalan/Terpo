import { FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from '../../data/index.json'
import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';

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
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10; // Adjust this number based on how many cards you want per page

    // Calculate pagination
    const totalPages = Math.ceil(carsProductsData.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentCars = useMemo(() => 
        carsProductsData.slice(startIndex, endIndex),
        [startIndex, endIndex]
    )

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        setIndexCar(null) // Reset hover state when changing pages
        setImageScale(null)
        // Scroll to top of section when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const getPageNumbers = () => {
        const pages = []
        const maxVisiblePages = 5
        
        if (totalPages <= maxVisiblePages) {
            // Show all pages if total is less than max visible
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            // Show first page
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            }
            // Show last page
            else if (currentPage >= totalPages - 2) {
                pages.push(1)
                pages.push('...')
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i)
                }
            }
            // Show middle pages
            else {
                pages.push(1)
                pages.push('...')
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i)
                }
                pages.push('...')
                pages.push(totalPages)
            }
        }
        return pages
    }

    return (
        <>
            <section className='flex flex-col gap-8 justify-center items-center mt-30 mb-30'>
                {/* Cars Grid */}
                <div className='flex flex-wrap gap-4 justify-center items-center'>
                    {currentCars?.map((car, index) => {
                        const globalIndex = startIndex + index
                        return (
                            <div 
                                key={car.id}
                                onClick={() => setIndexCar(globalIndex)}
                                onMouseLeave={() => setIndexCar(null)}
                                className={`flex 
                                    flex-col max-w-[282px] h-[372px] rounded-3xl p-4 bg-[#000000]/40 justify-center items-center
                                    transition-all duration-300 hover:scale-105
                                    ${IndexCar === null ? "" : IndexCar === globalIndex ? "" : "blur-sm"}
                                `}>
                                {/* image */}
                                <div className={`w-full h-full rounded-3xl overflow-hidden relative`}>
                                    <img
                                        onClick={() => setImageScale(globalIndex)}
                                        onMouseLeave={() => setImageScale(null)}
                                        src={car?.photos?.front}
                                        alt={car.model}
                                        className={`w-full h-full object-cover transition-all duration-300
                                            ${ImageScale === null ? "" : ImageScale === globalIndex ? "hover:scale-110" : ""}
                                        `}
                                    />

                                    {car.isNew ? (
                                        <span className='absolute top-5 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm'>New</span>
                                    ) : (
                                        <span className='absolute top-5 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm'>Used</span>
                                    )}
                                </div>
                                {/* title */}
                                <div className='w-full h-full'>
                                    <h3 className='text-white text-2xl font-bold mt-2'>{car.model}</h3>

                                    <div className='flex justify-start items-center mt-5'>
                                        <span className='text-[#CB9090] text-sm font-bold me-3 flex justify-center items-center gap-2'>
                                            <FaCalendarAlt className='size-4' /> {car.year}
                                        </span>
                                        <span className='text-[#CB9090] text-sm font-bold flex justify-center items-center gap-2'>
                                            <FaDollarSign className='size-4' /> {car.price}
                                        </span>
                                    </div>

                                    {/* under line */}
                                    <div className='w-full h-1 mt-5 bg-[#CB9090]/30'></div>
                                </div>

                                {/* button */}
                                <div className='w-full h-full flex justify-start items-center mt-5'>
                                    <Link 
                                        to={`/car/${car.id}`} 
                                        className='w-full h-[50px] cursor-pointer hover:bg-[#CB9090]/20 transition-all duration-300 bg-[#CB9090]/50 text-white rounded-2xl p-2 flex justify-center items-center'
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className='flex justify-center items-center gap-2 mt-8'>
                        {/* Previous Button */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300
                                ${currentPage === 1 
                                    ? 'bg-[#000000]/20 text-gray-500 cursor-not-allowed' 
                                    : 'bg-[#CB9090]/50 text-white hover:bg-[#CB9090]/70 hover:scale-105'
                                }`}
                        >
                            <FaChevronLeft className='size-4' />
                        </button>

                        {/* Page Numbers */}
                        <div className='flex gap-2'>
                            {getPageNumbers().map((page, index) => (
                                page === '...' ? (
                                    <span key={`ellipsis-${index}`} className='px-3 py-2 text-[#CB9090]'>
                                        ...
                                    </span>
                                ) : (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page as number)}
                                        className={`w-10 h-10 rounded-lg transition-all duration-300 font-semibold
                                            ${currentPage === page
                                                ? 'bg-[#CB9090] text-white scale-110'
                                                : 'bg-[#000000]/40 text-[#CB9090] hover:bg-[#CB9090]/30 hover:scale-105'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300
                                ${currentPage === totalPages
                                    ? 'bg-[#000000]/20 text-gray-500 cursor-not-allowed'
                                    : 'bg-[#CB9090]/50 text-white hover:bg-[#CB9090]/70 hover:scale-105'
                                }`}
                        >
                            <FaChevronRight className='size-4' />
                        </button>
                    </div>
                )}
            </section>
        </>
    )}