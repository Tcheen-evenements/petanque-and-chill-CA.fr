'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Match {
  id: string;
  team1: string;
  team2: string;
  date: string | null;
  time: string | null;
  score1: number | null;
  score2: number | null;
  status: 'pending' | 'scheduled' | 'completed';
}

export default function AireSurAdourMatchsPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);
  const [score1, setScore1] = useState<string>('');
  const [score2, setScore2] = useState<string>('');

  useEffect(() => {
    const mockMatches: Match[] = [
      {
        id: 'a1',
        team1: 'Les Adourables',
        team2: 'Les Tireurs du Marsan',
        date: '2025-06-18',
        time: '14:00',
        score1: 13,
        score2: 11,
        status: 'completed'
      },
      {
        id: 'a2',
        team1: 'Les Landais',
        team2: 'Les Pointeurs Gascons',
        date: '2025-06-18',
        time: '16:00',
        score1: 13,
        score2: 9,
        status: 'completed'
      },
      {
        id: 'a3',
        team1: 'Les Adourables',
        team2: 'Les Landais',
        date: '2025-06-25',
        time: '14:00',
        score1: 13,
        score2: 8,
        status: 'completed'
      },
      {
        id: 'a4',
        team1: 'Les Tireurs du Marsan',
        team2: 'Les Pointeurs Gascons',
        date: '2025-06-25',
        time: '16:00',
        score1: 13,
        score2: 6,
        status: 'completed'
      },
      {
        id: 'a5',
        team1: 'Les Adourables',
        team2: 'Les Pointeurs Gascons',
        date: '2025-07-02',
        time: '14:00',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'a6',
        team1: 'Les Tireurs du Marsan',
        team2: 'Les Landais',
        date: '2025-07-02',
        time: '16:00',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'a7',
        team1: 'Demi-finale 1',
        team2: 'À déterminer',
        date: '2025-07-09',
        time: '14:00',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'a8',
        team1: 'Demi-finale 2',
        team2: 'À déterminer',
        date: '2025-07-09',
        time: '16:00',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'a9',
        team1: 'Finale',
        team2: 'À déterminer',
        date: '2025-07-16',
        time: '15:00',
        score1: null,
        score2: null,
        status: 'scheduled'
      }
    ];
    setMatches(mockMatches);
  }, []);

  const handleScoreSubmit = (matchId: string) => {
    const score1Num = parseInt(score1);
    const score2Num = parseInt(score2);
    
    if (isNaN(score1Num) || isNaN(score2Num)) {
      alert('Veuillez entrer des scores valides');
      return;
    }

    if (score1Num < 0 || score2Num < 0) {
      alert('Les scores ne peuvent pas être négatifs');
      return;
    }

    if (score1Num !== 13 && score2Num !== 13) {
      alert('Un des scores doit être égal à 13');
      return;
    }

    if (score1Num === 13 && score2Num === 13) {
      alert('Les deux équipes ne peuvent pas avoir 13 points');
      return;
    }

    setMatches(matches.map(match => {
      if (match.id === matchId) {
        return {
          ...match,
          score1: score1Num,
          score2: score2Num,
          status: 'completed' as const
        };
      }
      return match;
    }));

    setSelectedMatch(null);
    setScore1('');
    setScore2('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#00808b] mb-6">
            Matchs de L&apos;Aire sur l&apos;Adour
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/matchs" className="text-[#00808b] hover:text-[#006d77]">
              Tous les sites
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/matchs/bacalan" className="text-[#00808b] hover:text-[#006d77]">
              Bacalan
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/matchs/aire-sur-adour" className="text-[#00808b] font-bold">
              L&apos;Aire sur l&apos;Adour
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/matchs/agen" className="text-[#00808b] hover:text-[#006d77]">
              Agen
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    match.status === 'completed' 
                      ? 'bg-green-100 text-green-800'
                      : match.status === 'scheduled'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {match.status === 'completed'
                      ? '🎉 Terminé'
                      : match.status === 'scheduled'
                      ? '📅 Programmé'
                      : '⏳ En attente'}
                  </span>
                  {match.date && (
                    <span className="text-sm text-gray-500">
                      {new Date(match.date).toLocaleDateString('fr-FR')} {match.time && `à ${match.time}`}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{match.team1}</span>
                    <span className="text-2xl font-bold">
                      {match.score1 !== null ? match.score1 : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{match.team2}</span>
                    <span className="text-2xl font-bold">
                      {match.score2 !== null ? match.score2 : '-'}
                    </span>
                  </div>
                </div>

                {match.status === 'scheduled' && (
                  <button
                    onClick={() => setSelectedMatch(match)}
                    className="mt-6 w-full bg-[#00808b] text-white py-2 px-4 rounded-lg hover:bg-[#006d77] transition-colors"
                  >
                    Saisir les scores
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal de saisie des scores */}
        {selectedMatch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Saisir les scores</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {selectedMatch.team1}
                  </label>
                  <input
                    type="number"
                    value={score1}
                    onChange={(e) => setScore1(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#00808b] focus:border-[#00808b]"
                    min="0"
                    max="13"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {selectedMatch.team2}
                  </label>
                  <input
                    type="number"
                    value={score2}
                    onChange={(e) => setScore2(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#00808b] focus:border-[#00808b]"
                    min="0"
                    max="13"
                  />
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => handleScoreSubmit(selectedMatch.id)}
                  className="flex-1 bg-[#00808b] text-white py-2 px-4 rounded-lg hover:bg-[#006d77] transition-colors"
                >
                  Valider
                </button>
                <button
                  onClick={() => {
                    setSelectedMatch(null);
                    setScore1('');
                    setScore2('');
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
