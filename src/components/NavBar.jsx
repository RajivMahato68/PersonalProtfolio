import React, { useState } from 'react'
import photo from "../../public/profile.jpg"
import { IoMenu,IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
function NavBar(){
    const navItems = [
     {
        id:1,
        text:"Home"
     },
     {
        id:2,
        text:"About"
     },
     {
        id:3,
        text:"Protfolio"
     },
     {
        id:4,
        text:"Experiance"
     },
     {
        id:5,
        text:"Contract"
     }
      
    ];
    const  [menu, setMenu] = useState(false)
  return (
   <>
   <div className='max-w-screen-2xl mx-auto  md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-blue-400'>
    <div className='flex justify-between px-4 items-center h-16'>
        <div className='flex space-x-2'>
            <img src={photo} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Raji
                <span className='text-red-500 text-2xl'>v</span>
            <p className='text-sm '>Web Developer</p>
            </h1>
        </div>
        {/* Desktop NavBar */}
        <div>
        <ul className='hidden md:flex space-x-8'>
                {navItems.map(({id,text}) => (
                  <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                  
                   <Link to={text}
                   smooth={true}
                   duration={500}
                   offset={-70}
                   activeClass='active'
                   >{text}</Link>
                  </li>
                ))}
              </ul>
            <div
                onClick={()=>setMenu(!menu)} className='md:hidden cursor-pointer'>
                    {menu?<IoClose size={24}/>:<IoMenu size={24}/>}
            </div>
        </div>
    </div>

    {/* mobile navbar  */}
    {menu && (
    <div className='bg-blue-400  h-[200px]'>
    <ul className='md:hidden  flex flex-col items-center   h-screen space-y-3 text-xl'>
    {navItems.map(({id,text}) => (
                  <li key={id} className='hover:scale-105 duration-200 font-semibold cursor-pointer '>
                   <Link
                   onClick={()=>setMenu(!menu)}
                   to={text}
                   smooth={true}
                   duration={500}
                   offset={-70}
                   activeClass='active'
                   >{text}</Link>
                  </li>
                ))}
              </ul>
   </div>
   )}
   </div>
   </>
  )
}


export default NavBar
