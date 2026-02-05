"use client";

import { useState } from "react";
import { Shield, CheckCircle } from "lucide-react";
import DiagnosticLevel from "@/components/simulator/DiagnosticLevel";
import FloorPlanBuilder from "@/components/simulator/FloorPlanBuilder";
import ProductCatalog from "@/components/simulator/ProductCatalog";
import ThreatSimulator from "@/components/simulator/ThreatSimulator";
import ControlPanel from "@/components/simulator/ControlPanel";
import BudgetGenerator from "@/components/simulator/BudgetGenerator";
import GamificationPanel from "@/components/simulator/GamificationPanel";
import { RiskProfile, Project } from "@/lib/types";

export default function SimulatorPage() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [riskProfile, setRiskProfile] = useState<RiskProfile | null>(null);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [userPoints, setUserPoints] = useState(0);
  const [userLevel, setUserLevel] = useState(1);

  const levels = [
    { id: 1, name: "Diagnóstico Inteligente", completed: !!riskProfile },
    { id: 2, name: "Constructor de Planos", completed: false },
    { id: 3, name: "Catálogo de Productos", completed: false },
    { id: 4, name: "Simulador de Amenazas", completed: false },
    { id: 5, name: "Panel Colmena Digital", completed: false },
    { id: 6, name: "Presupuesto", completed: false },
    { id: 7, name: "Gamificación", completed: false }
  ];

  const handleDiagnosticComplete = (profile: RiskProfile) => {
    setRiskProfile(profile);
    setUserPoints(prev => prev + 100);
    setCurrentLevel(2);
  };

  const handleProjectUpdate = (project: Project) => {
    setCurrentProject(project);
    setUserPoints(prev => prev + 50);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0d2654] to-[#0A1F44]">
      {/* Header */}
      <header className="border-b border-[#00D9FF]/20 bg-[#0A1F44]/50 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-[#00D9FF]" />
              <div>
                <h1 className="text-2xl font-bold text-white">Simulador Colmena Digital</h1>
                <p className="text-sm text-gray-400">Nivel {userLevel} • {userPoints} puntos</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => window.location.href = '/'}
                className="px-4 py-2 rounded-lg border border-[#00D9FF] text-white hover:bg-[#00D9FF]/10 transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Level Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm border border-[#00D9FF]/30 rounded-lg p-4 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-4">Niveles</h2>
              <div className="space-y-2">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => {
                      if (level.id === 1 || riskProfile) {
                        setCurrentLevel(level.id);
                      }
                    }}
                    disabled={level.id > 1 && !riskProfile}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      currentLevel === level.id
                        ? 'bg-[#00D9FF] text-[#0A1F44] font-bold'
                        : level.completed
                        ? 'bg-[#00FF88]/20 text-white hover:bg-[#00FF88]/30'
                        : level.id > 1 && !riskProfile
                        ? 'bg-gray-800/50 text-gray-600 cursor-not-allowed'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{level.name}</span>
                      {level.completed && (
                        <CheckCircle className="h-4 w-4 text-[#00FF88]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm border border-[#00D9FF]/30 rounded-lg p-6">
              {currentLevel === 1 && (
                <DiagnosticLevel onComplete={handleDiagnosticComplete} />
              )}
              {currentLevel === 2 && riskProfile && (
                <FloorPlanBuilder 
                  riskProfile={riskProfile}
                  onProjectUpdate={handleProjectUpdate}
                />
              )}
              {currentLevel === 3 && (
                <ProductCatalog />
              )}
              {currentLevel === 4 && currentProject && (
                <ThreatSimulator project={currentProject} />
              )}
              {currentLevel === 5 && currentProject && (
                <ControlPanel project={currentProject} />
              )}
              {currentLevel === 6 && currentProject && (
                <BudgetGenerator project={currentProject} />
              )}
              {currentLevel === 7 && (
                <GamificationPanel 
                  userPoints={userPoints}
                  userLevel={userLevel}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
