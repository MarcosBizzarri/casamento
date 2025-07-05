import Image from "next/image";

import Ronaldo from "../img/ronaldoecarol.png";
import Rafael from "../img/rafaeledani.png";
import Jose from "../img/solejose.jpg";
import Fabiano from "../img/geraldaefabiano.jpg";

import Terno from "../img/terno.jpg";
import Vestido from "../img/vestido.jpg";

const padrinhos = [
  {
    nome: " Rafael e Dani",
    foto: Rafael,
  },
  {
      nome: " Ronaldo e Carol",
      foto: Ronaldo,
  },
  {
    nome: " José e Solange",
    foto: Jose,
  },
  {
    nome: " Fabiano e Geralda",
    foto: Fabiano,
  },
];

export function Padrinhos() {
  return (
   <div
  id="padrinhos"
  className="min-h-screen bg-[#FFFFF0] px-4 sm:px-6 lg:px-8"
>
  <h1 className="text-3xl font-bold text-center text-[#5643ff] font-josefin mb-24">
    Nossos Padrinhos
  </h1>

<div className="grid items-center flex-col grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto gap-1  px-4 mt-10 w-full">
  {padrinhos.map((padrinho, index) => (
    <div key={index} className="flex flex-col items-center p-4 transition duration-300">
      <div className="w-[120px] h-[120px] relative rounded-full overflow-hidden mb-4">
        <Image
          src={padrinho.foto}
          alt={padrinho.nome}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-[16px] font-bold font-josefin text-[#5643ff] text-center whitespace-nowrap">
        {padrinho.nome}
      </p>
    </div>
  ))}

<div className="flex flex-col justify-center items-center md:items-start p-4 pl-8 sm:pl-4 md:pl-14 col-span-2 sm:col-span-1 md:col-span-3 lg:col-span-4">

  <p className="text-lg font-bold font-josefin text-[#7c7c7c] text-center md:text-left">
    <span className="block text-[#5643ff] mb-1">Madrinhas:</span>
    Vestido na paleta Rosé.
  </p>
  <p className="text-lg font-bold font-josefin text-[#7c7c7c] mt-4 text-center md:text-left">
    <span className="block text-[#5643ff] mb-1">Padrinhos:</span>
    Terno no tom Bege Claro, camisa branca, colete bege e gravata rosé presenteada pelos noivos.
  </p>
</div>
</div>



  <div className="mt-20 text-center">
    <h1 className="text-3xl font-bold text-[#5643ff] font-josefin">
      Paletas dos Padrinhos
    </h1>

    <div className="flex flex-wrap justify-center items-center p-4 gap-8 mt-6">
      <Image
        src={Terno}
        alt="Terno"
        width={175}
        height={200}
      />
      <Image
        src={Vestido}
        alt="Vestido"
        width={200}
        height={200}
      />
    </div>
  </div>
</div>

  );
}
