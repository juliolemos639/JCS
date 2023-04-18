import { BiChevronRight } from 'react-icons/bi';

export default function UsefulLinks() {
  return (
    <div className="mt-3 text-left flex-col  md:mb-0">
      <h4 className="text-gray-200 font-bold">Links Úteis</h4>
      <ul className="mt-3 text-sm">
        <li className="flex gap-1 hover:text-violet-700">
          <BiChevronRight />
          <a href="https://www.secovirio.com.br/" target="_blank">
            SecoviRio
          </a>
        </li>
        <li className="flex gap-1 hover:text-violet-700">
          <BiChevronRight />
          <a href="https://www.sindiconet.com.br/" target="_blank">
            Sindiconet
          </a>
        </li>
        <li className="flex gap-1 hover:text-violet-700">
          <BiChevronRight />
          <a href="https://creci-rj.gov.br/" target="_blank">
            Creci-RJ
          </a>
        </li>
        <li className="flex gap-1 hover:text-violet-700">
          <BiChevronRight />
          <a href="https://abadi.com.br/" target="_blank">
            Abadi
          </a>
        </li>
        <li className="flex gap-1 hover:text-violet-700">
          <BiChevronRight />
          <a href="http://receita.economia.gov.br/" target="_blank">
            Receita Federal
          </a>
        </li>
      </ul>
    </div>
  );
}
