import Link from 'next/link'
import React, { Children } from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-500 px-32 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-semibold">Logo</div>
        <ul className="flex space-x-4">
        <li>
      <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
      <Link href="/posts" className="text-white hover:text-gray-300">Posts</Link>
          </li>
          <li>
            
    <Link className="text-white hover:text-gray-300" href="/albums">Albums</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
    
  )
}

export default Navbar
