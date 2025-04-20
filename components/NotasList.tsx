"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

interface Nota {
  id: string;
  titulo: string;
  descricao: string;
  link: string;
  imagem?: string;
  criadoEm: any;
}

export default function NotasList() {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarNotas = async () => {
      const q = query(collection(db, "notas"), orderBy("criadoEm", "desc"));
      const snapshot = await getDocs(q);
      const lista: Nota[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Nota[];

      setNotas(lista);
      setCarregando(false);
    };

    carregarNotas();
  }, []);

  if (carregando) {
    return <p className="text-center text-sm mt-4">🔄 Carregando notas...</p>;
  }

  if (notas.length === 0) {
    return <p className="text-center text-sm mt-4 text-gray-500">Nenhuma nota cadastrada ainda.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-6">
      <h2 className="text-xl font-bold text-blue-900 text-center">📚 Minhas Notas</h2>
      {notas.map((nota) => (
        <div key={nota.id} className="bg-white p-4 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800">{nota.titulo}</h3>
          <p className="text-gray-600 mb-2">{nota.descricao}</p>
          {nota.link && (
            <a
              href={nota.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              🔗 Acessar link
            </a>
          )}
          {nota.imagem && (
            <div className="mt-2">
              <img src={nota.imagem} alt="Imagem da nota" className="rounded-lg max-h-64" />
            </div>
          )}
          <p className="mt-2 text-xs text-gray-400">Registrado: {new Date(nota.criadoEm?.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}