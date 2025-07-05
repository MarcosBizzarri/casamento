// app/sobre-noivo/page.tsx (Next.js 13+ com app router)
import Image from "next/image";

import Caraiva from "../img/caraiva.jpg";
import Arraial from "../img/arraial.jpg";
import Maceio from "../img/maceio.jpg";
import Pocos from "../img/pocos.jpg";

export  function Sobrenos() {
  return (
    <div
    id="sobrenos"
     className="bg-[#FFFFF0] min-h-screen py-10 px-4 ">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#5643ff] font-josefin text-center">Sobre nós</h1>

        {/* Imagem destacada */}
        <div className="flex justify-center">
          <Image
            src={Caraiva}
            alt="Noivos juntos"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* História */}
        <section>
          <h2 className="text-2xl font-bold font-josefin  text-[#5643ff] mb-4 text-center">Nossa história</h2>
          <p className="text-lg leading-relaxed font-josefin text-[#7c7c7c]">
            Nos conhecemos em um momento simples, mas cheio de significado. Desde o primeiro sorriso, sentimos que havia algo especial. A amizade se transformou em amor, e cada capítulo da nossa história nos trouxe até aqui — ao início da nossa vida juntos.
          </p>
        </section>

        
        <section className="mt-10">
  <h2 className="text-2xl font-bold mb-4 text-[#5643ff] text-center">Sobre o noivo</h2>
  <p className="text-lg leading-relaxed text-[#7c7c7c]">
Marcos é um homem de fé, determinado e de coração generoso. Ele se dedica à sua família e aos seus sonhos com paixão e responsabilidade. Tem o desejo sincero de construir um futuro ao lado de Jéssica, fundamentado em amor, respeito, cumplicidade e na presença de Deus.  </p>
</section>


        <section>
  <h2 className="text-2xl font-bold mb-4 text-[#5643ff] text-center">Sobre a noiva</h2>
  <p className="text-lg leading-relaxed text-[#7c7c7c]">
    Jéssica é uma mulher de fé, carinhosa, sonhadora e muito dedicada à sua família. Seu coração generoso e sua doçura encantam todos ao seu redor. Com um sorriso que ilumina os dias, ela caminha com amor e propósito ao lado de Marcos, construindo juntos uma linda história baseada em Deus, respeito e companheirismo.
  </p>
</section>


        {/* Galeria de Fotos */}
        <section className="mt-12">
  <h2 className="text-3xl font-bold font-josefin text-[#5643ff] mb-12 text-center">Momentos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="flex justify-center">
      <Image src={Maceio} alt="Momentos" width={300} height={200} className="rounded-lg" />
    </div>
    <div className="flex justify-center">
      <Image src={Arraial} alt="Momentos" width={300} height={200} className="rounded-lg" />
    </div>
    <div className="flex justify-center">
      <Image src={Pocos} alt="Momentos" width={300} height={200} className="rounded-lg" />
    </div>
  </div>
</section>


        {/* Versículos Bíblicos */}
        <section className="bg-[#ffdbe1] ] p-6 rounded-lg shadow mt-10">
          <h2 className="text-2xl font-bold font-josefin  text-[#3620ff] mb-4 text-center">Versículos</h2>
          <ul className="list-disc list-inside space-y-4 font-josefin text-[#7c7c7c] text-lg">
            <li>
              “Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém o separe.” — <strong>Mateus 19:6</strong>
            </li>
            <li>
              “Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.” — <strong>Colossenses 3:14</strong>
            </li>
            <li>
              “O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha.” — <strong>1 Coríntios 13:4</strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
