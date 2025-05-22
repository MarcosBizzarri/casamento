"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const imagens = [
  "/img/casamento.jpg",
  "/img/porto-seguro.png",
  "/img/campos.jpg"
];

export default function Fotos() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length); // Avança para a próxima imagem
    }, 3000); // 3 segundos para cada imagem

    return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? imagens.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  return (
    <div className="w-full h-[400px] flex justify-center items-center pt-20 ">
  <div className="relative w-[600px] h-[400px]">
    <Image
      src={imagens[index]}
      alt={`Imagem ${index + 1}`}
      fill
      className="object-cover transition-opacity duration-500 rounded-lg"
      priority
    />

    {/* Setas de navegação sobre a imagem */}
    <button
      onClick={handlePrev}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full cursor-pointer transition"
    >
      &#60;
    </button>

    <button
      onClick={handleNext}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full cursor-pointer transition"
    >
      &#62;
    </button>
    
  </div>

 
</div>

  );
}
