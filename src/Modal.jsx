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
        <div className='flex my-5 mx-4 items-center align-middle'>
          <img src={image.src.original} alt={image.alt} className="w-[33rem] h-[18rem] rounded-lg object-cover ml-12 mr-4" />
          <div className='space-y-2'>
            <span className='cursor-pointer' onClick={star}><AiOutlineStar/></span>
            <p>Title: <span className='font-medium'>{image.alt}</span></p>
            <p>Photographer: <span className='font-medium'>{image.photographer}</span> </p>
            <p>Height: <span className='font-medium'>{image.height}</span></p>
            <p>Width: <span className='font-medium'>{image.width}</span></p>
            <div className='flex align-middle items-center'>
            
            <button className='border px-4 py-2 rounded-lg bg-green-500 text-white flex items-center align-middle' onClick={downloadImg}><FaDownload/>&nbsp;Download</button>

            <a href={shareWhatsapp}><button className='border px-4 py-2 rounded-lg bg-blue-500 text-white mx-4  flex items-center align-middle'><FaWhatsapp size="24px"/></button></a>

            <CopyToClipboard text={image.src.original} onCopy={() => setCopied(true)}>
            <button className='border px-4 py-2 mr-2 h-10 rounded-lg bg-red-500 text-white flex items-center align-middle'><AiOutlineCopy size="24px"/></button>
            </CopyToClipboard>
            {copied ? <AiOutlineCheckCircle size="24px" color='green'/> : null}
          </div>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default Modal