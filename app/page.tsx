"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Eye, Lock, TrendingUp, Award, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Triple Barrera de Seguridad",
      description: "Protección integral en tres niveles: perímetro, entorno y interior"
    },
    {
      icon: Eye,
      title: "Simulador de Amenazas",
      description: "Prueba tu sistema contra escenarios reales gamificados"
    },
    {
      icon: TrendingUp,
      title: "IA Inteligente",
      description: "Recomendaciones personalizadas basadas en tu perfil de riesgo"
    },
    {
      icon: Zap,
      title: "Cotización Instantánea",
      description: "Genera presupuestos en tiempo real con exportación a PDF"
    },
    {
      icon: Lock,
      title: "Seguridad 4.0",
      description: "IoT, ciberseguridad y tecnología anti-drones integrada"
    },
    {
      icon: Award,
      title: "Sistema Gamificado",
      description: "Gana puntos, logros y sube de nivel mientras diseñas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#0d2654] to-[#0A1F44]">
      {/* Navigation */}
      <nav className="border-b border-[#00D9FF]/20 bg-[#0A1F44]/50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-[#00D9FF]" />
            <span className="text-2xl font-bold text-white">Colmena Digital</span>
          </div>
          <div className="space-x-4">
            <Link 
              href="/simulator" 
              className="px-6 py-2 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-semibold hover:bg-[#00FF88] transition-colors"
            >
              Iniciar Simulador
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Diseña tu Sistema de
            <span className="text-[#00D9FF]"> Seguridad Inteligente</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Plataforma interactiva gamificada para crear, simular y cotizar sistemas de 
            seguridad electrónica profesionales. Powered by Tecnoprotec & Centinela Chile.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/simulator" 
              className="px-8 py-4 rounded-lg bg-[#00D9FF] text-[#0A1F44] font-bold text-lg hover:bg-[#00FF88] transition-colors shadow-lg shadow-[#00D9FF]/50"
            >
              🚀 Comenzar Ahora
            </Link>
            <Link 
              href="#features" 
              className="px-8 py-4 rounded-lg border-2 border-[#00D9FF] text-white font-bold text-lg hover:bg-[#00D9FF]/10 transition-colors"
            >
              Ver Características
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { value: "3", label: "Barreras de Seguridad" },
            { value: "50+", label: "Productos Disponibles" },
            { value: "24/7", label: "Monitoreo Simulado" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-[#00D9FF]/30 rounded-lg p-6"
            >
              <div className="text-4xl font-bold text-[#00D9FF]">{stat.value}</div>
              <div className="text-gray-300 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Características del <span className="text-[#00D9FF]">Simulador</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#00D9FF]/30 rounded-lg p-6 hover:border-[#00FF88] transition-colors group"
            >
              <feature.icon className="h-12 w-12 text-[#00D9FF] mb-4 group-hover:text-[#00FF88] transition-colors" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7 Levels Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Los <span className="text-[#00D9FF]">7 Niveles</span> del Simulador
        </h2>
        <div className="space-y-4">
          {[
            { level: 1, title: "Diagnóstico Inteligente", desc: "IA analiza tus necesidades y genera perfil de riesgo" },
            { level: 2, title: "Constructor de Planos", desc: "Diseña en 2D/3D con herramientas profesionales" },
            { level: 3, title: "Mercado de Tecnologías", desc: "Catálogo completo con Triple Barrera" },
            { level: 4, title: "Simulador de Amenazas", desc: "Misiones gamificadas contra intrusos, incendios y más" },
            { level: 5, title: "Panel Colmena Digital", desc: "Dashboard centralizado de monitoreo 24/7" },
            { level: 6, title: "Presupuesto y Financiamiento", desc: "Cotización instantánea con opciones de leasing" },
            { level: 7, title: "Comunidad y Logros", desc: "Sistema de puntos, rankings y achievements" }
          ].map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-[#00D9FF]/30 rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-[#00D9FF] flex items-center justify-center text-[#0A1F44] font-bold text-xl">
                  {level.level}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{level.title}</h3>
                  <p className="text-gray-300">{level.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#00D9FF] to-[#00FF88] rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">
            ¿Listo para Proteger tu Espacio?
          </h2>
          <p className="text-xl text-[#0A1F44] mb-8">
            Comienza a diseñar tu sistema de seguridad personalizado hoy mismo
          </p>
          <Link 
            href="/simulator" 
            className="px-12 py-4 rounded-lg bg-[#0A1F44] text-white font-bold text-lg hover:bg-[#0d2654] transition-colors shadow-lg inline-block"
          >
            Acceder al Simulador →
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00D9FF]/20 bg-[#0A1F44]/50 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 Colmena Digital Simulator. Powered by Tecnoprotec & Centinela Chile</p>
          <div className="mt-4 space-x-4">
            <a href="https://tecnoprotec.cl/" className="hover:text-[#00D9FF] transition-colors">Tecnoprotec</a>
            <a href="https://centinelachile.cl/" className="hover:text-[#00D9FF] transition-colors">Centinela Chile</a>
            <a href="https://marcelovergaraburgos.cl/" className="hover:text-[#00D9FF] transition-colors">Marcelo Vergara</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
