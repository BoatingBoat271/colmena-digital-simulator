"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, ArrowRight, AlertCircle } from "lucide-react";
import { RiskProfile } from "@/lib/types";
import { propertyTypes, securityConcerns, budgetRanges } from "@/lib/data/products";

interface Props {
  onComplete: (profile: RiskProfile) => void;
}

export default function DiagnosticLevel({ onComplete }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    concerns: [] as string[],
    location: "",
    budget: ""
  });

  const calculateRiskProfile = (): RiskProfile => {
    const concernCount = formData.concerns.length;
    let riskLevel: "low" | "medium" | "high" | "critical" = "low";
    let recommendedLevel: "basic" | "turbo" | "industrial" = "basic";

    if (concernCount >= 5 || formData.concerns.includes("drones")) {
      riskLevel = "critical";
      recommendedLevel = "industrial";
    } else if (concernCount >= 3) {
      riskLevel = "high";
      recommendedLevel = "turbo";
    } else if (concernCount >= 2) {
      riskLevel = "medium";
      recommendedLevel = "turbo";
    }

    if (formData.propertyType === "industrial" || formData.propertyType === "government") {
      recommendedLevel = "industrial";
    }

    return {
      propertyType: formData.propertyType,
      concerns: formData.concerns,
      location: formData.location,
      budget: formData.budget,
      riskLevel,
      recommendedLevel
    };
  };

  const handleSubmit = () => {
    const profile = calculateRiskProfile();
    onComplete(profile);
  };

  const toggleConcern = (concern: string) => {
    setFormData(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="h-10 w-10 text-[#00D9FF]" />
          <div>
            <h2 className="text-3xl font-bold text-white">Diagnóstico Inteligente</h2>
            <p className="text-gray-400">Responde algunas preguntas para generar tu perfil de riesgo</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-400">Progreso</span>
            <span className="text-sm text-[#00D9FF]">Paso {step} de 4</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-[#00D9FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Property Type */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              ¿Qué tipo de propiedad protegerás?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFormData({ ...formData, propertyType: type.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.propertyType === type.value
                      ? 'border-[#00D9FF] bg-[#00D9FF]/10 text-white'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <div className="font-semibold">{type.label}</div>
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!formData.propertyType}
              className="mt-6 w-full px-6 py-3 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-bold hover:bg-[#00FF88] transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>Continuar</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}

        {/* Step 2: Security Concerns */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              ¿Cuáles son tus principales preocupaciones? (Selecciona todas las que apliquen)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {securityConcerns.map((concern) => (
                <button
                  key={concern.value}
                  onClick={() => toggleConcern(concern.value)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.concerns.includes(concern.value)
                      ? 'border-[#00D9FF] bg-[#00D9FF]/10 text-white'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <div className="font-semibold">{concern.label}</div>
                </button>
              ))}
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 px-6 py-3 rounded-lg border border-[#00D9FF] text-white hover:bg-[#00D9FF]/10 transition-colors"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={formData.concerns.length === 0}
                className="flex-1 px-6 py-3 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-bold hover:bg-[#00FF88] transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Continuar</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              ¿En qué tipo de zona se encuentra?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "urban", label: "Zona Urbana" },
                { value: "suburban", label: "Zona Suburbana" },
                { value: "rural", label: "Zona Rural" },
                { value: "industrial", label: "Zona Industrial" }
              ].map((loc) => (
                <button
                  key={loc.value}
                  onClick={() => setFormData({ ...formData, location: loc.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.location === loc.value
                      ? 'border-[#00D9FF] bg-[#00D9FF]/10 text-white'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <div className="font-semibold">{loc.label}</div>
                </button>
              ))}
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setStep(2)}
                className="flex-1 px-6 py-3 rounded-lg border border-[#00D9FF] text-white hover:bg-[#00D9FF]/10 transition-colors"
              >
                Atrás
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!formData.location}
                className="flex-1 px-6 py-3 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-bold hover:bg-[#00FF88] transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Continuar</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Budget */}
        {step === 4 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              ¿Cuál es tu presupuesto estimado?
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {budgetRanges.map((budget) => (
                <button
                  key={budget.value}
                  onClick={() => setFormData({ ...formData, budget: budget.value })}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    formData.budget === budget.value
                      ? 'border-[#00D9FF] bg-[#00D9FF]/10 text-white'
                      : 'border-gray-600 hover:border-gray-500 text-gray-300'
                  }`}
                >
                  <div className="font-semibold">{budget.label}</div>
                </button>
              ))}
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                onClick={() => setStep(3)}
                className="flex-1 px-6 py-3 rounded-lg border border-[#00D9FF] text-white hover:bg-[#00D9FF]/10 transition-colors"
              >
                Atrás
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formData.budget}
                className="flex-1 px-6 py-3 rounded-lg bg-[#00FF88] text-[#0A1F44] font-bold hover:bg-[#00D9FF] transition-colors disabled:bg-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>Generar Diagnóstico</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Info Box */}
        <div className="mt-8 p-4 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-[#00D9FF] mt-0.5" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-white mb-1">¿Por qué necesitamos esta información?</p>
              <p>
                Este diagnóstico nos permite generar un perfil de riesgo personalizado y 
                recomendarte el nivel de seguridad más adecuado para tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
