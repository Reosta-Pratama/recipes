import React, { ReactNode } from 'react'

interface BtnPageProps{
    func?: () => void;
    disabled: boolean;
    numeric?: boolean;
    children: ReactNode;

}

const BtnPage: React.FC<BtnPageProps> = ({children, func, disabled, numeric}) => {
  return (
    <button
        onClick={func}
        disabled={disabled}
        className={`w-8 h-8 flex justify-center items-center rounded-md
            border border-solid border-[#d4d4d4]
            duration-200 ease-in-out
            ${!disabled && "hover:bg-main hover:text-white hover:border-main"}
            ${(numeric && disabled) && "bg-main text-white border-main"}`}>
        {children}
    </button>
  )
}

export default BtnPage