'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Etapa {
  titulo: string;
  concluida: boolean;
}

interface Projeto {
  nome: string;
  status: string;
  etapas: Etapa[];
}

const projetosMock: Record<string, Projeto> = {
  "tbtm-ciclo-21-dias": {
    nome: "TBTM | Ciclo 21 Dias",
    status: "Em andamento",
    etapas: [
      { titulo: "Dia 1 – Clareza e Intenção", concluida: true },
      { titulo: "Dia 2 – Vibração e Frequência", concluida: true },
      { titulo: "Dia 3 – Escolha Consciente", concluida: false },
      { titulo: "Dia 4 – Foco e Ação", concluida: false },
    ],
  },
  "app-cartilha-prompts": {
    nome: "App Cartilha de Prompts",
    status: "Planejado",
    etapas: [
      { titulo: "Estrutura base criada", concluida: true },
      { titulo: "Inserção de imagens", concluida: false },
      { titulo: "Botão com ação", concluida: false },
      { titulo: "Publicação na Vercel", concluida: false },
    ],
  },
};

export default function ProjetoDetalhes({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [projeto, setProjeto] = useState<Projeto | null>(null);

  useEffect(() => {
    const projetoData = projetosMock[params.id as keyof typeof projetosMock];
    if (projetoData) {
      // Load saved progress from localStorage
      const savedEtapas = localStorage.getItem(`projeto-${params.id}`);
      if (savedEtapas) {
        setProjeto({
          ...projetoData,
          etapas: JSON.parse(savedEtapas)
        });
      } else {
        setProjeto(projetoData);
      }
    }
  }, [params.id]);

  if (!projeto) return <p className="p-8 text-center">Projeto não encontrado.</p>;

  const etapasTotais = projeto.etapas.length;
  const etapasConcluidas = projeto.etapas.filter(etapa => etapa.concluida).length;
  const progresso = Math.round((etapasConcluidas / etapasTotais) * 100);

  const toggleEtapa = (index: number) => {
    const novasEtapas = projeto.etapas.map((etapa, i) => 
      i === index ? { ...etapa, concluida: !etapa.concluida } : etapa
    );
    
    const novoProjeto = { ...projeto, etapas: novasEtapas };
    setProjeto(novoProjeto);
    localStorage.setItem(`projeto-${params.id}`, JSON.stringify(novasEtapas));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">{projeto.nome}</h1>
      <p className="mb-4 text-sm text-gray-600">
        Status: <span className="font-medium">{projeto.status}</span>
      </p>

      <div className="mb-8">
        <p className="text-sm text-gray-600 mb-2">Progresso: {progresso}%</p>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all duration-500"
            style={{ width: `${progresso}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Etapas:</h2>
      <ul className="space-y-3">
        {projeto.etapas.map((etapa, i) => (
          <li 
            key={i} 
            className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
          >
            <input
              type="checkbox"
              checked={etapa.concluida}
              onChange={() => toggleEtapa(i)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className={`${etapa.concluida ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              {etapa.titulo}
            </span>
          </li>
        ))}
      </ul>

      <button 
        className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        onClick={() => router.push('/')}
      >
        ← Voltar ao Painel
      </button>
    </div>
  );
}