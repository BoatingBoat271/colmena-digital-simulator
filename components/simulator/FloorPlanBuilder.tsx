"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import { RiskProfile, Project } from "@/lib/types";

interface Props {
  riskProfile: RiskProfile;
  onProjectUpdate: (project: Project) => void;
}

export default function FloorPlanBuilder({ riskProfile, onProjectUpdate }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center space-x-3 mb-6">
        <PenTool className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Constructor de Planos</h2>
          <p className="text-gray-400">Diseña tu espacio en 2D (Próximamente)</p>
        </div>
      </div>

      <div className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-8 text-center">
        <p className="text-xl text-white mb-4">🚧 En Desarrollo 🚧</p>
        <p className="text-gray-400">
          El editor de planos interactivo con Fabric.js estará disponible pronto.
        </p>
        <div className="mt-6 p-4 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg">
          <p className="text-[#00FF88] font-semibold">Perfil de Riesgo Detectado:</p>
          <p className="text-white mt-2">
            Nivel: {riskProfile.riskLevel} | Recomendado: {riskProfile.recommendedLevel}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
