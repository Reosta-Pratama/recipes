import React from 'react'
import background from '../../../public/assets/img/pattern.png';
import Link from 'next/link';
import Sosmed from '../Contact/Sosmed';

const Footer = () => {
  return (
    <footer className={`bg-background bg-pattern bg-repeat-y bg-auto
        flex flex-col gap-[50px] pt-[126px] mt-24`}>
        <div className="w-full h-full flex justify-center">
            <div className="w-[40%] flex flex-col gap-6">
                <div className="flex flex-col text-center gap-4">
                    <Link
                        href={'/'}>
                        <h2 className='text-black text-4xl font-ebGaramond font-medium italic'>Masak</h2>
                        <span className='text-main text-xs tracking-[.3em] font-semibold uppercase'>cooking for the soul</span>
                    </Link>
                </div>

                <p className='text-center text-base'>
                    Theme especially made for cooking experts, novices & all who enjoy sharing their recipes.
                </p>

                {/* Social Media */}
                <Sosmed></Sosmed>
            </div>
        </div>

        <div className="w-full h-12
            flex justify-center items-center
            border-t border-solid border-[#d4d4d4]">
            <span>
                © {new Date().getFullYear() + " "} 
                <span className='text-main'>Masak</span>
                , All Rights Reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer