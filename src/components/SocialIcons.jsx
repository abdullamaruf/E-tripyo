import React from 'react'
import { Link } from 'react-router-dom'
import { RiGoogleFill, RiInstagramFill, RiLinkedinBoxFill, RiPinterestFill, RiTwitterXFill, RiYoutubeFill } from 'react-icons/ri'

const SocialIcons = () => {
  return (
   <div className="flex gap-6 pr-4">
    <Link to={''} className=' text-[#08d9d6] text-2xl hover:translate-y-1 transition-all duration-500'><RiYoutubeFill/></Link>
    <Link to={''} className='text-[#f08a5d] text-2xl hover:translate-y-1 transition-all duration-500'><RiInstagramFill/></Link>
    <Link to={''} className='text-[#ff2e6a] text-2xl hover:translate-y-1 transition-all duration-500'><RiTwitterXFill/></Link>
    <Link to={''} className='text-[#eaeaea] text-2xl hover:translate-y-1 transition-all duration-500'><RiLinkedinBoxFill/></Link>
    <Link to={''} className='text-[#f9ed69] text-2xl hover:translate-y-1 transition-all duration-500'><RiGoogleFill/></Link>
    <Link to={''} className='text-[#5272f2] text-2xl hover:translate-y-1 transition-all duration-500'><RiPinterestFill/></Link>

   </div>
  )
}

export default SocialIcons
