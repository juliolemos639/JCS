'use client';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { useGlobalContext } from '../Context/store';
import { useState } from 'react';

const NeighborhoodDropdown = () => {
  const { neighborhood, setNeighborhood, neighborhoods } = useGlobalContext();

  // console.log(Neighborhoods);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {neighborhood}
          </div>
          <div className="text-[13px]">Selecione</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu dark:bg-gray-900 dark:border dark:border-gray-300">
        {neighborhoods.map((neighborhood, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setNeighborhood(neighborhood)}
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {neighborhood}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default NeighborhoodDropdown;
