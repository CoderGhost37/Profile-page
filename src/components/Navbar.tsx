import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [courses, setCourses] = useState(false);
  return (
    <div className='mx-auto flex max-w-7xl items-center justify-between border-b-2 border-gray-100 px-6 py-4 md:space-x-10'>
      <div className='flex text-gray-800'>
        <Link href='/'>
          <div className='flex flex-shrink-0 items-center text-gray-800'>
            <span className='text-xl font-bold'>codedamn</span>
          </div>
        </Link>
      </div>

      <div className='relative hidden space-x-5 sm:flex'>
        <div className='relative w-full'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              aria-hidden='true'
              className='h-5 w-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            id='search-dropdown'
            className='z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Search'
            required
          />
        </div>
        <button
          onClick={() => setCourses((c) => !c)}
          type='button'
          className='inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
        >
          Courses
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clip-rule='evenodd'
            />
          </svg>
        </button>
        {courses && (
          <div
            className='absolute right-[-10px] z-10 mt-8 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
          >
            <div className='py-1' role='none'>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700'
                role='menuitem'
                id='menu-item-0'
              >
                Course 1
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700'
                role='menuitem'
                id='menu-item-1'
              >
                Course 2
              </a>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700'
                role='menuitem'
                id='menu-item-2'
              >
                Course 3
              </a>
            </div>
          </div>
        )}
      </div>

      <div className='flex items-center space-x-5 md:space-x-10'>
        <div className='flex items-center space-x-1'>
          <Image src='/assets/Vector.png' alt='vector' height={15} width={15} />
          <a
            href='#'
            className='text-base font-medium text-gray-500 hover:text-gray-900'
          >
            3
          </a>
        </div>
        <div className='relative flex items-center space-x-1'>
          <Image src='/assets/bell.png' alt='vector' height={20} width={20} />
          <span className='absolute top-[-8px] right-[-8px]  rounded-full bg-red-600 px-[6px] py-[1px] text-center text-xs font-semibold text-white'>
            1
          </span>
        </div>
        <div className='flex items-center'>
          <Image
            src='/assets/profile-pic.png'
            alt='user'
            className='rounded-full object-cover'
            height={40}
            width={40}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
