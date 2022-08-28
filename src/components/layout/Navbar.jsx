import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar({ title = 'Github Finder' }) {
  return (
    <nav className='navbar bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline text-3xl pr-2' />
          <Link to='/' className='font-bold align-middle'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
