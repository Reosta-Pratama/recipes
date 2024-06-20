import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return (
        <header className='h-[140px] flex justify-between items-center gap-2 px-[50px]'>
            {/* Logo */}
            <h1 className='text-black text-4xl font-ebGaramond font-medium italic'>Masak</h1>

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

            {/* Searching */}
            <span>
                search
            </span>
        </header>
    )
}

export default Header