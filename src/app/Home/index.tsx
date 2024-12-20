import Image from 'next/image';
import previews from '../../assets/app-preview.png';

import style from "./style.module.css";
import { ClaimUsernameForm } from './components/ClaimUsernameForm';

export default function Home() {
  return (
    <div className={`${style.conteiner}`}>
      <div className={`${style.hero}`}>
        <h1 className="text-3xl font-bold">Agendamento descomplicado</h1>
        <p className='text-xl mt-2 text-gray-400'>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </p>
        <ClaimUsernameForm />
      </div>

      <div className={`${style.preview} pr-8 overflow-hidden max-sm:hidden`}>
        <Image
          src={previews}
          height={400}
          quality={100}
          alt="calendario simbolizando aplicação em funcionamento"
        />
      </div>
    </div>
  );
}
