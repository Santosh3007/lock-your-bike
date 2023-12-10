import React from 'react';

// Takes in rack name and reserved status

const Rack = ({ name }: { name: string }) => {
  const onClick = () => {
    alert('Your reservation will end in 10 minutes. Please reach the bike rack on time. Thank you!');
  };

  return (
    <div>
      <div className='flex my-2 ml-2 flex-wrap items-center justify-between sm:flex-nowrap'>
        <div className=''>
          <h3 className='text-xl font-bold underline leading-6 text-gray-900'>{name}</h3>
        </div>
        <div className='ml-4 mt-2 mr-1 flex-shrink-0'>
          <button
            type='button'
            className='relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-1.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={onClick}
          >
            Reserve
          </button>
        </div>
      </div>
      <hr className='my-1 h-0.5 mx-32 bg-gray-200 border-0 dark:bg-gray-400 rounded-lg'></hr>
    </div>
  );
};

export default Rack;
