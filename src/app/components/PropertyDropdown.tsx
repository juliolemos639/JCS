'use client';

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { useGlobalContext } from '../Context/store';
import { useState } from 'react';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useGlobalContext();
  // console.log(properties);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
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
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
