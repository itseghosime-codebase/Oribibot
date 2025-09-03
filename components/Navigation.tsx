'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import OribibotLogo from '@/assets/Logos/oribibot_logo.svg'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed inset-x-0 top-0 py-6 md:py-8 transition-colors duration-300 z-30
      ${scrolled ? 'bg-[#0c293d] backdrop-blur-md' : 'bg-transparent'}
      `}
        >
            <div className='content flex items-center justify-between'>
                {/* Logo */}
                <Link href={'/'} className='relative z-50'>
                    <Image
                        src={OribibotLogo}
                        alt='Oribibot'
                        sizes='100%'
                        className='h-7 md:h-8 lg:h-9 xl:h-10 w-auto'
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex items-center justify-center gap-7 xl:gap-14 text-xl xl:text-2xl font-semibold'>
                    {LinkTags.map((links, id) => (
                        <li key={id}>
                            <Link
                                href={`/${links.href}`}
                                className={`transition-all ease-linear duration-200 ${pathname === `/${links.href}`
                                        ? 'text-primary drop-shadow-sm underline decoration-2 underline-offset-4 drop-shadow-primary/80'
                                        : 'drop-shadow-xs drop-shadow-white/80 hover:text-primary'
                                    }`}
                            >
                                {links.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <Link
                    href={'/get-started'}
                    className={`pt-3 pb-2.5 px-7 rounded-lg bg-primary w-fit text-xl lg:text-2xl font-bold hidden lg:block transition-colors ease-in duration-200 ${pathname === '/get-started'
                            ? 'text-secondary bg-primary'
                            : 'text-secondary drop-shadow-[0_0_10px_#FFCC00]'
                        }`}
                >
                    GET STARTED
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='text-[#CFCFC6] lg:hidden relative z-20'
                    aria-label='Toggle menu'
                >
                    {isOpen ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
                </button>

                {/* Mobile Menu Drawer */}
                <div
                    className={`absolute ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-linear content z-10 top-0 pt-28 h-screen font-teko font-bold left-0 w-full bg-[#0c293d] border-t border-[#5D5D5D] flex flex-col items-center py-5 gap-6 lg:hidden`}
                >
                    {LinkTags.map((links, id) => (
                        <Link
                            key={id}
                            href={`/${links.href}`}
                            className={`transition-colors ease-in duration-200 text-2xl w-full ${pathname === `/${links.href}`
                                    ? 'text-primary'
                                    : 'hover:text-primary'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {links.label}
                        </Link>
                    ))}
                    <Link
                        href={'/'}
                        onClick={() => setIsOpen(false)}
                        className={`transition-colors ease-in duration-200 text-center pt-3 pb-2 bg-primary rounded-xl text-secondary text-2xl w-full`}
                    >
                        GET STARTED
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const LinkTags = [
    { label: 'TRADING BOT', href: 'trading-bot' },
    { label: 'PRICING', href: 'pricing' },
    { label: 'ABOUT', href: 'about' },
    { label: 'CONTACT', href: 'contact' },
    { label: 'FAQ', href: 'faq' },
]
