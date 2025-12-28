import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { SearchBar } from '../Searchbar/Searchbar'
import logo from '/public/iamges-cars/TerpoLogo-removebg-preview.png'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <div className='flex flex-row justify-between md:justify-around items-center p-4 gap-4 h-20 fixed top-0 left-0 w-full z-50 drop-shadow-2xl shadow-black/20 bg-[#000000]/40 backdrop-blur-sm'>

                {/* Logo */}
                <Link to={'/home'} className='rounded-full overflow-hidden z-20 flex justify-center items-center' onClick={closeMobileMenu}>
                    <img className='w-12 h-12 md:w-16 md:h-16' src={logo} alt="Terpo Logo" />
                </Link>

                {/* Desktop Navigation Links */}
                <nav className='hidden md:flex gap-4 text-white text-lg font-bold z-20'>
                    <NavLink to={'/home'} className={({ isActive }) => isActive ? 'text-purple-400 underline' : 'hover:text-purple-300 transition-colors'}>Home</NavLink>
                    <NavLink to={'/About'} className={({ isActive }) => isActive ? 'text-purple-400 underline' : 'hover:text-purple-300 transition-colors'}>About</NavLink>
                    <NavLink to={'/Services'} className={({ isActive }) => isActive ? 'text-purple-400 underline' : 'hover:text-purple-300 transition-colors'}>Services</NavLink>
                    <NavLink to={'/Contact'} className={({ isActive }) => isActive ? 'text-purple-400 underline' : 'hover:text-purple-300 transition-colors'}>Contact</NavLink>
                </nav>

                {/* Desktop Search Bar */}
                <div className='hidden md:flex justify-center items-center z-20'>
                    <SearchBar />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobileMenu}
                    className='md:hidden z-30 p-2 text-white hover:text-purple-300 transition-colors'
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden'
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-84 bg-[#000000]/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className='flex flex-col p-6 gap-6'>
                    {/* Mobile Search Bar */}
                    <div className='w-full'>
                        <SearchBar />
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className='flex flex-col gap-4 text-white text-lg font-bold'>
                        <NavLink
                            to={'/home'}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-purple-400 bg-purple-400/20 underline'
                                        : 'hover:text-purple-300 hover:bg-white/10'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/About'}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-purple-400 bg-purple-400/20 underline'
                                        : 'hover:text-purple-300 hover:bg-white/10'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={'/Services'}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-purple-400 bg-purple-400/20 underline'
                                        : 'hover:text-purple-300 hover:bg-white/10'
                                }`
                            }
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to={'/Contact'}
                            onClick={closeMobileMenu}
                            className={({ isActive }) =>
                                `py-2 px-4 rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-purple-400 bg-purple-400/20 underline'
                                        : 'hover:text-purple-300 hover:bg-white/10'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </nav>
                </div>
            </div>
        </>
    )
}
