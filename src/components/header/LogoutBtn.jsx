import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
   const dispatch = useDispatch()
   const logoutHandler = () => {
      authService.logout()
         .then(() => {
            dispatch(logout())
         })
   }
   return (
      <button 
      onClick={logoutHandler}
      className='inline-block px-6 py-3 duration-200 hover:bg-red-200 rounded-full'>
         Logout
      </button>
   )
}

export default LogoutBtn