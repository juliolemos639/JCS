'use client';

import NeighborhoodDropdown from './NeighborhoodDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

import { RiSearch2Line } from 'react-icons/ri';

// import { useContext } from 'react';
import { useGlobalContext } from '../Context/store';

const Search = () => {
  const { handleClick } = useGlobalContext();

  return (
    <div
      className="px-[30px] py-6 max-w-[880px]
     mx-auto flex flex-col lg:flex-row justify-between
     gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white 
     lg:bg-transparent lg:backdrop-blur rounded-lg
     dark:bg-gray-900 dark:border dark:border-gray-300
     z-40
     "
      data-aos="fade-down"
      data-aos-delay="700"
    >
      <NeighborhoodDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full
      lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
