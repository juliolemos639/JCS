import {
  AiOutlineMail,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';

export default function OurSocialNetorks() {
  return (
    <div className="mt-3 text-left mb-8  md:mb-0">
      <h4 className="text-gray-200 font-bold">Nossas Redes Sociais</h4>
      <p className="text-sm mt-2">
        Mantenha-se sempre atualizado seguindo nossas redes sociais.
      </p>
      <div className="flex mt-3 gap-2">
        <a href="https://www.facebook.com/jcsassessoria" target="_blank">
          <AiFillFacebook size={26} className="hover:text-violet-700" />
        </a>
        <a href="https://www.instagram.com/assessoriajcs/" target="_blank">
          <AiFillInstagram size={26} className="hover:text-violet-700" />
        </a>
        <a href="https://twitter.com/assessoriajcs" target="_blank">
          <AiFillTwitterSquare size={26} className="hover:text-violet-700" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5521992674037&text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20assistente."
          target="_blank"
        >
          <FaWhatsappSquare size={26} className="hover:text-violet-700" />
        </a>
      </div>
    </div>
  );
}
