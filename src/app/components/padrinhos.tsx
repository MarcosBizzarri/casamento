import Image from "next/image";

import Ronaldo from "../img/ronaldoecarol.png";
import Rafael from "../img/rafaeledani.png";
import Jose from "../img/solejose.jpg";
import Fabiano from "../img/geraldaefabiano.jpg";

const padrinhos = [
  {
    nome: "José e Solange",
    foto: Jose,
  },
  {
    nome: "Fabiano e Geralda",
    foto: Fabiano,
  },
  {
    nome: "Rafael e Daniele",
    foto: Rafael,
  },
  {
    nome: "Ronaldo e Carol",
    foto: Ronaldo,
  },
];

export function Padrinhos() {
  return (
    <div
     id="padrinhos"
     className="min-h-screen bg-[#FAEBD7] py-36 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-[#5643ff] font-josefin mb-10">Nossos Padrinhos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {padrinhos.map((padrinhos, index) => (
          <div key={index} className="flex flex-col items-center bg-[#dedaff] p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <div className=" w-40 h-40 relative rounded-full overflow-hidden border-4 border-pink-300 mb-4">
              <Image
                src={padrinhos.foto}
                alt={padrinhos.nome}
                layout="fill"
                objectFit="cover"
                
              />
            </div>
            <p className="text-lg font-bold font-josefin text-[#5643ff]">{padrinhos.nome }</p>
          </div>
        ))}
      </div>
    </div>
  );
}
