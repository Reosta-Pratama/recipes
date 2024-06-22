import Link from 'next/link'
import React from 'react'

interface MovePageProps {
    currentPage: number;
}

const MovePage: React.FC<MovePageProps> = ({currentPage}) => {
    const totalItems = 50
    const prev = currentPage === 1 ? totalItems : currentPage - 1
    const next = currentPage === totalItems ? 1 : currentPage + 1

    const page = [
        {label: "previous", href:`/recipes/${prev}`},
        {label: "next", href:`/recipes/${next}`}
    ]

    return (
        <div className="flex justify-between items-center">
            {
                page.map((_item, index: React.Key) => {
                    return(
                        <Link key={index}
                            href={_item.href} 
                            className=''>
                            <span
                                className='text-movePage relative
                                    text-main text-xs font-semibold tracking-[.3em] uppercase'>
                                {_item.label}
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MovePage