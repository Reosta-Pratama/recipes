import React from 'react'

interface TitleSideProps{
    name: string;
}

const TitleSide: React.FC<TitleSideProps> = ({name}) => {
  return (
    <div className='relative'>
        <div className='bg-background relative w-fit z-10'>
            <h3 className='text-black text-2xl font-medium font-ebGaramond pr-4'>
                {name}
            </h3>
        </div>

        <span className="absolute top-1/2 left-0 -translate-y-1/2
            bg-[#dfdfdf] w-full h-[1px] "></span>
    </div>
  )
}

export default TitleSide