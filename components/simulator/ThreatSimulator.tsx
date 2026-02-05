"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ThreatSimulator({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <Swords className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Simulador de Amenazas</h2>
          <p className="text-gray-400">Prueba tu sistema con escenarios reales (Próximamente)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { title: "🌙 El Intruso Nocturno", desc: "Intruso salta el muro a las 2:00 AM" },
          { title: "⚡ Corte de Luz", desc: "Delincuentes cortan electricidad" },
          { title: "🚁 Ataque con Dron", desc: "Dron sobrevuela buscando puntos débiles" },
          { title: "🔥 Emergencia: Incendio", desc: "Incendio en bodega" }
        ].map((scenario, index) => (
          <div
            key={index}
            className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6 hover:border-[#FF3366] transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-2">{scenario.title}</h3>
            <p className="text-gray-400 mb-4">{scenario.desc}</p>
            <button className="w-full px-4 py-2 rounded-lg bg-[#FF3366] text-white font-semibold hover:bg-[#FF3366]/80 transition-colors">
              Iniciar Simulación
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
