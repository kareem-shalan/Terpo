import data from '../../data/index.json'

interface FooterProps {
    title: string;
    present: string;
    isActive: string;
    icon: string;

}


export default function Footer() {
    const {footerLinks}:{footerLinks:FooterProps[]} = data;
    return ( 
        <>
            <div className='flex flex-col md:flex-row    justify-around items-start md:items-center p-4 gap-2  bg-[#000000]/40  re    '>
                {footerLinks?.map((link) => (
                    <div key={link.title} className='flex min-w-[250px] p-4 rounded-2xl  justify-start md:justify-center items-center'>
                        <span className='size-10 me-2 p-2 bg-white/10 rounded-full flex justify-center items-center'><img className='size-5' src={link.icon} alt={link.title} /></span>

                        <div className='flex flex-col justify-center items-center'>
                            <h3 className='text-white/50 text-lg font-bold self-start'>{link.title}</h3>
                            <div className='flex justify-center items-center gap-2'>
                                <p className='text-white text-xl font-bold'>{link.present}</p>
                                <p className='text-white/50 font-bold text-sm'>{link.isActive}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
