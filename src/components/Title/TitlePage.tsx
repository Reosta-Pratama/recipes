import React from 'react'

interface TitlePageProps{
    name: string;
    addClass?: string;
}

const TitlePage: React.FC<TitlePageProps> = ({name, addClass}) => {
  return (
    <h2 className={`text-black text-[52px] leading-[1.2em] font-medium font-ebGaramond ${addClass}`}>
        {name}
    </h2>
  )
}

export default TitlePage