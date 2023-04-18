'use client';

import Search from './Search';
import { useGlobalContext } from '../Context/store';
import Image from 'next/image';

// Banner

const Banner = () => {
  const { houses, neighborhoods, properties, loading } = useGlobalContext();

  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1
            className="text-4xl lg:text-[58px] font-semibold leading-none mb-6"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <span className="text-violet-700">Alugue / Compre / Venda.</span>{' '}
            Realize seu sonho!
          </h1>
          <p
            className="max-w-[480px] mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            officia eum consequatur eveniet, a omnis totam voluptates atque rem
            officiis vero ratione nostrum. Expedita accusamus dicta ipsam,
            soluta veritatis at.
          </p>
        </div>

        <div
          className="hidden flex-1 lg:flex justify-end items-end"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <Image
            className="rounded-tl-[100px]"
            src="/alligator2.jpg"
            alt="Banner de uma casa"
            width={600}
            height={600}
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
