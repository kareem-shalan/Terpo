import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion';
import { useNetworkState } from 'react-use';
interface LayoutProps {
    
}
export default function Layout({ }: LayoutProps) {
    const { online } = useNetworkState();
    return (
        <>
            <Navbar />

            {
                !online ? (
                    <div className='flex flex-col items-center justify-center min-h-screen'>
                        <h1 className='text-3xl font-bold text-red-500'>❌No internet connection❌</h1>
                        <p className='text-xl text-white/60 font-bold'>Please check your internet connection and try again.</p>
                        <button className='bg-red-500 text-white px-4 py-2 rounded-md mt-5 cursor-pointer' onClick={() => window.location.reload()}>Refresh</button>
                    </div>) : (
                    <main className='min-h-screen mx-auto  relative'>

                        <Outlet />
                    </main>
                )
            }

            <Footer />

            <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute w-2 h-2 rounded-full bg-[#CB9090]'
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
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
        </>
    )
}
