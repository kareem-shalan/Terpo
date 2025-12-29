import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, Car, Search, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';



export default function NotFoundPage({  }: NotFoundPageProps) {
    const location = useLocation();
    const searchTitle = (location.state as { title?: string })?.title || '';
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='min-h-screen pt-20 pb-10 px-4 md:px-8 lg:px-16 bg-linear-to-b from-[#000000]/60 to-[#000000]/40 flex items-center justify-center relative'>
            <div className='max-w-4xl mx-auto text-center relative z-10'>
                {/* Animated 404 Number */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    className='mb-8'
                >
                    <h1 className='text-[120px] md:text-[180px] lg:text-[220px] font-black text-transparent bg-linear-to-r from-[#F20D0D] to-[#CB9090] bg-clip-text leading-none'>
                        404
                    </h1>
                </motion.div>

                {/* Error Icon */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='mb-6 flex justify-center'
                >
                    <div className='p-6 rounded-full bg-[#F20D0D]/20 border border-[#F20D0D]/30'>
                        <AlertCircle className='size-16 text-[#F20D0D]' />
                    </div>
                </motion.div>

                {/* Main Message */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className='mb-8'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
                        {searchTitle ?<> <span className='text-[#CB9090]'>{searchTitle}</span>  <span>Not Found</span></>: 'Page Not Found'}
                    </h2>
                    <p className='text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed'>
                        {searchTitle 
                            ? `Sorry, we couldn't find any results for "${searchTitle}". It might have been moved, deleted, or never existed.`
                            : `Oops! The page you're looking for seems to have taken a wrong turn. It might have been moved, deleted, or never existed.`
                        }
                    </p>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className='w-24 h-1 bg-[#CB9090]/50 rounded-full mx-auto mb-8'
                />

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'
                >
                    <Link
                        to='/home'
                        className='group inline-flex items-center gap-3 px-8 py-4 bg-[#F20D0D] hover:bg-[#F20D0D]/80 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F20D0D]/30'
                    >
                        <Home className='size-5 group-hover:scale-110 transition-transform' />
                        Go Home
                    </Link>
                    <Link
                        to='/Cars'
                        className='group inline-flex items-center gap-3 px-8 py-4 bg-[#CB9090]/50 hover:bg-[#CB9090]/70 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-[#CB9090]/50'
                    >
                        <Car className='size-5 group-hover:scale-110 transition-transform' />
                        Browse Cars
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className='group inline-flex items-center gap-3 px-8 py-4 bg-[#000000]/40 hover:bg-[#000000]/60 text-white rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-[#CB9090]/50'
                    >
                        <ArrowLeft className='size-5 group-hover:-translate-x-1 transition-transform' />
                        Go Back
                    </button>
                </motion.div>

                {/* Additional Help Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className='p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10 max-w-md mx-auto'
                >
                    <div className='flex items-center gap-3 justify-center mb-3'>
                        <Search className='text-[#CB9090] size-5' />
                        <h3 className='text-white text-lg font-bold'>Need Help?</h3>
                    </div>
                    <p className='text-white/70 text-sm mb-4'>
                        Try using our search bar to find what you're looking for, or explore our collection of premium vehicles.
                    </p>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <Link
                            to='/Services'
                            className='px-4 py-2 text-sm bg-[#CB9090]/20 text-[#CB9090] rounded-xl hover:bg-[#CB9090]/30 transition-colors'
                        >
                            Services
                        </Link>
                        <Link
                            to='/About'
                            className='px-4 py-2 text-sm bg-[#CB9090]/20 text-[#CB9090] rounded-xl hover:bg-[#CB9090]/30 transition-colors'
                        >
                            About
                        </Link>
                        <Link
                            to='/Contact'
                            className='px-4 py-2 text-sm bg-[#CB9090]/20 text-[#CB9090] rounded-xl hover:bg-[#CB9090]/30 transition-colors'
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles Effect - Fixed positioning */}
            {dimensions.width > 0 && (
                <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className='absolute w-2 h-2 rounded-full bg-[#CB9090]/30'
                            initial={{
                                x: Math.random() * dimensions.width,
                                y: Math.random() * dimensions.height,
                                opacity: 0,
                            }}
                            animate={{
                                y: [null, Math.random() * dimensions.height],
                                opacity: [0, 0.5, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}