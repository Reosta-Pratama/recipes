"use client"

import React, { useEffect, useRef, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface SortingProps{
    option: Array<Array<string>>;
    onchange: () => void;
}

const Sorting: React.FC<SortingProps> = ({option, onchange}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState<string>("Default sorting")
    const [selectedValue, setSelectedValue] = useState<string>("default")
    const dropdownRef = useRef<HTMLDivElement>(null)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    // Trigger Klik di luar Select
    const handleClickOutside = (event : MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return() => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Ubah value Selected
    const handleOptionClick = (optionLabel: string, optionValue: string) => {
        setSelectedOption(optionLabel)
        setSelectedValue(optionValue)
        setIsDropdownOpen(false)
    }

    return (
    <>
        <select 
            name="sortBy" 
            id="sortBy"
            value={selectedValue}
            onChange={onchange}
            className='hidden'>
            {
                option.map((item: any, index: React.Key) => {
                    return(
                        <option key={index} 
                            value={item[0]}>
                                {item[1]}
                        </option>
                    )
                })
            }
        </select>

        <div ref={dropdownRef}
            className='relative w-[220px]'>
            <div className='relative px-5 py-3 select-none'
                onClick={toggleDropdown}>
                <span>{selectedOption}</span>
                <span className='absolute z-10 top-1/2 right-0 -translate-y-1/2
                    text-black text-lg'>
                    <FiChevronDown />
                </span>
            </div>

            <ul className={`bg-background absolute top-full left-0 
                w-full flex flex-col gap-[6px] px-5
                duration-200 ease-in-out
                ${isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                {
                    option.map((item: any, index: React.Key) => {
                        return(
                            <li key={index}
                                value={item[0]}
                                onClick={() => handleOptionClick(item[1], item[0])}
                                className='duration-200 ease-in-out hover:text-black cursor-pointer'>
                                {item[1]}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default Sorting