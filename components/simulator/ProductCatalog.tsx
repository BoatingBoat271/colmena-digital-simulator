"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Shield } from "lucide-react";
import { products } from "@/lib/data/products";

export default function ProductCatalog() {
  const barrierNames = {
    1: "Perímetro Inteligente",
    2: "Entorno y Operación",
    3: "Interior y Personas"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <ShoppingCart className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Catálogo de Productos</h2>
          <p className="text-gray-400">Triple Barrera de Seguridad</p>
        </div>
      </div>

      {[1, 2, 3].map((barrier) => (
        <div key={barrier} className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-[#00D9FF]" />
            <h3 className="text-2xl font-bold text-white">
              Barrera {barrier}: {barrierNames[barrier as keyof typeof barrierNames]}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products
              .filter((p) => p.barrierLevel === barrier)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-4 hover:border-[#00FF88] transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#00D9FF]">
                      ${product.price.toLocaleString('es-CL')}
                    </span>
                    <button className="px-4 py-2 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-semibold hover:bg-[#00FF88] transition-colors text-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
