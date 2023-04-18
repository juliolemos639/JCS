import { BiChevronRight } from 'react-icons/bi';

export default function OurServices() {
  return (
    <div className="mt-3 text-left md:mt-0">
      <h4 className="text-gray-200 font-bold">Nossos Serviços</h4>
      <ul className="mt-3 text-sm">
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Administração de condomínios</a>
        </li>
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Locação, compra e venda</a>
        </li>
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Sindicatura profissional</a>
        </li>
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Área contábil</a>
        </li>
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Coach para síndicos</a>
        </li>
        <li className="flex gap-1">
          <BiChevronRight />
          <a>Departamento pessoal</a>
        </li>
      </ul>
    </div>
  );
}
