import React from "react";
import { MapPin } from "lucide-react";

import Image from "next/image";
import Romeu from "../img/romeu.restaurante.jpg";

export function Restaurante() {
    return (
    
    <div id="jantar" className="flex justify-center items-center py-10 px-4">
      <div className="max-w-lg w-full shadow-xl rounded-2xl overflow-hidden bg-[#FFFFF0]">

             <Image
            src={Romeu}
            alt="Igreja onde será realizado o casamento"
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-auto"
          />        {/* <img
          src="https://via.placeholder.com/800x400?text=Restaurante+Romeu"
          alt="Restaurante Romeu"
          className="w-full h-56 object-cover"
        /> */}
        <div className="p-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-[#5643ff]">Jantar de Casamento</h2>
          <p className="text-gray-700">
            Após a cerimônia na igreja, convidamos todos para um jantar no{" "}
            <span className="font-semibold text-[#5643ff]">Restaurante Romeu</span>.
          </p>
          <p className="text-red-600 font-medium">
            Importante: cada convidado será responsável pelo pagamento do seu
            próprio jantar.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin size={20} />
            <span>R. Antônio Bernardes, 151 - Lot. Remanso Campineiro, Hortolândia - SP</span>
          </div>
        </div>
      </div>
    </div>
  

            );
}
