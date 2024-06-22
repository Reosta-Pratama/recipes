import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
import { FiClock } from 'react-icons/fi'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { PiBowlFood } from 'react-icons/pi'

interface InfoProps{
    data: any;
}

const Info: React.FC<InfoProps> = ({data}) => {
    const mealTypeText = data.mealType.length > 1 ? data.mealType.join(' & ') : data.mealType[0];

    return (
        <div className="relative flex justify-center mb-5">
            <ul className='bg-white h-6 flex items-center gap-6 px-6 
                text-xs uppercase'>
                <li className='h-full flex items-center gap-1'>
                    <span className='text-base'>
                        <FiClock/>
                    </span>
                    <span>
                        {`${data.cookTimeMinutes} Minutes`}
                    </span>
                </li>

                <li className='h-full flex items-center gap-1'>
                    <span className='text-base'>
                        <AiOutlineLike/>
                    </span>
                    <span>
                        {data.difficulty}
                    </span>
                </li>

                <li className='h-full flex items-center gap-1'>
                    <span className='text-base'>
                        <GiForkKnifeSpoon/>
                    </span>
                    <span>
                        {`${data.cookTimeMinutes} persons`}
                    </span>
                </li>

                <li
                    className='h-full flex items-center gap-1 text-main
                    pl-5 border-l-2 border-solid border-[#eeedeb]'>
                    <span className='text-base'>
                        <PiBowlFood/>
                    </span>
                    <span className='font-medium tracking-[.2em]'>
                        {mealTypeText}
                    </span>
                </li>
            </ul>

            <span className='absolute -z-10 top-1/2 left-0 -translate-y-1/2
                bg-[#eeedeb] w-full h-[1px]'>
            </span>
        </div>
    )
}

export default Info