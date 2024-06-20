import React from 'react'
import Navigation from './Navigation'
import Searching from './Searching'

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
            <Searching></Searching>
        </header>
    )
}

export default Header