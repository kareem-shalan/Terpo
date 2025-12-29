import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import data from '../../data/index.json';

interface CarDetailsProps {
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

const carsProductsData: CarDetailsProps[] = data?.carsProducts;

export default function CarDetails() {
    const { id } = useParams();
    const car = carsProductsData.find((car) => car.id === parseInt(id || '0'));
    const [selectedImage, setSelectedImage] = useState<string>(car?.photos?.front || '');
    const [imageError, setImageError] = useState(false);

    if (!car) {
        return (
            <div className='min-h-screen flex justify-center items-center bg-[#000000]/40'>
                <div className='text-center'>
                    <h2 className='text-white text-3xl font-bold mb-4'>Car not found</h2>
                    <Link to='/Cars' className='text-[#CB9090] hover:text-[#F20D0D] transition-colors'>
                        ← Back to Cars
                    </Link>
                </div>
            </div>
        );
    }

    const imageOptions = [
        { key: 'front', label: 'Front', src: car.photos.front },
        { key: 'back', label: 'Back', src: car.photos.back },
        { key: 'side', label: 'Side', src: car.photos.side },
        { key: 'interior', label: 'Interior', src: car.photos.interior },
    ];

    return (
        <>
            <section className='min-h-screen pt-20 pb-10 px-4 md:px-8 lg:px-16 bg-linear-to-b from-[#000000]/60 to-[#000000]/40'>
                {/* Back Button */}
                <div className='max-w-7xl mx-auto mb-6'>
                    <Link 
                        to='/Cars' 
                        className='inline-flex items-center gap-2 text-white hover:text-[#CB9090] transition-colors duration-300 group'
                    >
                        <ArrowLeft className='size-5 group-hover:-translate-x-1 transition-transform' />
                        <span className='font-semibold'>Back to Cars</span>
                    </Link>
                </div>

                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                        {/* Image Gallery Section */}
                        <div className='space-y-4'>
                            {/* Main Image */}
                            <div className='relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-[#000000]/40 backdrop-blur-sm border border-white/10'>
                                {!imageError ? (
                                    <img 
                                        className='w-full h-full object-cover transition-opacity duration-300' 
                                        src={selectedImage} 
                                        alt={car.model}
                                        onError={() => setImageError(true)}
                                    />
                                ) : (
                                    <div className='w-full h-full flex items-center justify-center text-white/50'>
                                        <p>Image not available</p>
                                    </div>
                                )}
                                
                                {/* New/Used Badge */}
                                <div className='absolute top-5 left-5 z-10'>
                                    {car.isNew ? (
                                        <span className='bg-[#F20D0D] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                                            New
                                        </span>
                                    ) : (
                                        <span className='bg-[#9CA3AF] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg'>
                                            Used
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className='grid grid-cols-4 gap-3'>
                                {imageOptions.map((option) => (
                                    <button
                                        key={option.key}
                                        onClick={() => {
                                            setSelectedImage(option.src);
                                            setImageError(false);
                                        }}
                                        className={`relative w-full h-24 md:h-28 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                                            selectedImage === option.src
                                                ? 'border-[#CB9090] ring-2 ring-[#CB9090]/50'
                                                : 'border-white/20 hover:border-white/40'
                                        }`}
                                    >
                                        <img 
                                            className='w-full h-full object-cover' 
                                            src={option.src} 
                                            alt={option.label}
                                        />
                                        <div className='absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors' />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Information Section */}
                        <div className='space-y-6'>
                            {/* Title and Role */}
                            <div>
                                <div className='flex items-center gap-3 mb-3'>
                                    <span className='px-3 py-1 bg-[#CB9090]/20 text-[#CB9090] rounded-full text-sm font-semibold'>
                                        {car.role}
                                    </span>
                                </div>
                                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                                    {car.model}
                                </h1>
                                <div className='w-20 h-1 bg-[#CB9090]/50 rounded-full'></div>
                            </div>

                            {/* Price and Year */}
                            <div className='flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10'>
                                <div className='flex items-center gap-3'>
                                    <div className='p-3 bg-[#CB9090]/20 rounded-xl'>
                                        <FaCalendarAlt className='text-[#CB9090] size-5' />
                                    </div>
                                    <div>
                                        <p className='text-white/60 text-sm'>Year</p>
                                        <p className='text-white text-xl font-bold'>{car.year}</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='p-3 bg-[#CB9090]/20 rounded-xl'>
                                        <FaDollarSign className='text-[#CB9090] size-5' />
                                    </div>
                                    <div>
                                        <p className='text-white/60 text-sm'>Price</p>
                                        <p className='text-white text-2xl font-bold'>${car.price}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className='p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10'>
                                <h3 className='text-white text-xl font-bold mb-3'>Description</h3>
                                <p className='text-white/80 text-lg leading-relaxed'>
                                    {car.description}
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className='p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10'>
                                <h3 className='text-white text-xl font-bold mb-4'>Key Features</h3>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                    {[
                                        'Premium Quality',
                                        'Advanced Technology',
                                        'Luxury Interior',
                                        'High Performance',
                                        'Safety Features',
                                        'Warranty Included'
                                    ].map((feature, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <FaCheckCircle className='text-[#CB9090] size-4' />
                                            <span className='text-white/80'>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                                <Link to='/Contact' className='flex-1 h-[55px] bg-[#F20D0D] hover:bg-[#F20D0D]/80 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F20D0D]/30 flex items-center justify-center gap-2'>
                                    <Phone className='size-5' />
                                    Contact Dealer
                                </Link>
                                <button className='flex-1 h-[55px] bg-[#CB9090]/50 hover:bg-[#CB9090]/70 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-[#CB9090]/50 flex items-center justify-center gap-2'>
                                    <Mail className='size-5' />
                                    Request Info
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className='p-6 rounded-2xl bg-linear-to-r from-[#492222]/50 to-white/5 border border-white/10'>
                                <div className='flex items-center gap-3 mb-4'>
                                    <MapPin className='text-[#CB9090] size-5' />
                                    <h3 className='text-white text-lg font-bold'>Available Now</h3>
                                </div>
                                <p className='text-white/70 text-sm'>
                                    This vehicle is currently available for viewing and test drive. 
                                    Contact us to schedule an appointment or learn more about financing options.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related Section - View All Cars */}
                    <div className='mt-16 text-center'>
                        <Link 
                            to='/Cars'
                            className='inline-flex items-center gap-2 px-8 py-4 bg-[#000000]/40 hover:bg-[#000000]/60 text-white rounded-2xl font-semibold transition-all duration-300 border border-white/20 hover:border-[#CB9090]/50'
                        >
                            View All Vehicles
                            <ArrowLeft className='size-5 rotate-180' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
