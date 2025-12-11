import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import InvoiceGeneratorTool from './components/InvoiceGeneratorTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="text-center max-w-4xl mx-auto mb-10">
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-gray-400 mb-6 animate-fade-in-down leading-tight drop-shadow-lg">
            Professional Invoice <br/> Number Generator
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-blue-100/80 mb-8 animate-fade-in-up font-medium leading-relaxed">
            Create tax-compliant, sequential, or random invoice numbers instantly. <br className="hidden md:block"/> Secure, client-side, and free forever.
            </p>
        </div>
        
        <div className="w-full max-w-2xl animate-scale-in relative z-20">
             <InvoiceGeneratorTool />
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16 relative z-10">
        <SeoArticle />
      </div>

       <style>{`
        @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; }
        .animate-scale-in { animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
      `}</style>
    </ThemeLayout>
  );
};

export default App;