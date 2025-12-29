import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

interface LayoutProps {

}
export default function Layout({ }: LayoutProps) {
    return (
        <>
            <Navbar />
        
            <main className='min-h-screen mx-auto  relative'>

                <Outlet />
            </main>

            <Footer  />
        </>
    )
}
