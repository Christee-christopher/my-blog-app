import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({item}) => {
  return (
    <div className='border-orange-400 rounded-md'>
        <div>
          <Link to={`/blog/${item.fullName}`}>
          <img
          src={item.image}
          alt={item.nickname}
          className=' w-full rounded-lg'
          
          />
          </Link>
          <div className='p-[20px] text-center'>
            <Link to={`/blog/${item.fullName}`}>
            <h3 className='text-[20px] font-bold '>{item.nickname}</h3>
            </Link>

          

          <p>{item.hogwartsHouse}</p>

          <button
          className='p-[15px 20px]'
          variant='outlined'>
            Read More
          </button>
          </div>
        </div>
    </div>
  )
}

export default Article
