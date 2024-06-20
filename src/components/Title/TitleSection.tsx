import React from 'react'

interface TitleSectionProps{
    name: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({name}) => {
  return (
    <h3 className='text-main text-3xl font-dancingScript break-words'>{name}</h3>
  )
}

export default TitleSection