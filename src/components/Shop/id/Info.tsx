import React, { useState } from 'react'
import Description from './AdditionalInfo/Description'
import AddInfo from './AdditionalInfo/AddInfo'
import Reviews from './AdditionalInfo/Reviews'

interface InfoProps{
    title: string;
}

const Info: React.FC<InfoProps> = ({title}) => {
    const tabList = [
        {id: "desc", label: "description"},
        {id: "addInfo", label: "additional information"},
        {id: "reviews", label: "reviews"}
    ]
    
    const [tabInfo, setTabInfo] = useState("desc") 

  return (
    <div className='flex flex-col gap-8'>
        <ul className='flex items-center gap-10 pb-5 
            border-b border-solid border-[#eeedeb]'>
            {
                tabList.map((_item) => {
                    return(
                        <li
                            key={_item.id}
                            onClick={() => setTabInfo(_item.id)}
                            className={`${tabInfo === _item.id ? "text-main" : "text-black"} text-xl 
                                font-medium font-ebGaramond capitalize
                                cursor-pointer select-none
                                duration-300 ease-in-out hover:text-main`}>
                            {_item.label}
                        </li>
                    )
                })
            }
        </ul>

        <div>
            {/* Description */}
            {
                tabInfo === "desc" &&
                <Description></Description>
            }
            
            
            {/* Additional Information */}
            {
                tabInfo === "addInfo" &&
                <AddInfo></AddInfo>
            }

            {/* Reviews */}
            {
                tabInfo === "reviews" &&
                <Reviews title={title}></Reviews>
            }
        </div>
    </div>
  )
}

export default Info