// components/Separador.tsx
import { Heart } from "lucide-react";

export function Separador() {
  return (
    <div className="flex items-center justify-center my-10">
      <hr className="flex-grow border-t border-[#5643ff]" />
      <Heart className="mx-4 text-pink-500" size={28} />
      <hr className="flex-grow border-t border-[#5643ff]" />
    </div>
  );
}
