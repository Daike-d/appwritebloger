import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]
  return (
    <header className='fixed top-0 left-0 right-0 z-50 p-4 py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto font-sans'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={()=> navigate(item.slug)}
                    className='inline-block px-6 py-3 duration-200 hover:bg-blue-200 rounded-full'>
                    {item.name}
                    </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header