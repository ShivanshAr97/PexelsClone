import React, { useState } from 'react'
import { FaDownload, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCopy, AiOutlineStar } from 'react-icons/ai';

import { saveAs } from 'file-saver'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';

const Modal = ({visible, image, onClose}) => {
  const [copied, setCopied] = useState(false)
  if(!visible)
  return null;
  
  const downloadImg=()=>{
    saveAs(image.src.original, image.alt)
  }
  
  
  const title = "Have a look at this: "
  const share = `${title}%0a${image.src.original}`
  const shareWhatsapp = `whatsapp://send?text=${share}`
  
  const navigate = useNavigate()
  const star=()=>{
    navigate('/login')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-40">
      <div className="w-[85%] h-[70%] overflow-hidden rounded-lg bg-white ">
        <div className='flex justify-between mx-4 border-b-2'>
        <p className='mx-12 my-2'>Image ID: {image.id}</p>
        <button onClick={onClose} className="text-xl p-1">&times;</button>
        </div>
        <div className='flex flex-col lg:flex-row my-5 mx-4 items-center align-middle'>
          <img src={image.src.original} alt={image.alt} className="w-[12rem] h-[8rem] lg:w-[33rem] mx-auto lg:h-[18rem] rounded-lg object-cover lg:ml-12 lg:mr-4" />
          <div className='space-y-2 text-sm lg:text-base'>
            <span className='cursor-pointer' onClick={star}><AiOutlineStar/></span>
            <p>Title: <span className='font-medium'>{image.alt}</span></p>
            <p>Photographer: <span className='font-medium'>{image.photographer}</span> </p>
            <p>Height: <span className='font-medium'>{image.height}</span></p>
            <p>Width: <span className='font-medium'>{image.width}</span></p>
            <div className='flex align-middle items-center'>
            
            <button className='border px-2 py-2 lg:px-4 lg:py-2 rounded-lg bg-green-500 text-white flex items-center align-middle' onClick={downloadImg}><FaDownload/>&nbsp;Download</button>

            <a href={shareWhatsapp}><button className='border px-2 py-2 lg:px-4 lg:py-2 rounded-lg bg-blue-500 text-white mx-4  flex items-center align-middle'><FaWhatsapp size="20px"/></button></a>

            <CopyToClipboard text={image.src.original} onCopy={() => setCopied(true)}>
            <button className='border px-2 py-1 lg:px-4 lg:py-2 mr-2 h-10 rounded-lg bg-red-500 text-white flex items-center align-middle'><AiOutlineCopy size="18px"/></button>
            </CopyToClipboard>
            {copied ? <AiOutlineCheckCircle size="20px" color='green'/> : null}
          </div>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default Modal