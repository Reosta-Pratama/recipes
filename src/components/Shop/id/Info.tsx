import React from 'react'

const Info = () => {
    const tabList = [
        {id: "desc", label: "description"},
        {id: "addInfo", label: "additional information"},
        {id: "reviews", label: "reviews"}
    ]

  return (
    <div className='flex flex-col gap-8'>
        <ul className='flex items-center gap-10 pb-5 
            border-b border-solid border-[#eeedeb]'>
            {
                tabList.map((_item) => {
                    return(
                        <li
                            key={_item.id}
                            className={`text-black text-xl 
                                font-medium font-ebGaramond capitalize
                                cursor-pointer
                                duration-300 ease-in-out hover:text-main`}>
                            {_item.label}
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Info