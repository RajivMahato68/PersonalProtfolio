import React from 'react';

const Card = ({ logo, name, description }) => {
  return (
    <div className='md:w-[300px] md:h-[300px] border-[2px] border-black rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
      <img src={logo} alt={name} className='w-[120px] h-[128px] p-1 rounded-full border-[2px] mx-auto' />
      <div className='p-4'>
        <h2 className='text-xl font-bold px-2 mb-5 text-center'>{name}</h2>
        <p className='text-gray-600 '>{description}</p>
        <div className='flex justify-center px-3 py-2 space-x-3'>
  
        <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'
                onClick={() => window.open('https://github.com/RajivMahato68', '_blank')}
                > Source Code

</button>
</div>
      </div>
    </div>
  );
};

export default Card;

