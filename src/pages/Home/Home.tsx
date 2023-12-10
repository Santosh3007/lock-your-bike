import React, { useState } from 'react';
import College from '@/components/College/College';
import Menu from '@/components/Menu';
import filter from '@/assets/filter.svg';

interface Data {
  name: string;
  distance: number;
  racks: { name: string; isReserved: boolean }[];
}

const seed: Data[] = [
  {
    name: 'Warren College',
    distance: 100,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
  {
    name: 'Marshall College',
    distance: 300,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
  {
    name: 'Revelle College',
    distance: 600,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
  {
    name: 'Muir College',
    distance: 700,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
  {
    name: 'Sixth College',
    distance: 400,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
  {
    name: 'Seventh College',
    distance: 600,
    racks: [
      { name: 'Rack 1', isReserved: false },
      { name: 'Rack 2', isReserved: false },
    ],
  },
];

const Home = () => {
  const [data, setData] = useState(seed);

  const onClick = () => {
    const clone = [...data];
    const sorted = clone.sort((a, b) => a.distance - b.distance);
    setData(sorted);
  };

  return (
    <div className='flex-col h-screen overflow-auto bg-[#eae7dc]'>
      <div className='flex  bg-[#eae7dc] justify-center p-3 border-b-2 border-black sticky top-0 z-50'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='min-w-0 flex-1'>
            <h2 className='text-2xl font-medium leading-7 text-black sm:truncate sm:text-3xl sm:tracking-tight'>Find a Rack</h2>
          </div>
        </div>
      </div>

      <div className='m-1 mx-4 mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap'>
        <div className='mt-2'>
          <h3 className='text-2xl font-semibold leading-6 text-black'>Bike Racks Nearby</h3>
        </div>
        <div className='mt-2 flex-shrink-0'>
          <img src={filter} alt='filter' className='w-6 h-6 mx-auto' onClick={onClick} />
        </div>
      </div>

      <div className='m-1 mx-4 mt-2 items-center justify-between sm:flex-nowrap'>
        {data.map(college => (
          <College key={college.name} name={college.name} distance={college.distance} racks={college.racks} />
        ))}
      </div>
      {/* align menu bar to bottom of screen */}
      <div className='bottom-0 absolute w-full'>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
