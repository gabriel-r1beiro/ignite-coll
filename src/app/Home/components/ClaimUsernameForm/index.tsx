'use client';
import { ArrowRight } from 'phosphor-react';

import style from "./style.module.css";

export function ClaimUsernameForm() {
  return (
    <form className={`${style.form} grid bg-gray-800 p-4 rounded-md gap-3 mt-4 max-sm:grid-cols-1 sm:grid-cols-2`}>
      <input
        className=" text-sm text-gray-200 p-2 rounded-md bg-gray-900"
        placeholder="Seu-usuario"
        prefix="ignite.com/"
        type="text"
      />
      <button
        className="text-sm font-normal py-2 px-3 text-white bg-green-600 flex items-center justify-center gap-2 rounded-md hover:bg-green-700"
        type="submit"
      >
        Reservar Usuário
        <ArrowRight />
      </button>
    </form>
  );
}
