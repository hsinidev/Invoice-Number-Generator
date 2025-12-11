import React, { useState, useEffect, useCallback } from 'react';
import {
  generateSequential,
  generateDateBased,
  generateRandom,
  getSequenceNumber,
  getDateBasedSequence,
  resetSequence
} from '../utils/numberGenerator';

type GenerationType = 'sequential' | 'date-based' | 'random';

const InvoiceGeneratorTool: React.FC = () => {
  const [prefix, setPrefix] = useState<string>('INV-');
  const [generationType, setGenerationType] = useState<GenerationType>('sequential');
  const [generatedNumber, setGeneratedNumber] = useState<string>('');
  const [currentSequence, setCurrentSequence] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  const updateCurrentSequence = useCallback(() => {
    if(generationType === 'sequential') {
      setCurrentSequence(getSequenceNumber());
    } else if (generationType === 'date-based') {
      setCurrentSequence(getDateBasedSequence());
    }
  }, [generationType]);

  useEffect(() => {
    updateCurrentSequence();
  }, [generationType, updateCurrentSequence]);

  const handleGenerate = () => {
    let newNumber = '';
    if (generationType === 'sequential') {
      newNumber = generateSequential(prefix, currentSequence);
    } else if (generationType === 'date-based') {
      newNumber = generateDateBased(prefix);
    } else if (generationType === 'random') {
      newNumber = generateRandom(prefix);
    }
    setGeneratedNumber(newNumber);
    updateCurrentSequence(); // Refresh sequence display after generation
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the sequential number to 1? This cannot be undone.')) {
        const newSeq = resetSequence();
        if (generationType === 'sequential') {
            setCurrentSequence(newSeq);
        }
        setGeneratedNumber('');
    }
  };

  const handleCopy = () => {
    if (generatedNumber) {
      navigator.clipboard.writeText(generatedNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const getTypeDescription = () => {
    switch (generationType) {
      case 'sequential': return 'Increments a persistent counter (e.g., INV-001, INV-002).';
      case 'date-based': return 'Uses the current date and a daily counter (e.g., INV-231027-001).';
      case 'random': return 'Creates a unique, non-sequential alphanumeric code.';
    }
  };

  const renderCurrentSequence = () => {
    if (generationType === 'random') return null;
    
    return (
        <div className="text-sm text-gray-400">
            Current {generationType === 'sequential' ? 'Sequence' : 'Daily Sequence'}: <span className="font-bold text-gray-200">{currentSequence}</span>
        </div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-left">
      <div className="space-y-6">
        {/* Prefix Input */}
        <div>
          <label htmlFor="prefix" className="block text-sm font-medium text-gray-300 mb-2">
            Prefix
          </label>
          <input
            type="text"
            id="prefix"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-600 rounded-md shadow-sm px-4 py-2 text-white focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
            placeholder="e.g., INV-"
          />
        </div>

        {/* Generation Type */}
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Generation Type</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['sequential', 'date-based', 'random'] as GenerationType[]).map(type => (
                    <button
                        key={type}
                        onClick={() => setGenerationType(type)}
                        className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500 ${
                            generationType === type ? 'bg-pink-600 text-white shadow-lg' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                        }`}
                    >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 h-4">{getTypeDescription()}</p>
        </div>

        {/* Sequence Info & Reset */}
        <div className="flex justify-between items-center h-8">
            {renderCurrentSequence()}
            {generationType === 'sequential' && (
                <button
                    onClick={handleReset}
                    className="text-xs text-gray-400 hover:text-red-400 transition-colors"
                >
                    Reset Sequence
                </button>
            )}
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
        >
          Generate Next Invoice Number
        </button>

        {/* Output Display */}
        {generatedNumber && (
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between animate-fade-in">
            <span className="text-xl md:text-2xl font-mono text-green-400 tracking-wider break-all pr-4">
              {generatedNumber}
            </span>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-md flex items-center transition-colors flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </div>
       <style>{`
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default InvoiceGeneratorTool;