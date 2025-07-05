"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Igreja from "../img/igreja.png";

export function Detalhes() {
  const [tempoRestante, setTempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const dataCasamento = new Date("2025-09-20T15:00:00");

    const atualizarContagem = () => {
      const agora = new Date();
      const diferenca = dataCasamento.getTime() - agora.getTime();

      if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        setTempoRestante({ dias, horas, minutos, segundos });
      }
    };

    const intervalo = setInterval(atualizarContagem, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="detalhes" className="min-h-screen bg-[#FFFFF0] py-12 px-4 sm:px-6 lg:px-20">
      <h1 className="text-3xl font-bold text-center font-josefin text-[#5643ff] mb-10">
        Detalhes do Casamento 💒
      </h1>

      <div className="max-w-4xl mx-auto bg-[#FFFFF0] p-6 rounded-lg shadow-md">
        {/* Imagem da igreja */}
        <div className="mb-6">
          <Image
            src={Igreja}
            alt="Igreja onde será realizado o casamento"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Informações principais */}
        <div className="font-josefin text-[#7c7c7c] space-y-4 text-lg ">
          <p>
            <strong>📅 <span className="text-[#5643ff]">Data:</span></strong> 20 de Setembro de 2025 
          </p>
          <p>
            <strong>⏰ <span className="text-[#5643ff]">Hora:</span></strong> 15:30h
          </p>
          <p>
            <strong>📍 <span className="text-[#5643ff]">Local:</span></strong> Comunidade Santa Rita de Cássia
          </p>
          <p>
            <strong>🏠 <span className="text-[#5643ff]">Endereço:</span></strong> R. José Carlos Pace, 20 - Jardim Santa Rita de Cassia, Hortolândia - SP
          </p>
        </div>

        {/* Mapa incorporado */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#5643ff] mb-2 font-josefin">Como chegar</h2>
          <iframe
            className="w-full h-64 rounded-lg"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117629.88188080426!2d-47.33931541442874!3d-22.878903420769692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b90025e9bc17%3A0x97fe57797233ddd4!2sComunidade%20Santa%20Rita%20de%20C%C3%A1ssia!5e0!3m2!1spt-BR!2sbr!4v1747096454321!5m2!1spt-BR!2sbr"
          ></iframe>
        </div>

        {/* Contagem regressiva */}
      {/* Contagem regressiva com estilo */}
<div className="mt-10 text-center text-gray-700">
  <h2 className="text-2xl mb-6 font-bold text-[#5643ff] font-josefin">
    Contagem regressiva para o grande dia 💍
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
    {/* Dias */}
    <div className="bg-[#ff96a9] rounded-xl p-4 shadow-md animate-pulse">
      <div className="text-4xl font-bold font-josefin text-[#5643ff]">{tempoRestante.dias}</div>
      <div className="mt-1 text-lg font-josefin font-bold text-[#5643ff]">Dias 🗓️</div>
    </div>

    {/* Horas */}
    <div className="bg-[#ff96a9] rounded-xl p-4 shadow-md animate-pulse">
      <div className="text-4xl font-bold font-josefin text-[#5643ff]">{tempoRestante.horas}</div>
      <div className="mt-1 text-lg font-josefin text-[#5643ff] font-bold">Horas ⏰</div>
    </div>

    {/* Minutos */}
    <div className="bg-[#ff96a9] rounded-xl p-4 shadow-md animate-pulse">
      <div className="text-4xl font-bold font-josefin text-[#5643ff]">{tempoRestante.minutos}</div>
      <div className="mt-1 text-lg font-josefin text-[#5643ff] font-bold">Minutos ⏱️</div>
    </div>

    {/* Segundos */}
    <div className="bg-[#ff96a9] rounded-xl p-4 shadow-md animate-pulse">
      <div className="text-4xl font-bold text-[#5643ff] font-josefin">{tempoRestante.segundos}</div>
      <div className="mt-1 text-lg font-josefin text-[#5643ff] font-bold">Segundos ⏳</div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
