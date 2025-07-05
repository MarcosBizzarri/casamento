import { Heart } from "lucide-react";

export function Separador() {
  return (
    <div className="flex items-center justify-center my-10 bg-[#FFFFF0]  gap-4">
      {/* Coração ponta esquerda */}
      <Heart className="text-[#5643ff] w-6 h-6" />

      {/* Linha curta */}
      <hr className="border-t border-gray-300 w-10" />

      {/* Coração centro menor */}
      <Heart className="text-[#ff96a9] w-4 h-4" />

      {/* Linha curta */}
      <hr className="border-t border-gray-300 w-10" />

      {/* Coração ponta direita */}
      <Heart className="text-[#5643ff] w-6 h-6" />
    </div>
  );
}
