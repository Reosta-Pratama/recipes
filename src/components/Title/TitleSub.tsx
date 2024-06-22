import React from 'react'

interface TitleSubProps{
    name: string;
}

const TitleSub: React.FC<TitleSubProps> = ({name}) => {
  return (
    <h4
        className='text-black text-xl
            font-medium font-ebGaramond capitalize'>
        {name}
    </h4>
  )
}

export default TitleSub