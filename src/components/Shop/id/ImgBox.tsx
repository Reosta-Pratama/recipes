import Zoom from "next-image-zoom"
import React from 'react'

interface ImgBoxProps{
    imgList: string;
}

const ImgBox: React.FC<ImgBoxProps> = ({imgList}) => {
  return (
    <div className='flex gap-6'>
        <div className="w-[27%] grid grid-rows-3 gap-6">
            <div className="relative w-full">
                <Zoom 
                    src={imgList} 
                    alt={`1 ${imgList}`}
                    priority
                    layout={"fill"} 
                    objectFit={"cover"}
                    objectPosition={"top"}
                />
            </div>

            <div className="relative w-full">
                <Zoom 
                    src={imgList} 
                    alt={`2 ${imgList}`}
                    priority
                    layout={"fill"} 
                    objectFit={"cover"}
                    objectPosition={"right"}
                />
            </div>

            <div className="relative w-full">
                <Zoom 
                    src={imgList} 
                    alt={`3 ${imgList}`}
                    priority
                    layout={"fill"} 
                    objectFit={"cover"}
                    objectPosition={"bottom"}
                />
            </div>
        </div>

        <div className="flex flex-1">
            <div className="relative w-full">
                <Zoom 
                    src={imgList} 
                    alt={`4 ${imgList}`}
                    priority
                    layout={"fill"} 
                    objectFit={"cover"}
                    objectPosition={"center"}
                />
            </div>
        </div>
    </div>
  )
}

export default ImgBox