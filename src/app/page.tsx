'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#00808b]/5 via-white to-[#00808b]/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Tournoi de<br />Pétanque
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Créez votre équipe et participez au tournoi de pétanque du Crédit Agricole !
                  </p>
                  <Link 
                    href="/inscription" 
                    className="inline-block bg-[#00808b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#006d77] transition-colors"
                  >
                    Je m'inscris
                  </Link>
                </div>
                <div className="flex-1 relative flex justify-center">
                  <div className="relative w-[400px] h-[400px]">
                    <Image
                      src="/images/petanque.svg"
                      alt="Illustration pétanque"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Lots */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Des lots qui vont faire des heureux ! 🎁</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* 1er Prix */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥇</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Team Building</h3>
                  <p className="text-gray-600 text-center">Faites gagner une après-midi team building à votre équipe ! Un moment privilégié pour renforcer vos liens.</p>
                </div>
              </div>
              {/* 2ème Prix */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥈</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Cocktail Déjeunatoire</h3>
                  <p className="text-gray-600 text-center">Offrez un délicieux moment à vos collègues avec la livraison d'un cocktail déjeunatoire gourmand !</p>
                </div>
              </div>
              {/* 3ème Prix */}
              <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🥉</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Petit-déjeuner Gourmand</h3>
                  <p className="text-gray-600 text-center">Démarrez la journée en beauté avec vos collègues autour d'un savoureux petit-déjeuner livré !</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Programme */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Informations du tournoi */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Le tournoi</h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-600">
                      Participez à notre grand tournoi de pétanque qui se déroulera tout au long de l'été ! 
                      Organisez vos matchs à votre convenance et profitez de moments conviviaux entre collègues 
                      dans une ambiance détendue et festive.
                    </p>
                  </div>
                </div>

                {/* Activités */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Au programme</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-[#00808b]">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Tournoi de pétanque par équipes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-[#00808b]">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Convivialité et bonne humeur</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 text-[#00808b]">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-600">Remise des prix</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-16 text-center">
                <Link 
                  href="/inscription" 
                  className="inline-block bg-[#00808b] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#006d77] transition-colors"
                >
                  Je m'inscris au tournoi
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Image
                  src="/images/ca-logo.svg"
                  alt="Crédit Agricole"
                  width={120}
                  height={40}
                  className="h-8 w-auto mb-4"
                />
                <p className="text-gray-400">
                  Tournoi de pétanque organisé par le Crédit Agricole
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/programme" className="text-gray-400 hover:text-[#00808b]">
                      Programme
                    </Link>
                  </li>
                  <li>
                    <Link href="/inscription" className="text-gray-400 hover:text-[#00808b]">
                      Inscription
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-[#00808b]">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Au programme</h3>
                <div className="flex space-x-4">
                  <div className="text-[#00808b]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                  <div className="text-[#00808b]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-[#00808b]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
