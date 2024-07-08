import React from 'react';

const Card = ({ logo, name}) => {
  return (
    <div className='flex flex-col items-center justify-center rounded-full shadow-mg p-1 cursor-pointer hover:scale-110 duration-300'>
      <img src={logo} alt={name} className='w-[120px] h-[128px] rounded-full  mx-auto' />
      <div className=''>
        <h2 className='text-xl font-bold text-center'>{name}</h2>
      </div>
    </div>
  );
};

export default Card;

