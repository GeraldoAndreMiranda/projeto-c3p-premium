import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nivel3() {
  const conteudos = [
    {
      titulo: "O Poder do Agora – Eckhart Tolle (Audiolivro)",
      link: "https://www.youtube.com/watch?v=tRA7h7NnSlI",
    },
    {
      titulo: "Como viver o presente – Monja Coen (Entrevista)",
      link: "https://www.youtube.com/watch?v=QTwaFejv8OI",
    },
    {
      titulo: "Nossa mente divagante – Regina Giannetti (Podcast)",
      link: "https://open.spotify.com/episode/6ByieQ8mN0wmpNbjV7kA2G",
    },
  ];

  const [insight, setInsight] = useState("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("insight-nivel-3");
      if (saved) setInsight(saved);
    }
  }, []);

  const handleInsightChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInsight(newValue);
    if (typeof window !== 'undefined') {
      localStorage.setItem("insight-nivel-3", newValue);
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

        <h1 className="text-3xl font-bold mb-4">3. O Que Importa é o Agora</h1>
        <p className="mb-6 text-gray-700">
          Desenvolvendo presença, foco e libertação da ansiedade.
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