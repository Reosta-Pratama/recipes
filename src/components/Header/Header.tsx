import React from 'react'
import Navigation from './Navigation'
import Searching from './Searching'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='h-[140px] flex justify-between items-center gap-2 px-[50px]'>
            {/* Logo */}
            <Link
                href={'/'}>
                <h1 className='text-black text-5xl font-ebGaramond font-medium italic'>Masak</h1>
            </Link>

            {/* List Navigation */}
            <Navigation 
                nav={[
                        ['/', 'home'],
                        ['/aboutMe', 'about me'],
                        ['/recipes', 'recipes'],
                        ['/shop', 'shop'],
                        ['/contactUs', 'contact us'],
                    ]}>
            </Navigation>

            {/* Searching & Cart */}
            <div className="flex items-center gap-10">
                <Searching></Searching>

                <Link
                    href={'/cart'}
                    className='flex items-center gap-1
                        text-xs font-semibold tracking-[1px] uppercase
                        duration-200 ease-in-out hover:text-black'>
                    <span>Cart</span>
                    <span>(0)</span>
                </Link>
            </div>
        </header>
    )
}

export default Header