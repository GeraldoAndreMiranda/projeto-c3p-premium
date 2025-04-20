import Link from 'next/link';
import { BarChart2, Clock, CheckCircle } from 'lucide-react';

interface Projeto {
  nome: string;
  status: string;
  rota: string;
  nivelRota: string;
  progresso: number;
}

export default function Projetos() {
  const projetos: Projeto[] = [
    { 
      nome: 'TBTM | Ciclo 21 Dias', 
      status: 'Em andamento', 
      rota: '/projetos/tbtm-ciclo-21-dias',
      nivelRota: '/nivel-1',
      progresso: 75
    },
    { 
      nome: 'App Cartilha Prompts', 
      status: 'Planejado', 
      rota: '/projetos/app-cartilha-prompts',
      nivelRota: '/nivel-2',
      progresso: 25
    },
    { 
      nome: 'App Relatórios Técnicos', 
      status: 'Em desenvolvimento', 
      rota: '/projetos/app-relatorios-tecnicos',
      nivelRota: '/nivel-3',
      progresso: 50
    },
    { 
      nome: 'Organização MDTEC', 
      status: 'Migração iniciada', 
      rota: '/projetos/organizacao-mdtec',
      nivelRota: '/nivel-4',
      progresso: 30
    },
    { 
      nome: 'Alinhamento Bombas SCI', 
      status: 'Em análise', 
      rota: '/projetos/alinhamento-bombas-sci',
      nivelRota: '/nivel-5',
      progresso: 15
    },
    { 
      nome: 'App Homem & Máquina', 
      status: 'Em desenvolvimento', 
      rota: '/projetos/app-homem-maquina',
      nivelRota: '/nivel-6',
      progresso: 60
    },
    { 
      nome: 'Gestão Financeira', 
      status: 'Planejado', 
      rota: '/projetos/gestao-financeira',
      nivelRota: '/nivel-7',
      progresso: 10
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Painel de Projetos</h1>
        <p className="text-lg text-gray-600">
          Ciclo de 21 dias para integração entre consciência humana e disciplina digital
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <div 
            key={projeto.rota} 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">{projeto.nome}</h2>
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>

              <div className="flex items-center space-x-2 mb-4">
                {projeto.status === 'Em andamento' ? (
                  <Clock className="h-5 w-5 text-yellow-500" />
                ) : projeto.status === 'Concluído' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <div className="h-5 w-5 rounded-full bg-gray-200" />
                )}
                <span className="text-sm text-gray-600">{projeto.status}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">Progresso</span>
                  <span className="text-sm font-medium text-gray-900">{projeto.progresso}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${projeto.progresso}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Link 
                  href={projeto.nivelRota}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver conteúdo →
                </Link>
                <Link 
                  href={projeto.rota}
                  className="text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                  Ver detalhes →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}