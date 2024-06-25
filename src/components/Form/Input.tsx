import React from 'react'

interface InputProps{
    name: string;
    type: "text" | "password" | "email" | "number";
    placeholder: string;
    required: boolean;
    readOnly: boolean;
    onChange?: () => void;
}

const Input: React.FC<InputProps> = ({name, type, placeholder, required, readOnly, onChange}) => {
  return (
    <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className='
            px-5 py-3
            border border-solid border-[#5e5e5e]
            text-[#5e5e5e] placeholder:text-[#5e5e5e]'/>
  )
}

export default Input