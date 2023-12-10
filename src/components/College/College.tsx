import React from 'react';
import Rack from '@/components/Rack/Rack';

const College = ({ racks, name, distance }: { racks: { name: string }[]; name: string; distance: number }) => {
  return (
    <div>
      <div className=' flex flex-wrap items-center justify-between sm:flex-nowrap'>
        <div className=''>
          <h3 className='text-xl font-bold text-gray-600'>{name}</h3>
        </div>
        <div className='flex-shrink-0 mr-1'>
          <h3 className='text-xl font-medium text-gray-900'>{distance} m</h3>
        </div>
      </div>
      <div className='m-1 items-center justify-between sm:flex-nowrap'>
        {racks.map(rack => (
          <Rack key={rack.name} name={rack.name} />
        ))}
      </div>
    </div>
  );
};

export default College;
