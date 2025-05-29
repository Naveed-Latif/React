import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto px-4 py-4 bg-blue-300 opacity-70 sticky top-0' >
      <nav className='flex justify-between items-center'>
        <div className='text-2xl font-bold text-gray-800 hover:text-gray-950 hover:font-bold hover:cursor-pointer'>BTask</div>
        <ul className='flex space-x-4'>
          <li><a href="#" className='text-gray-600 hover:text-gray-800'>Home</a></li>
          <li><a href="#" className='text-gray-600 hover:text-gray-800'>About</a></li>
          <li><a href="#" className='text-gray-600 hover:text-gray-800'>Services</a></li>
          <li><a href="#" className='text-gray-600 hover:text-gray-800'>Contact</a></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
