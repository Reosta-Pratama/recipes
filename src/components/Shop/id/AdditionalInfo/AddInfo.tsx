import React from 'react'

const AddInfo = () => {
  const infoList = [
    {label: "Weight", value: "0.4 kg"},
    {label: "Dimensions", value: "41 × 3 × 33 cm"},
  ]

    return (
        <table>
            <tbody>
                {
                  infoList.map((_item, index: React.Key) => {
                    return(
                      <tr
                        key={index}>
                          <th className='w-[120px] px-2 p-1
                            text-black text-xl text-left 
                              font-medium font-ebGaramond capitalize'>
                              {_item.label}
                          </th>
                          <td className='px-2 p-1'>
                              {_item.value}
                          </td>
                      </tr>
                    )
                  })
                }
            </tbody>
        </table>
    )
}

export default AddInfo