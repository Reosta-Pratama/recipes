import React, { ReactNode } from 'react'
import BtnPage from '../Button/BtnPage';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginateProps{
    currentPage: number;
    totalPages: number;
    func: (pageNumber: number) => void;
}

const Paginate: React.FC<PaginateProps> = ({currentPage, totalPages, func}) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
        <BtnPage
            func={() => func(currentPage - 1)}
            disabled={currentPage === 1}>
            <FiChevronLeft/>
        </BtnPage>

        <ul className='flex justify-center items-center gap-2'>
            { 
                Array.from({ length: totalPages }, (_, index) => (
                    <li key={index + 1}>
                        <BtnPage
                            func={() => func(index + 1)}
                            disabled={currentPage === index + 1}
                            numeric={true}>
                            {index + 1}
                        </BtnPage>
                    </li>
                )) 
            }
        </ul>

        <BtnPage
            func={() => func(currentPage + 1)}
            disabled={currentPage === totalPages}>
            <FiChevronRight/>
        </BtnPage>
    </div>
  )
}

export default Paginate