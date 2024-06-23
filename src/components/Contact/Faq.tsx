import React from 'react'
import TitleSide from '../Title/TitleSide'

const Faq = () => {
    const infoFaq = [
        {
            label: "Fuisset accusam corrumpit sit ut eum cu dicunt?",
            value: "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati modera tius sadipscing ex qui. Usu at clita utamur euismod, simul reformidans sed cu, ne mea."
        },
        {
            label: "Quod voluptat complectus duo?",
            value: "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam."
        },
        {
            label: "Sed ea dicat nobis ei vis movet volupta?",
            value: "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati modera tius sadipscing ex qui. Usu at clita utamur euismod, simul reformidans sed cu, ne mea."
        },
        {
            label: "Vide persecuti ei mei latine maiorum consequat sit minim?",
            value: "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam."
        },
        {
            label: "Ex homero ad possim instructior sea pri et quando?",
            value: "Lorem ipsum dolor sit amet, pri ut autem salutandi, enim altera vis id. Nominati modera tius sadipscing ex qui. Usu at clita utamur euismod, simul reformidans sed cu, ne mea."
        },
        {
            label: "Ad nostrud mediocrem expetAd nostrud mediocrem expet?",
            value: "Equidem accusata ea mei, no vel vivendo noluisse, et putent placerat antiopam."
        },
    ]
  return (
    <div className='flex flex-col gap-12'>
        <TitleSide name='FaQ' fontSize='text-5xl'></TitleSide>

        <ul className='flex flex-col gap-5'> 
            {
                infoFaq.map((_item, index: React.Key) => {
                    return(
                        <li
                            key={index}
                            className='flex flex-col gap-1'>
                            <h4 className='text-black text-2xl font-medium font-ebGaramond'>
                                {_item.label}
                            </h4>
                            <span>
                                {_item.value}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Faq