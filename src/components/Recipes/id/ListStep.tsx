import React from 'react'
import { FiCircle } from 'react-icons/fi'

interface ListStepProps{
    data: any;
}

const ListStep: React.FC<ListStepProps> = ({data}) => {
    return (
        <table>
            <tbody>
                {
                    data
                        .map((item : any, index : React.Key) => {
                            return (
                                <tr
                                    key={index}
                                    className='flex border-t last:border-b border-solid border-[#dfdfdf]'>
                                    <td
                                        className='w-11 px-3 py-3
                                            flex justify-center items-center
                                            border-r border-solid border-[#dfdfdf]'>
                                        <button type='button' className='text-[#dfdfdf]'>
                                            <FiCircle/>
                                        </button>
                                    </td>

                                    <td className='px-3 py-3'>
                                        {item}
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}

export default ListStep