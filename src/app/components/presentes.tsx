// app/presentes/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

import Qrcode from "../img/qrcode-pix.png";

export function Presentes() {
  const chavePix = "marcos-bizzarri@hotmail.com";
  const [copiado, setCopiado] = useState(false);

  const copiarPix = async () => {
    try {
      await navigator.clipboard.writeText(chavePix);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar chave PIX:", err);
    }
  };

  return (
    <div id="presentes" className="min-h-screen bg-[#FAEBD7] py-12 px-6 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#5643ff] font-josefin mb-6">Presente via Pix 💖</h1>

        <p className="text-lg mb-6 text-[#7768ff] font-bold font-josefin">
          Sua presença é o nosso maior presente! Mas se quiser nos ajudar a montar nosso lar com amor, aceitamos com carinho sua contribuição via Pix. 🙏
        </p>

        <div className="bg-[#c4bdff] shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
          {/* QR Code se tiver imagem */}
          <Image
            src={Qrcode} // Coloque o QR Code aqui se quiser
            alt="QR Code Pix"
            width={200}
            height={200}
            className="rounded"
          />

          <div className="text-md text-[#1a00ff] font-bold font-josefin">
            <strong>Chave Pix:</strong><br />
            <span className="text-[#7768ff] font-josefin font-bold">{chavePix}</span>
          </div>

          <button
            onClick={copiarPix}
            className="bg-[#7768ff] font-josefin cursor-pointer hover:bg-[#8a7dff] text-white px-6 py-2 rounded-md transition"
          >
            {copiado ? "Chave copiada!" : "Copiar chave Pix"}
          </button>
        </div>

        <p className="mt-10 text-sm text-gray-600 italic">
          Muito obrigado pelo carinho! ❤️
        </p>
      </div>
    </div>
  );
}
