import React from 'react'

interface TitlePageProps{
    name: string;
}

const TitlePage: React.FC<TitlePageProps> = ({name}) => {
  return (
    <h2 className='text-black text-[52px] font-medium font-ebGaramond'>
        {name}
    </h2>
  )
}

export default TitlePage