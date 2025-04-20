export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            MDTEC | Powered by TBTM · Versão 1.0 – {new Date().getFullYear()}
          </p>
          <div className="flex space-x-6">
            <a 
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}