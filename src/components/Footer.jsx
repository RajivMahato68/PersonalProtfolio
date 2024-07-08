import React from 'react'
import { FaFacebook,FaInstagramSquare,FaGithub,FaLinkedin} from "react-icons/fa";

function Footer() {
    const socialICon = [
        { label: <FaFacebook />, href: 'https://www.facebook.com/rajipkumar.mahato.16', target:"_blank"},
        { label: <FaInstagramSquare />, href: 'https://www.instagram.com/rajivkumarmahato_/', target:"_blank" },
        { label: <FaLinkedin />, href: 'https://www.linkedin.com/in/rajiv-mahato-008b48270/', target:"_blank" },
        { label: <FaGithub />, href: 'https://github.com/RajivMahato68', target:"_blank" },
       
      ];
  return (
   <>
   <hr />
  <footer className='py-12'>
    <div className='max-w-screen-2xl mx-auto px-4 md:px-20 '>
        <div className='flex flex-col items-center justify-center'>
        <div className='space-y-2 '>
            <ul className='space-x-5 size-[24] flex items-center justify-center'>
                {socialICon.map((link) => (
                  <li key={link.label} className='text-2xl cursor-pointer'>
                    <a href={link.href}  target={link.target} className=""
            >
                      {link.label}
                    </a> 
                  </li>
                ))}
              </ul>
        </div>
        <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className='text-sm'>&copy; 2024 Rajiv Mahato. All right reserved</p>
                <p className='text-sm'>Supportive Partner 💖 Rajiv </p>
        </div>
        </div>
         
    </div>
  </footer>
   </>
  )
}

export default Footer
