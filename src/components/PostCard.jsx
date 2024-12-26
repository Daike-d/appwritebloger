import React from 'react'
import AppwriteService from '../appwrite/config'
import { Link } from 'react-router'

function PostCard({ $id, title, featuredImage }) {

   return (
      <Link to={`/post/${$id}`}>
         <div className='w-full bg-opacity-15 bg-cyan-200 rounded-xl p-4 '>
            <div className='w-full justify-center mb-4'>
               <img 
               src={AppwriteService.getFilePreview(featuredImage)} 
               alt={title} 
               className='rounded-xl' />
               
            </div>
            <h2 className='text-xl font-bold'>
               {title}
            </h2>
         </div>
      </Link>
   )
}

export default PostCard