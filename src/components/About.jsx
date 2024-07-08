import React,{useState} from 'react'
import { FaHtml5, FaCss3,FaReact,FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill} from "react-icons/ri";
import { SiMongodb,SiExpress,SiNextdotjs } from "react-icons/si";

const skillIcons = [
    {
       id:1,
       text: "HTML",
       icons:<FaHtml5 className='mt-1'/>
    },
    {
       id:2,
       text: "CSS",
       icons: <FaCss3 className='mt-1'/>
    },
    {
       id:3,
       text:  "JavaScript",
       icons: <IoLogoJavascript className='mt-1'/>
    },
    {
       id:4,
       text: "Tailwind CSS",
       icons: <RiTailwindCssFill className='mt-1'/>
    },
    {
        id:4,
        text: "MongoDB",
        icons:<SiMongodb className='mt-1'/>
     },
     {
        id:4,
        text: "ExpressJs",
        icons:<SiExpress className='mt-1'/>
     },
     {
        id:4,
        text: "React js",
        icons: <FaReact className='mt-1'/>
     },
     {
        id:4,
        text: "Next js",
        icons: <SiNextdotjs  className='mt-1'/>
     },
   ];

function About() {
   const [showFullText, setShowFullText] = useState(false);


  const handleShowMore = () => {

    setShowFullText(true);

  };
  return (
    <div name="About" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-9">
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className='text-justify'>Hello, I'm Rajiv, a passionate web Developer with a keen eye for MEAN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression. </p>
      <br />
      <h1 className='text-blue-900 font-semibold text-xl mb-2'>Education & Training</h1>
      <p className='text-justify'>

I completed my +2 in management in 2076 from Bhanubhakta Memorial Secondary School, located in Gaushala-01, Mahottary.

{showFullText && (

  <span>

    During my time there, I gained a strong foundation in management principles and developed essential skills that have been beneficial in my higher studies. Currently, I am pursuing a Bachelor of Computer Applications (BCA) and am in my 6th semester at Patan NIST in Lalitpur. My coursework in BCA has provided me with a solid understanding of computer science, programming, and information technology. This educational journey has equipped me with both management and technical skills, preparing me for a dynamic career in the tech industry.

  </span>

)}

{!showFullText && (

  <button

    className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full md:hidden"

    onClick={handleShowMore}

  >

    Read more...

  </button>

)}

</p>

        <h1 className=' text-blue-900 font-semibold text-xl mt-5 mb-2'>Skill & Expertise</h1>
        <ul className='flex flex-wrap justify-center'>
  {skillIcons.map(({ id, text, icons }) => (
    <li key={id} className='text-xl md:text-xl  p-2 xl:p-4 cursor-pointer hover:scale-110 duration-200 flex  space-x-1   text-center'>
      {icons}{text}
    </li>
  ))}
</ul>

<h1 className="text-blue-900 font-semibold text-xl mt-5 mb-2">Professional Experience</h1>
<p className='text-justify'>I am a BCA student and a fresher in web development. I have developed skills in HTML, CSS, JavaScript, React, Tailwind CSS, MongoDB, and Next.js. My passion for coding and eagerness to learn drive me to create dynamic and responsive web applications using modern technologies.</p>

<h1 className='text-blue-900 font-semibold text-xl mt-5 mb-2'>Mission Statement</h1>
<p className='text-justify'>My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons. </p>
    </div>
  )
}

export default About
