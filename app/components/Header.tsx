'use client';

import Link from 'next/link';
import { Home, BarChart2, BookOpen, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Ciclo de Progresso</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href="/nivel-1" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <BookOpen className="h-5 w-5" />
              <span>Ciclo 21 Dias</span>
            </Link>
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contato</span>
            </a>
          </nav>

          <div className="flex items-center">
            <span className="text-sm text-gray-600">Bem-vindo, Geraldo Andre</span>
          </div>
        </div>
      </div>
    </header>
  );
}