'use client';

import React from 'react';
import Link from 'next/link';

export default function Nivel7() {
  const conteudos = [
    {
      titulo: "As 7 Leis Espirituais do Sucesso – Deepak Chopra",
      link: "https://www.youtube.com/watch?v=osHfZZj5pYA",
    },
    {
      titulo: "O Alquimista – Paulo Coelho (Audiolivro)",
      link: "https://www.youtube.com/watch?v=-7vsi2WL9Lw",
    },
    {
      titulo: "Qual é a tua obra? – Mário Sérgio Cortella",
      link: "https://www.youtube.com/watch?v=FCzaiM02_KQ",
    },
  ];

  return (
    <main className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-6 text-blue-600 hover:text-blue-800"
        >
          ← Voltar para o início
        </Link>

        <h1 className="text-3xl font-bold mb-4">7. Realização Sagrada</h1>
        <p className="mb-6 text-gray-700">
          Executar com consciência, deixar legado, agir com alma.
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
            className="w-full border border-gray-300 p-3 rounded-md shadow"
            placeholder="Anote aqui sua reflexão após consumir os conteúdos..."
          />
        </div>
      </div>
    </main>
  );
}