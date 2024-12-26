import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import AppwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router'

function EditPost() {
   const [post, setPost] = useState([])
   const {slug} = useParams()
   const navigate = useNavigate()
   useEffect(()=>{
      if (slug) {
         AppwriteService.getPost(slug).then((post) => {
            if (post){
               setPost(post)
            }
         })
      } else {
         navigate('/')
      }
   }, [slug, navigate])
  return (
    <div className='py-8'>
      <Container>
         <PostForm post={post} />
      </Container>
   </div>
  )
}

export default EditPost