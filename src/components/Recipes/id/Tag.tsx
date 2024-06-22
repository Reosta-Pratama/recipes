import Link from 'next/link'
import React from 'react'

interface TagProps{
    data: string[];
}

const Tag: React.FC<TagProps> = ({data}) => {
    const sortedData = [...data].sort((a, b) => a.localeCompare(b))

    return (
        <ul className='flex flex-1 gap-2'>
            {
                sortedData
                    .map((item : any, index : React.Key) => {
                        return (
                            <li key={index}>
                                <Link
                                    href={''}
                                    className='group bg-main px-4 py-2
                                        border border-solid border-main
                                        duration-200 ease-in-out hover:bg-white'>
                                    <span
                                        className='text-white text-xs font-medium uppercase
                                            duration-200 ease-in-out group-hover:text-main'>
                                        {item}
                                    </span>
                                </Link>
                            </li>
                        )
                    })
            }
        </ul>
    )
}

export default Tag