import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { createClient } from 'pexels';
import Load from './Load';
import Modal from './Modal';

const client = createClient('3G6reoNwve6VtjSUA1SB3HbdGmNI4qBwm01uaZ3YybKImG0f8j3sV4fA');


const Homepage = () => {
    const [val, setVal] = useState('')
    const [finalval, setFinalVal] = useState('')
    const [photos, setPhoto] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const tags=['Digital','Computer', 'Television', 'Tech', 'Music','Code','Shopping', 'Marketing' ]
    const trending=['flowers','river', 'forest']

    const onEvent=(e)=>{
        setVal(e.target.value)
    }

    const getValue=(e)=>{
        e.preventDefault()
        setFinalVal(val)
        setIsLoading(true)
        client.photos
        .search({ query: finalval,page: 10 })
        .then((data) => {
            setPhoto(data.photos);
            setTimeout(() => {
                setIsLoading(false)
              }, 5000);
            
            console.log(data.photos);
        })
        .catch(() => {
            setErrorMessage("Click 'Go' once again");
            setTimeout(() => {
                setIsLoading(false)
              }, 5000);
        });
    }

    const handleImageClick = (image) => {
        setIsVisible(true)
        setSelectedImage(image);
      };
    
    useEffect(() => {
        if(finalval !== ''){
        client.photos.search({ query: finalval, page: 10 }).then((data) => {
          setPhoto(data.photos);
        });
    }
    else {
        setPhoto([]);
      }
        
      }, [finalval]);
    
  return (
    <>
        <p className='text-4xl lg:text-6xl leading-snug font-bold text-white items-center align-middle my-10 lg:my-16 text-center'>Discover over 2,000,000 <br></br> free Stock images</p>
        <div className='flex align-middle items-center lg:py-1 mx-4 lg:w-[35%] lg:mx-auto px-2 border rounded-lg backdrop-blur-md justify-between'>
            <div className='flex'>
            <span className='pr-2 m-2 border-r-2'><AiOutlineSearch size="20px" color='white' /></span>
            <input className='placeholder:text-white text-xs lg:text-base px-2 bg-transparent outline-none text-white' type="text" placeholder='Search' onChange={onEvent} />
            </div>
            <button onClick={getValue} className='border-2 rounded-lg px-1.5 py-0.5 lg:text-sm text-xs text-white'>Go !</button>
        </div>
        <div className='flex align-middle items-center py-1 w-[80%] md:[40%] lg:w-[30%] text-sm text-white my-8 mx-auto px-3 border rounded-lg backdrop-blur-md justify-between'>
            <span className='font-bold text-sm lg:text-base'>Trending: </span>
            {trending.map((trend)=>(
                <button key={trend} onClick={()=>setFinalVal(trend)}>{trend}</button>
            ))}
        </div>
        {finalval===''? (
            <p className='text-white text-2xl capitalize my-6 mx-auto font-bold flex justify-center tracking-wide'>Type and click 'Go'</p>
            ): (
                <>
                    <p className='text-white text-2xl capitalize my-6 mx-auto font-bold flex justify-center tracking-wide'>Results: {finalval}</p>
                    <div className='hidden lg:grid grid-cols-8 bg-slate-100 py-4 px-4 text-center'>
                    {tags.map(tag=>(
                        <button key={tag} onClick={()=>setFinalVal(tag)} className='border-2 p-2 text-sm cursor-pointer font-medium m-1'>{tag}</button>
                    ))}
                    </div>
                </>
        )
        }
        {isLoading?<Load/>:
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-8 my-8'>
        {photos.length > 0 && (
            photos.map(photo=>(
                <>
                <div key={photo.id} className='flex mx-auto flex-col'>
                <img onClick={()=>handleImageClick(photo)}  className='w-[30rem] h-[12rem] cursor-pointer rounded-lg object-cover' src={photo.src.original} alt={photo.alt}/>
                <p className='border w-fit bg-slate-200 text-xs my-2 rounded-md px-2'>{photo.photographer}</p>
                </div>
                
                </>
            ))
        )}
        {errorMessage}
        {isVisible && selectedImage && (
        <Modal visible={isVisible} image={selectedImage} onClose={()=>setIsVisible(false)}/>
        )}
      </div>
      }
        
    </>
  )
}

export default Homepage