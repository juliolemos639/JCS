import { MdLocalPhone, MdOutlineWhatsapp } from 'react-icons/md';
import { SlScreenSmartphone } from 'react-icons/sl';

import { AiOutlineMail } from 'react-icons/ai';

export default function Localization() {
  return (
    <div className="text-sm">
      <h2 className="text-gray-200 font-bold text-2xl">JCS</h2>
      <div className="flex flex-col mt-2">
        <span>
          Av. Alm. Júlio de Sá Bierrenbach, 200, Bloco 1B, Sala 402 - Centro
          Metropolitano
        </span>
        <span> Barra da Tijuca, Rio de Janeiro - RJ</span>
        <span> CEP 22775-028</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <MdLocalPhone />
        <span className="font-bold text-sm">Telefone: </span>
        +55 (21) 2143-6788
      </div>
      <div className="flex items-center gap-2">
        <SlScreenSmartphone />
        <span className="font-bold">Celular: </span>
        +55 (21) 99267-4037
      </div>
      <div className="flex items-center gap-2">
        <AiOutlineMail />
        <span className="font-bold">Celular: </span>
        +55 (21) 99267-4037
      </div>
    </div>
  );
}
