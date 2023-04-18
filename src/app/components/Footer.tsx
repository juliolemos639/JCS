import React from 'react';

// import { RiFacebookCircleFill } from 'react-icons/ri';
import { TbSquareRoundedChevronUpFilled } from 'react-icons/tb';
import UsefulLinks from './UsefulLinks';
import OurServices from './OurServices';
import OurSocialNetorks from './OurSocialNetworks';
import Localization from './Localization';

export default function Footer() {
  return (
    <footer className="bg-black py-4 text-center text-gray-100">
      <div className="container mx-auto">
        <div className="max-w-[1200px] px-4 mb-8 text-left">
          <div className="text-left flex flex-col md:flex-row md:justify-between">
            <div>
              <Localization />
              <UsefulLinks />
            </div>
            {/*  */}
            <div>
              <OurServices />
              <OurSocialNetorks />
            </div>
          </div>
          <span className="flex mt-2 text-xs md:mt-4 md:justify-center">
            Copyright &copy; Assessoria JCS 2017-2023. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
