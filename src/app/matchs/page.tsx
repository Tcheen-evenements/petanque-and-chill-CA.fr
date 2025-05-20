'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Match {
  id: string;
  team1: string;
  team2: string;
  site: string;
  date: string | null;
  score1: number | null;
  score2: number | null;
  status: 'pending' | 'scheduled' | 'completed';
}

export default function MatchsPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const mockMatches: Match[] = [
      {
        id: 'b1',
        team1: 'Les Bacalanais',
        team2: 'Les Quais',
        site: 'Bacalan',
        date: '2025-06-20',
        score1: 13,
        score2: 7,
        status: 'completed'
      },
      {
        id: 'a1',
        team1: 'Les Adourables',
        team2: 'Les Tireurs du Marsan',
        site: "L'Aire sur l'Adour",
        date: '2025-06-18',
        score1: 13,
        score2: 11,
        status: 'completed'
      },
      {
        id: 'ag1',
        team1: 'Les Agenais',
        team2: 'Les Pruniers',
        site: 'Agen',
        date: '2025-06-19',
        score1: 13,
        score2: 8,
        status: 'completed'
      },
      {
        id: 'a2',
        team1: 'Les Landais',
        team2: 'Les Adourables',
        site: "L'Aire sur l'Adour",
        date: '2025-06-27',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'b2',
        team1: 'Team Chartrons',
        team2: 'Les Pointeurs du Port',
        site: 'Bacalan',
        date: '2025-06-25',
        score1: null,
        score2: null,
        status: 'scheduled'
      },
      {
        id: 'ag2',
        team1: 'Team Garonne',
        team2: 'Les Agenais',
        site: 'Agen',
        date: '2025-06-26',
        score1: null,
        score2: null,
        status: 'scheduled'
      }
    ];
    setMatches(mockMatches);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#00808b] mb-6">
            Tous les matchs
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/matchs" className="text-[#00808b] font-bold">
              Tous les sites
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/matchs/bacalan" className="text-[#00808b] hover:text-[#006d77]">
              Bacalan
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/matchs/aire-sur-adour" className="text-[#00808b] hover:text-[#006d77]">
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
                      {new Date(match.date).toLocaleDateString('fr-FR')}
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

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Site : {match.site}
                  </span>
                  <Link
                    href={`/matchs/${match.site.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                    className="text-[#00808b] text-sm hover:text-[#006d77]"
                  >
                    Voir tous les matchs →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
