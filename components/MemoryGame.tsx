import React, { useState, useEffect } from 'react';
import { Brain, Code2, Gamepad2, Rocket, Sparkles, Trophy, RefreshCw } from 'lucide-react';

interface Card {
  id: number;
  icon: React.ReactNode;
  isFlipped: boolean;
  isMatched: boolean;
  name: string;
}

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isWon, setIsWon] = useState(false);

  const initialIcons = [
    { name: 'Logic', icon: <Brain className="w-8 h-8 text-purple-400" /> },
    { name: 'Code', icon: <Code2 className="w-8 h-8 text-blue-400" /> },
    { name: 'Game', icon: <Gamepad2 className="w-8 h-8 text-pink-400" /> },
    { name: 'Ship', icon: <Rocket className="w-8 h-8 text-orange-400" /> },
  ];

  const shuffleCards = () => {
    const duplicated = [...initialIcons, ...initialIcons];
    const shuffled = duplicated
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({
        id: index,
        icon: item.icon,
        name: item.name,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setIsWon(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      checkForMatch(newFlipped, newCards);
    }
  };

  const checkForMatch = (flipped: number[], currentCards: Card[]) => {
    const [first, second] = flipped;
    if (currentCards[first].name === currentCards[second].name) {
      currentCards[first].isMatched = true;
      currentCards[second].isMatched = true;
      setCards([...currentCards]);
      setFlippedCards([]);
      setMatches(m => {
        const newMatches = m + 1;
        if (newMatches === initialIcons.length) setIsWon(true);
        return newMatches;
      });
    } else {
      setTimeout(() => {
        currentCards[first].isFlipped = false;
        currentCards[second].isFlipped = false;
        setCards([...currentCards]);
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl max-w-sm mx-auto shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
      <div className="flex justify-between items-center mb-4 text-white font-space">
        <div>
          <h3 className="text-lg font-bold text-game-accent flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Skill Match
          </h3>
          <p className="text-xs text-gray-400">Match the concepts!</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Moves: {moves}</div>
        </div>
      </div>

      {isWon ? (
        <div className="h-64 flex flex-col items-center justify-center space-y-4 animate-pulse-glow">
          <Trophy className="w-16 h-16 text-yellow-400 animate-bounce" />
          <div className="text-center">
            <p className="text-xl font-bold text-white">Level Complete!</p>
            <p className="text-sm text-gray-300">Logic verified.</p>
          </div>
          <button 
            onClick={shuffleCards}
            className="bg-game-primary px-4 py-2 rounded-full text-white font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" /> Replay
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 h-64">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`aspect-square rounded-xl flex items-center justify-center transition-all duration-300 transform ${
                card.isFlipped || card.isMatched 
                  ? 'bg-slate-800 rotate-y-180' 
                  : 'bg-gradient-to-br from-indigo-600 to-purple-600 hover:scale-105'
              }`}
              disabled={card.isFlipped || card.isMatched}
            >
              <div className={`transition-all duration-300 ${card.isFlipped || card.isMatched ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                {card.icon}
              </div>
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 text-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-space">Demonstrating React State Logic</p>
      </div>
    </div>
  );
};

export default MemoryGame;
