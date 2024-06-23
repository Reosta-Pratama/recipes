import React from 'react'

interface TitleSubProps{
    name: string;
}

const TitleSub2: React.FC<TitleSubProps> = ({name}) => {
  return (
    <h3
        className='text-black text-[38px] leading-[1.2em] font-medium font-ebGaramond'>
        {name}
    </h3>
  )
}

export default TitleSub2