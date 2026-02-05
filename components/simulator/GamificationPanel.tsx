"use client";

import { motion } from "framer-motion";
import { Trophy, Award, TrendingUp, Users } from "lucide-react";

interface Props {
  userPoints: number;
  userLevel: number;
}

export default function GamificationPanel({ userPoints, userLevel }: Props) {
  const achievements = [
    { id: 1, name: "Primera Barrera", desc: "Configurar perímetro", unlocked: true, icon: "✅" },
    { id: 2, name: "Ojo de Halcón", desc: "100% cobertura de cámaras", unlocked: false, icon: "🔒" },
    { id: 3, name: "Fortaleza", desc: "Superar 90% seguridad", unlocked: false, icon: "🔒" },
    { id: 4, name: "Resiliente", desc: "Configurar respaldos", unlocked: false, icon: "🔒" },
    { id: 5, name: "Maestro", desc: "Completar 5 proyectos", unlocked: false, icon: "🔒" }
  ];

  const leaderboard = [
    { rank: 1, user: "@user123", points: 5890 },
    { rank: 2, user: "@security_pro", points: 4200 },
    { rank: 3, user: "TÚ", points: userPoints, isCurrentUser: true },
    { rank: 4, user: "@guardian", points: 1850 },
    { rank: 5, user: "@techmaster", points: 1200 }
  ];

  const nextLevelPoints = userLevel * 500;
  const progress = (userPoints % 500) / 500 * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="h-10 w-10 text-[#00D9FF]" />
        <div>
          <h2 className="text-3xl font-bold text-white">Comunidad y Logros</h2>
          <p className="text-gray-400">Sistema de gamificación y rankings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Profile */}
        <div className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="h-8 w-8 text-[#00D9FF]" />
            <div>
              <h3 className="text-xl font-bold text-white">Tu Perfil de Seguridad</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">Nivel: "Guardia Elite"</span>
                <span className="text-[#00D9FF] font-bold">Nivel {userLevel}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-[#00D9FF] h-3 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-sm text-gray-400 mt-1">
                {userPoints} / {nextLevelPoints} puntos para nivel {userLevel + 1}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
              <div>
                <div className="text-2xl font-bold text-[#00D9FF]">{userPoints}</div>
                <div className="text-sm text-gray-400">Puntos Totales</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#00FF88]">1</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-8 w-8 text-[#00D9FF]" />
            <h3 className="text-xl font-bold text-white">Ranking Comunitario</h3>
          </div>
          
          <div className="space-y-2">
            {leaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  entry.isCurrentUser
                    ? 'bg-[#00D9FF]/20 border border-[#00D9FF]'
                    : 'bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    entry.rank === 1 ? 'bg-yellow-500 text-black' :
                    entry.rank === 2 ? 'bg-gray-400 text-black' :
                    entry.rank === 3 ? 'bg-orange-600 text-white' :
                    'bg-gray-700 text-white'
                  }`}>
                    {entry.rank}
                  </div>
                  <span className={`font-medium ${entry.isCurrentUser ? 'text-[#00D9FF]' : 'text-white'}`}>
                    {entry.user}
                  </span>
                </div>
                <span className="text-gray-300">{entry.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-6 bg-white/5 border border-[#00D9FF]/30 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Award className="h-8 w-8 text-[#00D9FF]" />
          <h3 className="text-xl font-bold text-white">🏅 Logros Desbloqueados</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border-2 ${
                achievement.unlocked
                  ? 'border-[#00FF88] bg-[#00FF88]/10'
                  : 'border-gray-700 bg-gray-800/50 opacity-50'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-bold text-white mb-1">{achievement.name}</h4>
              <p className="text-sm text-gray-400">{achievement.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="mt-6 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">💬 Comparte tu Progreso</h3>
        <p className="text-[#0A1F44] mb-4">
          "Diseñé un sistema de seguridad con {userPoints} puntos. ¡Revisa mi proyecto! #ColmenaDigital"
        </p>
        <button className="px-6 py-3 rounded-lg bg-[#0A1F44] text-white font-bold hover:bg-[#0d2654] transition-colors">
          Compartir en Redes
        </button>
      </div>
    </motion.div>
  );
}
