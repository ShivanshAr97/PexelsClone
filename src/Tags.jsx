import React from 'react'

const Tags = () => {
    const tags=['Digital','Computer', 'Codierung', 'Tech', 'Netz','Code','Finanzieren', 'Marketing' ]
  return (
    <div className='grid grid-cols-8 bg-slate-100 py-4 px-4 text-center'>
    {tags.map(tag=>(
        <p className='border-2 p-2 text-sm cursor-pointer font-medium m-1'>{tag}</p>
    ))}
    </div>
  )
}

export default Tags