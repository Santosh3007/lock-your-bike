import React from 'react';
import account from '@/assets/account.svg';
import lock from '@/assets/lock.svg';
import find from '@/assets/find.svg';
import warning from '@/assets/warning.svg';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Menu = () => {
  const tabs = [
    { name: 'Find', href: '#', current: true, img: find },
    { name: 'Lock', href: '#', current: false, img: lock },
    { name: 'Safety', href: '#', current: false, img: warning },
    { name: 'Account', href: '#', current: false, img: account },
  ];

  return (
    <div className='block w-full border-t-2 border-black'>
      <nav className='isolate flex divide-x divide-gray-200 bg-[#eae7dc] rounded-lg shadow w-full' aria-label='Tabs'>
        {tabs.map((tab, tabIdx) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classNames(
              'text-gray-900',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-[#eae7dc] py-4 px-4 text-center text-sm font-medium focus:z-10',
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            <img src={tab.img} alt={tab.name} className={classNames('fill-gray-900', 'w-6 h-6 mx-auto')} />
            <span>{tab.name}</span>
            <span
              aria-hidden='true'
              className={classNames(tab.current ? 'bg-indigo-500' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5')}
            />
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
