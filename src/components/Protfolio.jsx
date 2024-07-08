import React from 'react';
import Card from './Card';

const Protfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: '/E-commerce.jpg',
      name: "College Project",
      description: "An e-commerce site built using HTML, CSS, Bootstrap, and PHP."
    },
    {
      id: 2,
      logo: '/Protfolio.jpg',
      name: "Personal Website",
      description: "A portfolio website built with ReactJS and Tailwind CSS."
    },
  ];

  return (
    <div name="Protfolio" className='max-w-screen-2xl mx-auto px-4 md:px-20 my-9'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Protfolio</h1>
        <span className='underline font-semibold'>Featured Project</span>
        <div className='grid grid-cols-1 md:grid-cols-3 py-8 mb-5 gap-10 '>
          {cardItems.map((cardItem) => (
            <Card key={cardItem.id} logo={cardItem.logo} name={cardItem.name} description={cardItem.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protfolio;