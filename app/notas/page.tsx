'use client';

import NotasForm from "@/components/NotasForm";
import NotasList from "@/components/NotasList";

export default function NotasPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📘 Painel C3P – Notas</h1>
      <NotasForm />
      <NotasList />
    </div>
  );
}