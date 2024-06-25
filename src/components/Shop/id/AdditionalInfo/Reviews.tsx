import BtnOrange from '@/components/Button/BtnOrange'
import Input from '@/components/Form/Input'
import TitleSub from '@/components/Title/TitleSub'
import React from 'react'
import { FaRegStar } from 'react-icons/fa'

interface ReviewsProps{
    title: string;
}

const Reviews: React.FC<ReviewsProps> = ({title}) => {
  return (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3">
            <TitleSub name='reviews'></TitleSub>
            <p>There are no reviews yet.</p>
        </div>

        <div className="flex flex-col gap-3">
            <TitleSub name={`Be the first to review "${title}"`}></TitleSub>
            
            <div className='mb-4'>
                <p>Your email address will not be published. Required fields are marked *</p>
                <p>Your Rating *</p>

                <ul className='flex items-center gap-1 mt-2'>
                    <li className='text-main cursor-pointer'><FaRegStar /></li>
                    <li className='text-main cursor-pointer'><FaRegStar /></li>
                    <li className='text-main cursor-pointer'><FaRegStar /></li>
                    <li className='text-main cursor-pointer'><FaRegStar /></li>
                    <li className='text-main cursor-pointer'><FaRegStar /></li>
                </ul>
            </div>

            <form 
                action="" 
                method="post"
                className='flex flex-col gap-5'>
                <Input 
                    name='username' 
                    type='text'
                    placeholder='Your Name*'
                    required={true}
                    readOnly={false}>
                </Input>

                <Input 
                    name='username' 
                    type='text'
                    placeholder='Your Email*'
                    required={true}
                    readOnly={false}>
                </Input>

                <div className="flex items-center gap-3">
                    <input type="checkbox" name="saveCookies" id="saveCookies" />
                    <label htmlFor="saveCookies">
                        Save my name, email, and website in this browser for the next time I comment.
                    </label>
                </div>

                <div className="w-fit">
                    <BtnOrange 
                        name='submit'
                        type='submit'>
                    </BtnOrange>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Reviews