"use client";

import { motion } from "framer-motion";
import { DollarSign, Download, Mail, Calendar } from "lucide-react";
import { Project } from "@/lib/types";
import { products } from "@/lib/data/products";

interface Props {
  project: Project;
}

export default function BudgetGenerator({ project }: Props) {
  // Sample quote
  const sampleItems = [
    { name: "Cerco Eléctrico 80m", price: 450000, qty: 1 },
    { name: "Cámara IP 4K con IA", price: 280000, qty: 4 },
    { name: "Control Biométrico", price: 340000, qty: 1 },
    { name: "UPS 3000W", price: 450000, qty: 1 },
    { name: "Instalación Profesional", price: 500000, qty: 1 }
  ];

  const subtotal = sampleItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const iva = subtotal * 0.19;
  const total = subtotal + iva;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <DollarSign className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Presupuesto y Cotización</h2>
          <p className="text-gray-400">Cotización instantánea del proyecto</p>
        </div>
      </div>

      <div className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Resumen de Cotización</h3>
        
        <div className="space-y-3 mb-6">
          {sampleItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <div className="text-white font-medium">{item.name}</div>
                <div className="text-sm text-gray-400">Cantidad: {item.qty}</div>
              </div>
              <div className="text-[#00D9FF] font-bold">
                ${(item.price * item.qty).toLocaleString('es-CL')}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-[#00D9FF]/30 pt-4 space-y-2">
          <div className="flex justify-between text-gray-300">
            <span>Subtotal:</span>
            <span>${subtotal.toLocaleString('es-CL')} CLP</span>
          </div>
          <div className="flex justify-between text-gray-300">
            <span>IVA (19%):</span>
            <span>${iva.toLocaleString('es-CL')} CLP</span>
          </div>
          <div className="flex justify-between text-2xl font-bold text-[#00FF88] pt-2">
            <span>TOTAL:</span>
            <span>${total.toLocaleString('es-CL')} CLP</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-lg">
          <h4 className="font-semibold text-white mb-2">💳 Opciones de Pago:</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Mercado Pago (hasta 12 cuotas)</li>
            <li>• Transferencia bancaria</li>
            <li>• 🚗 Leasing Chilease (24-48 meses)</li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-[#00FF88]/10 border border-[#00FF88]/30 rounded-lg">
          <h4 className="font-semibold text-white mb-2">🧠 Consultoría Estratégica Adicional:</h4>
          <p className="text-sm text-gray-300 mb-2">
            Sesión con Marcelo Vergara Burgos - Arquitecto de Seguridad
          </p>
          <p className="text-sm text-gray-300">
            Incluye: Auditoría + Plan maestro • Valor: $500.000 CLP
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          <button className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-semibold hover:bg-[#00FF88] transition-colors">
            <Download className="h-4 w-4" />
            <span>PDF</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-semibold hover:bg-[#00FF88] transition-colors">
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-[#00FF88] text-[#0A1F44] font-semibold hover:bg-[#00D9FF] transition-colors col-span-2">
            <Calendar className="h-4 w-4" />
            <span>Agendar Visita Técnica</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
