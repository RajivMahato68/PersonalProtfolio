import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNode,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import photo from "../../public/ra.jpg";

import { ReactTyped } from "react-typed";

function Home() {
  const [showFullText, setShowFullText] = useState(false);

  const handleShowMore = () => {
    setShowFullText(true);
  };

  const socialICon = [
    {
      label: <FaFacebook />,
      href: "https://www.facebook.com/rajipkumar.mahato.16",
      target: "_blank",
    },
    {
      label: <FaInstagramSquare />,
      href: "https://www.instagram.com/rajivkumarmahato_/",
      target: "_blank",
    },
    {
      label: <FaLinkedin />,
      href: "https://www.linkedin.com/in/rajiv-mahato-008b48270/",
      target: "_blank",
    },
    {
      label: <FaGithub />,
      href: "https://github.com/RajivMahato68",
      target: "_blank",
    },
  ];

  const reactIcons = [
    {
      id: 1,
      text: <SiMongodb />,
    },
    {
      id: 2,
      text: <SiExpress />,
    },
    {
      id: 3,
      text: <FaReact />,
    },
    {
      id: 4,
      text: <FaNode />,
    },
  ];
  return (
    <>
      <div name="Home" className="max-w-screen-2xl mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Student", "Developer", "Coder"]}
                typeSpeed={70}
                backSpeed={70}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              {showFullText || window.innerWidth >= 768 ? (
                <span>
                  Hello, I am Rajiv. I have completed my Bachelor's degree in Computer
                  Applications (BCA) from Patan NIST, Lalitpur. Throughout my academic
                  journey, I built a strong foundation in computer science, software
                  development, and modern web technologies. I have hands-on experience
                  working with HTML, CSS, JavaScript, React.js, Tailwind CSS, Next.js,
                  MongoDB, MySQL, and other web development tools. I enjoy creating
                  responsive, user-friendly, and scalable web applications that solve
                  real-world problems. Passionate about continuous learning and
                  innovation, I stay updated with the latest industry trends and best
                  practices. I am currently seeking opportunities where I can apply my
                  technical skills, contribute to meaningful projects, and grow as a
                  Frontend Developer.
                </span>
              ) : (
                <span>
                  Hello, I am Rajiv. I have completed my Bachelor's degree in Computer
                  Applications (BCA) from Patan NIST, Lalitpur. I have a strong
                  foundation in web development and hands-on experience with React.js,
                  Next.js, JavaScript, Tailwind CSS, MongoDB, and modern frontend
                  technologies.
                  <button
                    className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full md:hidden"
                    onClick={handleShowMore}
                  >
                    Read more...
                  </button>
                </span>
              )}
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  {socialICon.map((link) => (
                    <li key={link.label} className="text-2xl cursor-pointer">
                      <a href={link.href} target={link.target} className="">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold md:ml-5 ml-1">Currently Working on</h1>
                <ul className="flex space-x-5">
                  {reactIcons.map(({ id, text }) => (
                    <li
                      key={id}
                      className="text-xl ml-3 cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-6 order-1">
            <img
              src={photo}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt="author photo"
            />
          </div>
        </div>
      </div>
      <hr className="" />
    </>
  );
}

export default Home;
