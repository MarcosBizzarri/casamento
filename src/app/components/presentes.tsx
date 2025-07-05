"use client";

import { useState } from "react";
import Image from "next/image";
import Whatsapp from "../img/WhatsApp.svg";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebaseConfig"; // ajuste o caminho conforme seu projeto

import emailjs from "@emailjs/browser";

import Qrcode from "../img/qrcode-pix.png";

export function Presentes() {
  const chavePix = "marcos-bizzarri@hotmail.com";
  const [copiado, setCopiado] = useState(false);

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [convidadoDe, setConvidadoDe] = useState("");
  const [recado, setRecado] = useState("");
  const [confirmacao, setConfirmacao] = useState<"sim" | "nao" | "">("");
  const [enviando, setEnviando] = useState(false);
  

  const [popup, setPopup] = useState({
  show: false,
  type: "success" as "success" | "error",
  message: "",
});

const mostrarPopup = (type: "success" | "error", message: string) => {
  setPopup({ show: true, type, message });

  setTimeout(() => {
    setPopup((prev) => ({ ...prev, show: false }));
  }, 3000);
};



  // Controla se mostra botão WhatsApp após envio

 const copiarPix = async () => {
  try {
    await navigator.clipboard.writeText(chavePix);
    setCopiado(true);
    mostrarPopup("success", "Chave PIX copiada com sucesso!");
    setTimeout(() => setCopiado(false), 2000);
  } catch (err) {
    console.error("Erro ao copiar chave PIX:", err);
    mostrarPopup("error", "Erro ao copiar chave PIX.");
  }
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
if (!nome || !convidadoDe || !confirmacao) {
  mostrarPopup("error", "Preencha nome, confirmação e convidado de quem.");
  return;
}



    setEnviando(true);
 

    try {
      await addDoc(collection(db, "cadastroEmail"), {
        nome,
        email: email.trim(),
        convidadoDe,
        recado,
        confirmacao,
        timestamp: new Date(),
      });

      if (email.trim()) {
        await emailjs.send(
          "service_5cwboud", // substitua aqui
          "template_9encsqe", // substitua aqui
          {
            to_name: nome,
            to_email: email,
            message: recado || "Sem recado",
          },
          "RFdRc6I3dlN4rdVF0" // substitua aqui
        );
       mostrarPopup("success", "Obrigado pelo seu recado!");

      }

mostrarPopup("success", "Obrigado pelo seu recado!");



      // Resetar campos
      setNome("");
      setEmail("");
      setConvidadoDe("");
      setRecado("");
      setConfirmacao("");
    } catch (error) {
      console.error("Erro:", error);
      mostrarPopup("error", "Erro ao enviar, tente novamente.");

    } finally {
      setEnviando(false);
    }
  };

  // Formata o número para o link WhatsApp (remove tudo que não for número)

 return (
  <>
    {popup.show && (
      <div
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white z-50 transition-all duration-300 ease-in-out ${
          popup.type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        {popup.message}
      </div>
    )}

    <div id="presentes" className="bg-[#FFFFF0] py-12 px-6 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#5643ff] font-josefin mb-6">
          Confirme sua presença e nos envie um recado 💌
        </h1>

        <div className="min-h-screen bg-[#FFFFF0] py-12 px-4 sm:px-6 lg:px-20 border border-[#FFFFF0] rounded-[48px]">
          <form
            onSubmit={handleSubmit}
            className="mb-12 text-left space-y-6 bg-[#FFFFF0] p-6 rounded-xl shadow-md"
          >
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block mb-1 font-semibold text-[#7c7c7c]">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5643ff]"
                required
                disabled={enviando}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-[#7c7c7c]">
                Email (opcional)
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5643ff]"
                disabled={enviando}
                placeholder="exemplo@dominio.com"
              />
            </div>

            {/* Convidado de quem */}
            <div>
              <label htmlFor="convidadoDe" className="block mb-1 font-semibold text-[#7c7c7c]">
                Você é convidado(a) da noiva ou do noivo?
              </label>
              <select
                id="convidadoDe"
                value={convidadoDe}
                onChange={(e) => setConvidadoDe(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5643ff]"
                required
                disabled={enviando}
              >
                <option value="" disabled style={{ color: "#7c7c7c" }}>
                  Selecione...
                </option>
                <option value="noiva" style={{ color: "#7c7c7c" }}>
                  Convidado(a) da Noiva
                </option>
                <option value="noivo" style={{ color: "#7c7c7c" }}>
                  Convidado(a) do Noivo
                </option>
              </select>
            </div>

            {/* Recado */}
            <div>
              <label htmlFor="recado" className="block mb-1 font-semibold text-[#7c7c7c]">
                Deixe um recado para nós!
              </label>
              <textarea
                id="recado"
                value={recado}
                onChange={(e) => setRecado(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5643ff]"
                rows={3}
                disabled={enviando}
              />
            </div>

            {/* Confirmação */}
            <fieldset>
              <legend className="mb-2 font-semibold text-[#7c7c7c]">
                Você vai ao casamento?
              </legend>
              <label className="inline-flex items-center mr-6 cursor-pointer">
                <input
                  type="radio"
                  name="confirmacao"
                  value="sim"
                  checked={confirmacao === "sim"}
                  onChange={() => setConfirmacao("sim")}
                  className="form-radio text-[#5643ff]"
                  required
                  disabled={enviando}
                />
                <span className="ml-2">Sim, estarei presente</span>
              </label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="confirmacao"
                  value="nao"
                  checked={confirmacao === "nao"}
                  onChange={() => setConfirmacao("nao")}
                  className="form-radio text-[#5643ff]"
                  required
                  disabled={enviando}
                />
                <span className="ml-2">Não poderei comparecer</span>
              </label>
            </fieldset>

            {/* Botão enviar */}
            <div className="flex justify-center">
              <button
                type="submit"
                className={`bg-[#5643ff] text-white font-josefin px-6 py-3 rounded-md hover:bg-[#7768ff] transition cursor-pointer ${
                  enviando ? "opacity-60 cursor-not-allowed" : ""
                }`}
                disabled={enviando}
              >
                {enviando ? "Enviando..." : "Enviar"}
              </button>
            </div>

            {/* WhatsApp */}
            <div className="mt-6 text-center">
              <a
                href="https://chat.whatsapp.com/GeVxe8be86E7eINriU8h1x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Whatsapp}
                  alt="Grupo WhatsApp"
                  width={50}
                  height={50}
                  className="mx-auto hover:scale-110 transition-transform"
                />
                <p className="text-[#5643ff] mt-2">Entrar no grupo</p>
              </a>
            </div>
          </form>
        </div>


        {/* PIX */}
        <h2 className="text-4xl font-bold text-[#5643ff] font-josefin mt-12">
          Presente via Pix 💖
        </h2>

        <p className="text-lg mb-6 text-[#7c7c7c] font-bold font-josefin">
          Sua presença é o nosso maior presente! Mas se quiser nos ajudar a montar
          nosso lar com amor, aceitamos com carinho sua contribuição via Pix. 🙏
        </p>

        <div className="bg-[#c4bdff] shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4">
          <Image
            src={Qrcode}
            alt="QR Code Pix"
            width={200}
            height={200}
            className="rounded"
          />

          <div className="text-md text-[#1a00ff] font-bold font-josefin text-center">
            <strong>Chave Pix:</strong>
            <br />
            <span className="text-[#7c7c7c] font-josefin font-bold">{chavePix}</span>
          </div>

          <button
            onClick={copiarPix}
            className="bg-[#7768ff] font-josefin hover:bg-[#8a7dff] text-white px-6 py-2 rounded-md transition"
          >
            {copiado ? "Chave copiada!" : "Copiar chave Pix"}
          </button>
        </div>

        <p className="mt-10 text-sm text-[#7c7c7c] italic">Muito obrigado pelo carinho! ❤️</p>
      </div>
    </div>
  </>
);

}
