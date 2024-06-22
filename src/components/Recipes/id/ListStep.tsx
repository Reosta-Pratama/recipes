
import React, { useState } from 'react'
import { FiCircle, FiCheckCircle } from 'react-icons/fi'

interface ListStepProps {
    data: string[];
}

const ListStep: React.FC<ListStepProps> = ({ data }) => {
    const [completedSteps, setCompletedSteps] = useState<boolean[]>(Array(data.length).fill(false));

    const toggleStep = (index: number) => {
        const newCompletedSteps = [...completedSteps];
        newCompletedSteps[index] = !newCompletedSteps[index];
        setCompletedSteps(newCompletedSteps);
    }

    return (
        <table>
            <tbody>
                {
                    data.map((item, index) => (
                        <tr
                            key={index}
                            className='flex border-t last:border-b border-solid border-[#dfdfdf]'>
                            <td
                                className='w-11 px-3 py-3
                                    flex justify-center items-center
                                    border-r border-solid border-[#dfdfdf]'>
                                <button
                                    type='button'
                                    className='text-[#dfdfdf] duration-200 ease-in-out hover:text-main'
                                    onClick={() => toggleStep(index)}>
                                    {
                                        completedSteps[index] ? <FiCheckCircle className='text-main'/> : <FiCircle />
                                    }
                                </button>
                            </td>
                            <td className='px-3 py-3'>
                                {item}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ListStep
