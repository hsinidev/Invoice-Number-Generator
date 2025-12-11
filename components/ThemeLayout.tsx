import React, { useState, useCallback, ReactNode } from 'react';

// Modal Component defined within ThemeLayout to keep it self-contained
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-3xl text-gray-200 transform transition-all duration-300 ease-out scale-100 animate-modal-enter flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-800/50 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar prose prose-invert max-w-none">
          {children}
        </div>
        <div className="p-4 border-t border-gray-700 bg-gray-800/30 rounded-b-2xl flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold transition-colors">
                Close
            </button>
        </div>
      </div>
       <style>{`
        @keyframes modal-enter {
          0% { opacity: 0; transform: scale(0.95) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-enter { animation: modal-enter 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        /* Custom Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};


interface ThemeLayoutProps {
  children: React.ReactNode;
}

const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [modalContent, setModalContent] = useState<{ title: string; content: ReactNode } | null>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = useCallback((title: string, content: ReactNode) => {
    setModalContent({ title, content });
    setMobileMenuOpen(false); 
  }, []);

  const closeModal = useCallback(() => {
    setModalContent(null);
  }, []);
  
  // Comprehensive content for modals
  const navLinks = [
    { 
        name: 'About', 
        content: (
            <div className="space-y-4">
                <p>Welcome to <strong>Invoice Generator</strong>, your premier destination for professional, instant, and secure invoice number generation. In today's fast-paced digital economy, efficiency and compliance are paramount. We created this tool to solve a simple yet critical problem: the need for a reliable, gap-free, and compliant invoice numbering system without the bloat of expensive accounting software.</p>
                <p>Our mission is to empower freelancers, small businesses, and contractors with free tools that respect their privacy. Unlike other services that require sign-ups or store your sensitive financial data on remote servers, <strong>Invoice Generator</strong> operates entirely within your browser (Client-Side). This means your data never leaves your device.</p>
                <p>Visit our main website at <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">doodax.com</a> for more tools and resources.</p>
            </div>
        )
    },
    { 
        name: 'Contact', 
        content: (
            <div className="space-y-4">
                <p>We value your feedback and are here to assist you with any inquiries regarding our tools.</p>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-white mb-2">Get in Touch</h4>
                    <p className="mb-2"><strong>Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-pink-400 hover:underline">hsini.web@gmail.com</a></p>
                    <p><strong>Website:</strong> <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">doodax.com</a></p>
                    <p><strong>Developer:</strong> HSINI MOHAMED</p>
                </div>
                <p>For technical support, bug reports, or feature requests, please email us directly. We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
        )
    },
    { 
        name: 'Guide', 
        content: (
            <div className="space-y-4">
                <h4 className="text-lg font-bold text-white border-b border-gray-700 pb-2">User Guide</h4>
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                    <li className="pl-2"><strong className="text-white">Set Your Prefix:</strong> Enter a custom identifier (e.g., 'INV-', 'BILL-') to categorize your documents.</li>
                    <li className="pl-2"><strong className="text-white">Choose a Mode:</strong>
                        <ul className="list-disc list-inside pl-6 mt-1 space-y-1 text-sm">
                            <li><strong>Sequential:</strong> Best for standard accounting (1, 2, 3...).</li>
                            <li><strong>Date-Based:</strong> Best for high volume (20231027-001...).</li>
                            <li><strong>Random:</strong> Best for non-accounting reference IDs.</li>
                        </ul>
                    </li>
                    <li className="pl-2"><strong className="text-white">Generate:</strong> Click the "Generate" button. The tool calculates the next number based on your local history.</li>
                    <li className="pl-2"><strong className="text-white">Copy & Use:</strong> Use the "Copy" button to paste the number directly into your invoice template.</li>
                    <li className="pl-2"><strong className="text-white">Persistence:</strong> We use your browser's Local Storage to remember where you left off. You can close the tab and return later without losing your sequence.</li>
                </ol>
            </div>
        )
    },
    { 
        name: 'Privacy Policy', 
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p><strong>Last Updated: October 27, 2023</strong></p>
                <p>At Invoice Generator (accessible via doodax.com), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Invoice Generator and how we use it.</p>
                
                <h5 className="font-bold text-white text-base mt-4">1. Data Collection and Storage</h5>
                <p>This application operates as a <strong>Client-Side Application</strong>. We do not collect, transmit, or store any of the invoice numbers, prefixes, or usage data you generate on our servers. All data generation occurs locally within your web browser using JavaScript.</p>
                
                <h5 className="font-bold text-white text-base mt-4">2. Local Storage</h5>
                <p>To provide a persistent experience (remembering your last sequence number), this website uses your browser's "Local Storage" feature. This data resides solely on your device. You can clear this data at any time by clearing your browser cache.</p>
                
                <h5 className="font-bold text-white text-base mt-4">3. Log Files</h5>
                <p>Like many other websites, we may use standard log files that log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>
                
                <h5 className="font-bold text-white text-base mt-4">4. Third-Party Links</h5>
                <p>Our website may contain links to other websites. We are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
            </div>
        )
    },
    { 
        name: 'Terms of Service', 
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                 <p><strong>Last Updated: October 27, 2023</strong></p>
                 <p>By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                 
                 <h5 className="font-bold text-white text-base mt-4">1. Use License</h5>
                 <p>Permission is granted to use the Invoice Generator tool for personal or commercial invoicing purposes. This is the grant of a license, not a transfer of title.</p>
                 
                 <h5 className="font-bold text-white text-base mt-4">2. Disclaimer</h5>
                 <p>The materials on Invoice Generator's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                 <p>Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site. You are responsible for verifying the uniqueness and compliance of generated numbers with your local tax authorities.</p>
                 
                 <h5 className="font-bold text-white text-base mt-4">3. Limitations</h5>
                 <p>In no event shall Invoice Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Invoice Generator's website.</p>
            </div>
        )
    },
    { 
        name: 'DMCA', 
        content: (
            <div className="space-y-4">
                <p>We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement ("Infringement") of any person.</p>
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <a href="mailto:hsini.web@gmail.com" className="text-pink-400">hsini.web@gmail.com</a>.</p>
                <p>Please include a detailed description of the alleged Infringement.</p>
                <p>All content, design, and code on <strong>doodax.com</strong> is the intellectual property of HSINI MOHAMED unless otherwise stated.</p>
            </div>
        )
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-gray-200 overflow-x-hidden font-sans">
      {/* Immersive Galaxy Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Deep space base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-80"></div>
        
        {/* Nebula clouds */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-900/30 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-900/20 rounded-full blur-[80px] animate-pulse-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Stars Overlay */}
        <div className="stars"></div>
        <div className="stars2"></div>
      </div>

      <style>{`
        /* Star fields */
        .stars {
          width: 1px;
          height: 1px;
          background: transparent;
          box-shadow: 1744px 122px #FFF , 134px 1321px #FFF , 92px 859px #FFF, 1200px 200px #FFF, 500px 600px #FFF, 800px 900px #FFF, 100px 1000px #FFF, 1500px 500px #FFF, 300px 100px #FFF, 600px 1200px #FFF, 1000px 300px #FFF, 400px 800px #FFF, 1400px 1400px #FFF, 200px 200px #FFF, 1100px 1100px #FFF, 700px 400px #FFF, 1600px 700px #FFF;
          animation: animStar 50s linear infinite;
          opacity: 0.8;
        }
        .stars2 {
          width: 2px;
          height: 2px;
          background: transparent;
          box-shadow: 400px 400px #FFF , 900px 200px #FFF , 1200px 800px #FFF, 100px 1200px #FFF, 1600px 200px #FFF, 500px 1400px #FFF, 1300px 600px #FFF, 300px 900px #FFF, 800px 1100px #FFF;
          animation: animStar 100s linear infinite;
          opacity: 0.4;
        }
        
        @keyframes animStar {
          from { transform: translateY(0px); }
          to { transform: translateY(-2000px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="py-4 px-4 sm:px-8 bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-30 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">I</div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Invoice <span className="text-pink-500">Generator</span>
                </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map(link => (
                <button 
                  key={link.name} 
                  onClick={() => openModal(link.name, link.content)}
                  className="text-gray-300 hover:text-pink-400 hover:bg-white/5 px-3 py-1 rounded-md transition-all duration-200 text-sm font-medium"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-white/10 rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-xl rounded-xl p-4 border border-gray-700 animate-fade-in-down-sm shadow-2xl">
              <nav className="flex flex-col space-y-2">
                {navLinks.map(link => (
                  <button 
                    key={link.name} 
                    onClick={() => openModal(link.name, link.content)}
                    className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 text-left font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-8 bg-black/60 backdrop-blur-md mt-auto border-t border-white/5">
          <div className="container mx-auto text-center text-gray-400 text-sm flex flex-col items-center space-y-4">
             <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider text-gray-500">
                {navLinks.map(link => (
                    <button key={link.name} onClick={() => openModal(link.name, link.content)} className="hover:text-pink-400 transition-colors">
                        {link.name}
                    </button>
                ))}
             </div>
            <p className="opacity-75">
              &copy; {new Date().getFullYear()} Invoice Number Generator. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:text-yellow-200 transition-colors hover:scale-105 transform inline-block">HSINI MOHAMED</a>
            </p>
          </div>
        </footer>
      </div>
      
      {/* Modal */}
      <Modal 
        isOpen={modalContent !== null} 
        onClose={closeModal} 
        title={modalContent?.title || ''}
      >
        {modalContent?.content}
      </Modal>
      <style>{`
          @keyframes fade-in-down-sm {
              0% { opacity: 0; transform: translateY(-10px); }
              100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-down-sm { animation: fade-in-down-sm 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ThemeLayout;