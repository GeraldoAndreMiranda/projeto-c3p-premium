'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nivel1() {
  const conteudos = [
    {
      titulo: "A sensibilidade humana como guia para educar chatbots",
      link: "https://open.spotify.com/episode/1Ns5KPzmKAsOyz9NYoVg59",
    },
    {
      titulo: "Inteligência Artificial vs. Atitude Humana (SXSW 2023)",
      link: "https://open.spotify.com/episode/1puglRNFzMReTipr4zRrkn",
    },
    {
      titulo: "A Inteligência Artificial para a Humanidade (TEDx)",
      link: "https://www.youtube.com/watch?v=4yllNOGP_Ps",
    },
  ];

  const [insight, setInsight] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("insight-nivel-1");
      if (saved) setInsight(saved);
    }
  }, []);

  const handleInsightChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInsight(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem("insight-nivel-1", newValue);
    }
  };

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-6 text-blue-600 hover:text-blue-800"
        >
          ← Voltar para o início
        </Link>

        <h1 className="text-3xl font-bold mb-4">1. Interação Homem-Máquina</h1>
        <p className="mb-6 text-gray-700">
          Unindo a sensibilidade e astúcia humana com a disciplina e lógica da IA.
        </p>

        <ul className="space-y-4 mb-8">
          {conteudos.map((item, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {item.titulo}
                </a>
                <input type="checkbox" className="ml-4 w-5 h-5" />
              </div>
            </li>
          ))}
        </ul>

        <div>
          <label className="block font-medium text-gray-800 mb-2">
            Insight pessoal do dia:
          </label>
          <textarea
            rows={5}
            value={insight}
            onChange={handleInsightChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow"
            placeholder="Anote aqui sua reflexão após consumir os conteúdos..."
          />
          <p className="text-sm text-gray-500 mt-2">Salvo automaticamente no navegador ✅</p>
        </div>
      </div>
    </main>
  );
}