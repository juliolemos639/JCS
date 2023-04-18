'use client';

// import data
// import { housesData } from '../../../src/app/data';

import { useGlobalContext } from '../Context/store';

import { data } from '../mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

import Link from 'next/link';

import { useSearchParams } from 'next/navigation';

// import { useRouter } from 'next/router';

import Image from 'next/image';

export default function Property() {
  // const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { houses } = useGlobalContext();

  const house = houses.find((house) => {
    return JSON.stringify(house.id) === id;
  });

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  // console.log(ProductProps);

  return (
    <>
      <section>
        <div className="container mx-auto min-h-[800] mb-14">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{house.name}</h2>
              <h3 className="text-lg mb-4">{house.address}</h3>
            </div>
            <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
              <div className="bg-green-500 text-white px-3 rounded-full">
                {house.type}
              </div>
              <div className="bg-violet-500 text-white px-3 rounded-full">
                {house.neighborhood}
              </div>
            </div>
            <div className="text-3xl font-semibold text-violet-600">
              $ {house.price}
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <Image src={house.imageLg} alt="Foto da casa" />
              </div>
              <div className="flex gap-x-6 text-violet-700 mb-6">
                <div className="flex gap-x-2 items-center">
                  <BiBed className="text-2xl" />
                  <div>{house.bedrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiBath className="text-2xl" />
                  <div>{house.bathrooms}</div>
                </div>
                <div className="flex gap-x-2 items-center">
                  <BiArea className="text-2xl" />
                  <div>{house.surface}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
            <div
              className="flex-1 bg-white w-full mb-8 border border-gray-300 rouded-lg px-6 py-8
            dark:bg-gray-900 dark:border dark:border-gray-300
            "
            >
              <div className="flex items-center gap-x-4 mb-8">
                <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                  {/* <Image src={house.agent.image} alt="" /> */}
                </div>
                <div>
                  <div className="font-bold text-lg">
                    {/* {house.agent.name} */}
                  </div>
                  <Link href="/" className="text-violet-700 text-sm">
                    Volte à listagem
                  </Link>
                </div>
              </div>
              <form className="flex flex-col gap-y-4">
                <input
                  type="text"
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                  placeholder="Nome*"
                />
                <input
                  type="text"
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                  placeholder="E-mail*"
                />
                <input
                  type="text"
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                  placeholder="Fone*"
                />
                <textarea
                  className="border border-gray-300 focus:border-violet-700 outline-none resize-none rouded w-full p-4 h-36 text-sm text-gray-400"
                  placeholder="Mensagem*"
                  defaultValue="Olá, estou interessado em ..."
                ></textarea>
                <div className="flex gap-x-2">
                  <Link href="/">
                    <button className="bg-violet-700 hover:bg-violet-800 text-white rouded p-4 text-sm w-full transition">
                      Envie uma mensagem
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 rouded p-4  text-sm w-full transition">
                      Ligue
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="block text-center text-4xl mb-4 font-bold text-violet-600">
          Galeria de Fotos
        </h2>
        <div className="relative flex flex-row items-center mb-10">
          <MdChevronLeft
            className="hidden md:flex md:opacity-50 md:cursor-pointer md:hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <img
                key={item.id}
                className="w-full lg:w-[220px] grid grid-col-1 h-[220px] object-cover lg:inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                src={item.img}
                alt="/"
              />
            ))}
          </div>
          <MdChevronRight
            className="hidden md:flex md:opacity-50 md:cursor-pointer md:hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </section>
    </>
  );
}
