import React from 'react';
import CardExp from './CardExp';
import html from '../../public/html.jpg'
import css from '../../public/css.jpg'
import Javascript from '../../public/Javascript.jpg'
import github from '../../public/github.jpg'
import mongodb from '../../public/mongodb.jpg'
import nextjs from '../../public/nextjs.jpg'
import tailwind from '../../public/tailwind.jpg'

const Experience = () => {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML"
    },
    {
      id: 2,
      logo: css,
      name: "CSS"
    },
    {
      id: 2,
      logo: Javascript,
      name: "JavaScript"
     
    },
    {
      id: 2,
      logo: github,
      name: "GitHub"
    },
    {
      id: 2,
      logo: tailwind,
      name: "Tailwind Css"
     
    },
    {
      id: 2,
      logo: mongodb,
      name: "MongoDB"
    },
    {
      id: 2,
      logo: nextjs,
      name: "Next Js"
    },
  ];

  return (
    <div name="Experiance" className='max-w-screen-2xl mx-auto px-4 md:px-20'>
      <div>
        <h1 className='text-3xl font-bold mb-2'>Experiance</h1>
        <p className=' '>I'Ve more than 1 years of experience in below technology</p>
        <div className='grid grid-cols-2 md:grid-cols-5 md:gap-20 gap-10 mt-2'>
          {cardItems.map((cardItem) => (
            <CardExp key={cardItem.id} logo={cardItem.logo} name={cardItem.name}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;