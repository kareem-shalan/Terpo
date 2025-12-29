import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, User, Code, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import MypPhoto from '/public/iamges-cars/myPhoto.jpg';

interface ContactProps {

}

export default function Contact({ }: ContactProps) {
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'kareemmohamedali330@gmail.com',
            link: 'mailto:kareemmohamedali330@gmail.com',
            color: 'text-[#F20D0D]'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '01272958197',
            link: 'tel:01272958197',
            color: 'text-[#CB9090]'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Connect with me',
            link: 'https://www.linkedin.com/in/kareem-shalan/',
            color: 'text-blue-400'
        }
    ];

    return (
        <section className='min-h-screen pt-20 pb-10 px-4 md:px-8 lg:px-16 bg-linear-to-b from-[#000000]/60 to-[#000000]/40 '>
            <div className='max-w-4xl mx-auto mt-10'>
                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-12'
                >
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className='mb-6 flex justify-center'
                    >
                        <div className='relative'>
                            <div className='absolute inset-0 bg-linear-to-r from-[#F20D0D] to-[#CB9090] rounded-full blur-3xl opacity-100 animate-pulse'></div>
                            <img
                                src={MypPhoto}
                                alt='Kareem Mohamed Ali'
                                className='relative size-70  rounded-full object-cover border-4 border-[#CB9090]/50 shadow-2xl '
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className='text-4xl md:text-5xl lg:text-6xl font-bold bg-linear-to-br from-[#F20D0D] to-[#080000] text-transparent bg-clip-text mb-4  animate-pulse'
                    >
                        Kareem Mohamed Ali
                    </motion.h1>

                    {/* Title Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className='inline-flex items-center gap-2 px-4 py-2 bg-[#F20D0D]/10 border border-[#F20D0D]/30 rounded-full mb-6'
                    >
                        <Code className='text-[#F20D0D] size-5' />
                        <span className='text-[#F20D0D] font-semibold'>Full Stack Developer</span>
                    </motion.div>

                    {/* Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className='text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed'
                    >
                        Passionate full-stack developer with expertise in modern web technologies. 
                        I specialize in creating beautiful, responsive, and high-performance applications 
                        using React, TypeScript, and cutting-edge frameworks. Always eager to tackle 
                        new challenges and build innovative solutions that make a difference.
                    </motion.p>
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className='w-24 h-1 bg-[#CB9090]/50 rounded-full mx-auto mb-12'
                />

                {/* Contact Information Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                    {contactInfo.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={contact.label}
                                href={contact.link}
                                target={contact.link.startsWith('http') ? '_blank' : undefined}
                                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className='group p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10 hover:border-[#CB9090]/50 transition-all duration-300'
                            >
                                <div className='flex flex-col items-center text-center'>
                                    <div className={`p-4 rounded-xl bg-[#CB9090]/20 mb-4 group-hover:bg-[#CB9090]/30 transition-colors`}>
                                        <Icon className={`${contact.color} size-6`} />
                                    </div>
                                    <h3 className='text-white font-bold text-lg mb-2'>{contact.label}</h3>
                                    <p className='text-white/70 text-sm group-hover:text-[#CB9090] transition-colors'>
                                        {contact.value}
                                    </p>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                {/* Skills/Interests Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className='p-6 rounded-2xl bg-[#000000]/40 backdrop-blur-sm border border-white/10 mb-8'
                >
                    <div className='flex items-center gap-3 mb-4'>
                        <Briefcase className='text-[#CB9090] size-5' />
                        <h3 className='text-white text-xl font-bold'>What I Do</h3>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='flex items-start gap-3'>
                            <Code className='text-[#F20D0D] size-5 mt-1 flex-shrink-0' />
                            <div>
                                <h4 className='text-white font-semibold mb-1'>Frontend Development</h4>
                                <p className='text-white/70 text-sm'>React, TypeScript, Tailwind CSS</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Briefcase className='text-[#CB9090] size-5 mt-1 flex-shrink-0' />
                            <div>
                                <h4 className='text-white font-semibold mb-1'>Backend Development</h4>
                                <p className='text-white/70 text-sm'>Node.js, Express, RESTful APIs, Databases , mongodb</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <User className='text-[#F20D0D] size-5 mt-1 flex-shrink-0' />
                            <div>
                                <h4 className='text-white font-semibold mb-1'>UI/UX Design</h4>
                                <p className='text-white/70 text-sm'>Creating intuitive and beautiful user experiences</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-3'>
                            <Heart className='text-[#CB9090] size-5 mt-1 flex-shrink-0' />
                            <div>
                                <h4 className='text-white font-semibold mb-1'>Passion</h4>
                                <p className='text-white/70 text-sm'>Building innovative solutions and learning new technologies</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className='text-center'
                >
                    <p className='text-white/70 text-lg mb-6'>
                        Let's work together to bring your ideas to life!
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <Link
                            to='/Cars'
                            className='px-8 py-4 bg-[#F20D0D] hover:bg-[#F20D0D]/80 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F20D0D]/30'
                        >
                            View Our Cars
                        </Link>
                        <a
                            href='mailto:kareemmohamedali330@gmail.com'
                            className='px-8 py-4 bg-[#CB9090]/50 hover:bg-[#CB9090]/70 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-[#CB9090]/50'
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Particles Effect */}
            <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute w-2 h-2 rounded-full bg-[#CB9090]/20'
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
        </section>
    )
}