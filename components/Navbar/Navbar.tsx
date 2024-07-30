import { NAV_LINKS } from '@/constans'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { MenuIcon, User } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='border border-b shadow-sm'>
            <div className='flex container justify-between items-center px-3 py-3 relative z-30'>
                <Link data-aos="fade-down" data-aos-once="true" data-aos-delay={100} href="/" className='font-semibold font-pacifico text-xl'>
                    <span className='text-green-600'> Camp </span> Traveller
                </Link>
                <ul className='hidden lg:flex h-full gap-10'>
                    {NAV_LINKS.map((link) => (
                        <Link data-aos="fade-down" data-aos-once="true" data-aos-delay={link.delay} className='font-popins hover:font-bold flex items-center cursor-pointer text-slate-700 hover:text-slate-950' key={link.key} href={link.href}>{link.label}</Link>
                    ))}
                </ul>

                <div className='lg:flex justify-center hidden'>
                    <Button data-aos="fade-down" data-aos-once="true" data-aos-delay={1100} variant="mybutton" type='button'> <User className='h-4 w-4 mr-2'></User>Login</Button>

                </div>
                <MenuIcon className='lg:hidden inline-block cursor-pointer w-8 h-8 text-green-600' />
            </div>

        </nav>
    )
}

export default Navbar