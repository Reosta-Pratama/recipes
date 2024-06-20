import React from 'react';

const socialMediaLinks = [
    { href: 'https://facebook.com', label: 'fb' },
    { href: 'https://instagram.com', label: 'ig' },
    { href: 'https://linkedin.com', label: 'in' },
    { href: 'https://x.com', label: 'x' },
];

const Sosmed = () => {
    return (
        <ul className='flex justify-center items-center gap-3'>
            {
                socialMediaLinks.map((link, index) => {
                    const isLastIndex = index === socialMediaLinks.length - 1;
                    return(
                        <li key={index}
                            className='relative flex items-center gap-3'>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-black text-lg 
                                    font-medium font-ebGaramond italic lowercase
                                    duration-200 ease-in-out
                                    hover:text-main'>
                                {link.label}
                            </a>

                            {!isLastIndex && (<span className='bg-[#919191] w-[11px] h-[1px] block'></span>)}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Sosmed;
