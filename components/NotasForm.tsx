"use client";
import { useState } from "react";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function NotasForm() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const salvarNota = async () => {
    setSalvando(true);
    try {
      let urlImagem = "";

      if (imagem) {
        const storageRef = ref(storage, `imagens/${imagem.name}`);
        await uploadBytes(storageRef, imagem);
        urlImagem = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, "notas"), {
        titulo,
        descricao,
        link,
        imagem: urlImagem,
        criadoEm: Timestamp.now(),
      });

      setMensagem("✅ Nota salva com sucesso!");
      setTitulo("");
      setDescricao("");
      setLink("");
      setImagem(null);
    } catch (error) {
      console.error("Erro ao salvar nota:", error);
      setMensagem("❌ Ocorreu um erro ao salvar.");
    }
    setSalvando(false);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4 mt-6">
      <h2 className="text-xl font-bold text-blue-900">📝 Nova Nota</h2>

      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="w-full px-4 py-2 border rounded"
        rows={4}
      />

      <input
        type="url"
        placeholder="Link externo"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full px-4 py-2 border rounded"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagem(e.target.files?.[0] || null)}
        className="w-full"
      />

      <button
        onClick={salvarNota}
        disabled={salvando}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {salvando ? "Salvando..." : "💾 Salvar Nota"}
      </button>

      {mensagem && (
        <p className="text-center text-sm mt-2 text-green-600">{mensagem}</p>
      )}
    </div>
  );
}