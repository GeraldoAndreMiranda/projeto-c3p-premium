'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

interface Anotacao {
  id: string;
  conteudo: string;
  tipo: 'estoicismo' | 'energia';
  criadoEm: any;
}

export default function Sabedoria() {
  const [anotacaoEstoicismo, setAnotacaoEstoicismo] = useState('');
  const [anotacaoEnergia, setAnotacaoEnergia] = useState('');
  const [anotacoes, setAnotacoes] = useState<Anotacao[]>([]);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    carregarAnotacoes();
  }, []);

  const carregarAnotacoes = async () => {
    try {
      const q = query(collection(db, 'anotacoes-sabedoria'), orderBy('criadoEm', 'desc'));
      const snapshot = await getDocs(q);
      const dados = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Anotacao[];
      setAnotacoes(dados);
    } catch (erro) {
      console.error('Erro ao carregar anotações:', erro);
    }
  };

  const salvarAnotacao = async (tipo: 'estoicismo' | 'energia') => {
    setSalvando(true);
    try {
      const conteudo = tipo === 'estoicismo' ? anotacaoEstoicismo : anotacaoEnergia;
      
      await addDoc(collection(db, 'anotacoes-sabedoria'), {
        conteudo,
        tipo,
        criadoEm: Timestamp.now()
      });

      await carregarAnotacoes();
      
      if (tipo === 'estoicismo') {
        setAnotacaoEstoicismo('');
      } else {
        setAnotacaoEnergia('');
      }
    } catch (erro) {
      console.error('Erro ao salvar anotação:', erro);
    }
    setSalvando(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Link 
          href="/"
          className="inline-block mb-8 text-blue-600 hover:text-blue-800"
        >
          ← Voltar ao Painel
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">📚 Sabedoria e Disciplina</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card Estoicismo */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🧠 Estoicismo e a Guerra Contra Si Mesmo
            </h2>
            <p className="text-gray-600 mb-4">
              Fonte: Prof. Dr. Dennys Xavier<br />
              "Dominar o mundo é fácil. Difícil é dominar a si mesmo."
            </p>

            <div className="mb-6">
              <textarea
                value={anotacaoEstoicismo}
                onChange={(e) => setAnotacaoEstoicismo(e.target.value)}
                placeholder="Registre suas reflexões sobre Estoicismo..."
                className="w-full p-3 border rounded-lg mb-2"
                rows={4}
              />
              <button
                onClick={() => salvarAnotacao('estoicismo')}
                disabled={salvando}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                {salvando ? 'Salvando...' : 'Salvar Reflexão'}
              </button>
            </div>

            <div className="space-y-4">
              {anotacoes
                .filter(a => a.tipo === 'estoicismo')
                .map((anotacao) => (
                  <div key={anotacao.id} className="border-t pt-4">
                    <p className="text-gray-800">{anotacao.conteudo}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(anotacao.criadoEm?.seconds * 1000).toLocaleString()}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Card Energia */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🔥 Energia Vital e Autocontrole
            </h2>
            <p className="text-gray-600 mb-4">
              Tema: Autodomínio e canalização de energia<br />
              "Transmutar é usar o fogo da alma para criar, não para consumir."
            </p>

            <div className="mb-6">
              <textarea
                value={anotacaoEnergia}
                onChange={(e) => setAnotacaoEnergia(e.target.value)}
                placeholder="Registre suas reflexões sobre Energia Vital..."
                className="w-full p-3 border rounded-lg mb-2"
                rows={4}
              />
              <button
                onClick={() => salvarAnotacao('energia')}
                disabled={salvando}
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition"
              >
                {salvando ? 'Salvando...' : 'Salvar Reflexão'}
              </button>
            </div>

            <div className="space-y-4">
              {anotacoes
                .filter(a => a.tipo === 'energia')
                .map((anotacao) => (
                  <div key={anotacao.id} className="border-t pt-4">
                    <p className="text-gray-800">{anotacao.conteudo}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(anotacao.criadoEm?.seconds * 1000).toLocaleString()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}