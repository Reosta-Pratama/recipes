import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

interface RatingProps {
    rating: number;
    reviewCount: number;
}

const Rating: React.FC<RatingProps> = ({ rating, reviewCount }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-2">
           <ul className="flex items-center gap-1">
                {
                    Array(fullStars).fill(null).map((_, index) => (
                        <li key={`full-${index}`} className='text-main'>
                            <FaStar />
                        </li>
                    ))
                }
                {
                    hasHalfStar && 
                        <li key="half" className='text-main'>
                            <FaStarHalfAlt />
                        </li>
                }
                {
                    Array(emptyStars).fill(null).map((_, index) => (
                        <li key={`empty-${index}`} className='text-main'>
                            <FaRegStar />
                        </li>
                    ))
                }
           </ul>

            <span>({reviewCount})</span>
        </div>
    )
}

export default Rating
