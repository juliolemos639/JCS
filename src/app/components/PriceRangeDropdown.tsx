import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';

import { Menu } from '@headlessui/react';

import { useGlobalContext } from '../Context/store';
import { useState } from 'react';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useGlobalContext();

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Valor (todos)',
    },
    {
      value: '1000 - 21000',
    },
    {
      value: '30000 - 40000',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '220000 - 250000',
    },
    {
      value: '250000 - 280000',
    },
    {
      value: '280000 - 310000',
    },
    {
      value: '310000 - 340000',
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Selecione</div>
          {isOpen ? (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          )}
        </div>
      </Menu.Button>

      <Menu.Items className="dropdown-menu dark:bg-gray-900 dark:border dark:border-gray-300">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
