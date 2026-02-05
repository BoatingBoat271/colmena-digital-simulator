"use client";

import { motion } from "framer-motion";
import { Monitor, Camera, Lock, Zap, Wifi } from "lucide-react";
import { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ControlPanel({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <Monitor className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Panel Colmena Digital</h2>
          <p className="text-gray-400">Monitoreo Centralizado 24/7</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { icon: Camera, label: "Cámaras Online", value: "12", color: "text-[#00FF88]" },
          { icon: Lock, label: "Accesos Controlados", value: "4", color: "text-[#00D9FF]" },
          { icon: Zap, label: "Cerco Eléctrico", value: "Armado", color: "text-[#00FF88]" },
          { icon: Wifi, label: "Conectividad", value: "98%", color: "text-[#00D9FF]" }
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-4"
          >
            <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">🟢 Sistema Activo</h3>
        <div className="space-y-3">
          {[
            { time: "14:23", event: "Movimiento detectado zona A", status: "info" },
            { time: "12:10", event: "Acceso autorizado - J.Pérez", status: "success" },
            { time: "09:45", event: "Mantenimiento programado", status: "warning" }
          ].map((alert, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg"
            >
              <span className="text-gray-400 text-sm">{alert.time}</span>
              <span className="text-white flex-1">{alert.event}</span>
              <div className={`h-2 w-2 rounded-full ${
                alert.status === 'success' ? 'bg-[#00FF88]' :
                alert.status === 'warning' ? 'bg-yellow-500' :
                'bg-[#00D9FF]'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
