'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

interface Team {
  name: string;
  site: string;
  matchesPlayed: number;
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
  points: number;
}

export default function RankingPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    const mockTeams: Team[] = [
      {
        name: 'Les Bacalanais',
        site: 'Bacalan',
        matchesPlayed: 2,
        wins: 2,
        losses: 0,
        pointsFor: 26,
        pointsAgainst: 14,
        points: 6
      },
      {
        name: 'Les Adourables',
        site: "L'Aire sur l'Adour",
        matchesPlayed: 2,
        wins: 2,
        losses: 0,
        pointsFor: 26,
        pointsAgainst: 15,
        points: 6
      },
      {
        name: 'Les Agenais',
        site: 'Agen',
        matchesPlayed: 2,
        wins: 2,
        losses: 0,
        pointsFor: 26,
        pointsAgainst: 15,
        points: 6
      },
      {
        name: 'Team Chartrons',
        site: 'Bacalan',
        matchesPlayed: 2,
        wins: 1,
        losses: 1,
        pointsFor: 20,
        pointsAgainst: 19,
        points: 3
      },
      {
        name: 'Les Tireurs du Marsan',
        site: "L'Aire sur l'Adour",
        matchesPlayed: 2,
        wins: 1,
        losses: 1,
        pointsFor: 24,
        pointsAgainst: 20,
        points: 3
      },
      {
        name: 'Team Garonne',
        site: 'Agen',
        matchesPlayed: 2,
        wins: 1,
        losses: 1,
        pointsFor: 23,
        pointsAgainst: 20,
        points: 3
      }
    ];
    setTeams(mockTeams);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center text-[#00808b] mb-6">
            Classement général
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/classement" className="text-[#00808b] font-bold">
              Tous les sites
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/classement/bacalan" className="text-[#00808b] hover:text-[#006d77]">
              Bacalan
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/classement/aire-sur-adour" className="text-[#00808b] hover:text-[#006d77]">
              L&apos;Aire sur l&apos;Adour
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/classement/agen" className="text-[#00808b] hover:text-[#006d77]">
              Agen
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Équipe</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Site</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">J</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">G</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">P</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PF</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PC</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Pts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teams.map((team, index) => (
                  <tr key={team.name} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {team.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link
                        href={`/classement/${team.site.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                        className="text-[#00808b] hover:text-[#006d77]"
                      >
                        {team.site}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {team.matchesPlayed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {team.wins}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {team.losses}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {team.pointsFor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {team.pointsAgainst}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#00808b] text-center">
                      {team.points}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Légende</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-sm text-gray-600">
            <div>J : Matchs joués</div>
            <div>G : Matchs gagnés</div>
            <div>P : Matchs perdus</div>
            <div>PF : Points marqués</div>
            <div>PC : Points encaissés</div>
            <div>Pts : Points au classement</div>
          </div>
        </div>
      </main>
    </div>
  );
}
