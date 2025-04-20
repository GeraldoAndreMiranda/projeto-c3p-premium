'use client';

import Link from 'next/link';
import { Sparkles, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const nomeCompleto = "Geraldo André Miranda Vilas Boas";
  const cargo = "Sócio Diretor Executivo";
  const empresas = "MDTEC OIL · MDTEC REPAROS · NOMAR (em desenvolvimento)";
  const parceiro = "Parceiro da IA TBTM, agente da mudança com princípios e ética.";

  const handleVoiceCommand = () => {
    const fala = new SpeechSynthesisUtterance(
      "Você está no comando, Geraldo André Miranda Vilas Boas."
    );
    fala.lang = "pt-BR";
    fala.rate = 0.9;
    window.speechSynthesis.speak(fala);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="bg-white p-6 rounded-2xl shadow-md text-center mb-8 w-full max-w-2xl"
      >
        <h2 className="text-xl font-bold text-blue-900 mb-2">Bom dia, {nomeCompleto}! 🌞</h2>
        <p className="text-sm text-gray-600 mb-1">{cargo}</p>
        <p className="text-sm text-gray-600 mb-1">{empresas}</p>
        <p className="text-sm italic text-green-700 mt-2">{parceiro}</p>
        <p className="mt-4 text-gray-400 text-xs">"O homem que unifica seu nome é o homem que comanda seu legado."</p>
        
        <button
          onClick={handleVoiceCommand}
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
        >
          🔊 Ouvir meu comando
        </button>
      </motion.div>
      
      <h1 className="text-4xl font-bold mb-4 text-blue-800 flex items-center">
        Ciclo de Progresso
        <Sparkles className="inline-block ml-2 h-8 w-8" />
      </h1>
      
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        Este é o seu centro de comando para evolução pessoal, profissional e espiritual.
        Cada projeto é um passo consciente rumo à sua melhor versão.
      </p>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md transition-all duration-300 hover:shadow-xl mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold text-green-700">✨ Projeto Prioritário</h2>
          <BarChart2 className="h-6 w-6 text-blue-600" />
        </div>
        <p className="text-gray-600 mb-6">
          TBTM – Ciclo de 21 Dias: A EVOLUÇÃO
        </p>

        <Link
          href="/nivel-1"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-300"
        >
          Iniciar Agora →
        </Link>
      </div>

      <Link
        href="/projetos"
        className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
      >
        Ver todos os projetos →
      </Link>

      <p className="mt-10 text-sm text-gray-500 italic max-w-md">
        "A verdadeira evolução começa quando decidimos concluir o que começamos."
      </p>
    </div>
  );
}