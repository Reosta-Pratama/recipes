import React from 'react'

const AddInfo = () => {
    const nutritionInfo = [
        {value: '200g', label: 'fat'},
        {value: '100g', label: 'protein'},
        {value: '146g', label: 'sugars'},
        {value: '436', label: 'calories'},
        {value: '24', label: 'carbs'}
    ]

    return (
        <div className="bg-background flex">
            <div
                className="w-[37%] px-[30px] py-[47px]
                border-r border-solid border-[#dfdfdf]">
                <h3 className='text-black text-2xl font-medium font-ebGaramond capitalize'>
                    additional information
                </h3>
            </div>

            <ul className='grid grid-cols-5 flex-1 items-center gap-5 px-3'>
                {
                    nutritionInfo.map((_item, index: React.Key) => {
                        return(
                            <li key={index}
                                className='flex flex-col items-center text-center gap-1'>
                                <span className='text-black text-xl font-medium font-ebGaramond'>
                                    {_item.value}
                                </span>
                                <span className='capitalize'>
                                    {_item.label}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AddInfo