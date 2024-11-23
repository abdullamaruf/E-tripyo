import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer id='contact' className='bg-tertiary max-padd-container text-white py-12 rounded-xl'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
      {/* logo and description */}
      <div className='flex flex-col items-center md:items-start'>
        <Link to={'/'} className='bold-24 mb-4'>
        <h3 >Eva <span className='text-secondary'>ra</span></h3>
        </Link>
        <p className='text-center md:text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis itaque similique quis molestiae labore alias reprehenderit, illo non. Ullam eum eos fuga amet.</p>
      </div>
      {/* Quick links  */}
      <div className='flex flex-col items-center md:items-start'>
        <h4 className='bold-20 mb-5 '>Quick Links</h4>
          <ul className='space-y-2 regular-15 text-gray-30'>
            <li><a href="/" className='hover:text-secondary'>Home</a></li>
            <li><a href="/" className='hover:text-secondary'>Categories</a></li>
            <li><a href="/" className='hover:text-secondary'>Shop</a></li>
            <li><a href="/" className='hover:text-secondary'>Contact Us</a></li>
          </ul>
      </div >
      {/* contact information  */}
      <div className='flex flex-col items-center md:items-start '>
        <h4 className='text-lg mb-4'>Contact Us</h4>
        <p className='p-2'>Email: <a href="" className='hover:text-secondary'>user@gmail.com</a></p>
        <p  className='p-2'>Phone: <a href="" className='hover:text-secondary'>+34324234</a></p>
        <p  className='p-2'>Address: 123 Feni Bangladesh</p>
       
      </div>
    </div>
    <div className='flex flex-col items-center mt-8'>
    <SocialIcons/>
    <hr className='h-[1px]  my-4 w-full'/>
    <p className='text-center text-sm'>&copy; {new Date().getFullYear()} constania | All rights reserved  </p>
    <p className='text-secondary'>Develop by Maruf</p>
    </div>
   
   
   
    </footer>
    
  )
}

export default Footer
