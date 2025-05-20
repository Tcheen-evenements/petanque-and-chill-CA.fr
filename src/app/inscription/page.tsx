'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function InscriptionPage() {
  const [formData, setFormData] = useState({
    teamName: '',
    player1: {
      firstName: '',
      lastName: '',
      email: '',
    },
    player2: {
      firstName: '',
      lastName: '',
      email: '',
    },
    site: 'bacalan',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [player, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [player]: {
          ...prev[player as 'player1' | 'player2'],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec logo CA */}
      <Header />
      
      {/* Hero section */}
      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Image de fond */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/terrain-petanque.jpg"
            alt="Terrain de pétanque"
            fill
            className="object-cover opacity-100"
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent" />
        </div>

        {/* Effets décoratifs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00808b]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#00808b]/10 rounded-full blur-3xl" />

        {/* Contenu */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00808b] to-[#006d77] drop-shadow-lg">
                  Prêts à relever le défi ?
                </span>
                <span className="block text-[#00808b] mt-2 relative drop-shadow-lg">
                  <span className="relative inline-block">
                    Tournoi de Pétanque CA
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#00808b] to-transparent rounded-full"></div>
                  </span>
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-800 mb-12 max-w-2xl mx-auto backdrop-blur-sm bg-white/80 rounded-xl p-6 shadow-lg">
              Formez votre dream team et participez à ce tournoi exceptionnel ! 
              Des lots incroyables sont à gagner pour les meilleures équipes ! 🏆
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#00808b]/10 rounded-full group-hover:animate-ping" />
                    <svg className="w-12 h-12 mx-auto relative z-10 text-[#00808b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-800 font-medium transform transition-transform group-hover:scale-105 backdrop-blur-sm bg-white/80 rounded-lg py-1 px-3 shadow-md">Boules fournies 🎯</p>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#00808b]/10 rounded-full group-hover:animate-ping" />
                    <svg className="w-12 h-12 mx-auto relative z-10 text-[#00808b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-800 font-medium transform transition-transform group-hover:scale-105 backdrop-blur-sm bg-white/80 rounded-lg py-1 px-3 shadow-md">Tournoi en équipe 🤝</p>
              </div>
              <div className="text-center group">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:rotate-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#00808b]/10 rounded-full group-hover:animate-ping" />
                    <svg className="w-12 h-12 mx-auto relative z-10 text-[#00808b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-800 font-medium transform transition-transform group-hover:scale-105 backdrop-blur-sm bg-white/80 rounded-lg py-1 px-3 shadow-md">Superbes lots 🎁</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00808b]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#00808b]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-[#00808b]/10 rounded blur-sm transform -skew-x-12" />
                  <span className="relative">Inscription au tournoi</span>
                </span>
              </h2>

              <main className="container mx-auto px-4 pt-24 pb-12">
                <div className="max-w-2xl mx-auto">
                  <h1 className="text-4xl font-bold text-center text-[#00808b] mb-6">
                    Inscription au tournoi
                  </h1>
                  <p className="text-center text-gray-600 mb-8">
                    Inscrivez votre équipe pour participer au tournoi de pétanque du Crédit Agricole.<br />
                    Les inscriptions sont ouvertes jusqu&apos;au 15 juin 2025.<br />
                    <span className="font-medium">Début du tournoi : 17 juin 2025</span>
                  </p>
                </div>
              </main>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Nom de l'équipe */}
                <div className="bg-gray-50 rounded-xl p-6 transform hover:scale-[1.01] transition-transform">
                  <label htmlFor="teamName" className="block text-lg font-medium text-gray-700 mb-3">
                    Nom de l'équipe
                  </label>
                  <input
                    type="text"
                    id="teamName"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 text-lg transition-colors"
                    placeholder="Les Champions de la Boule"
                  />
                </div>

                {/* Site géographique */}
                <div className="bg-gray-50 rounded-xl p-6 transform hover:scale-[1.01] transition-transform">
                  <label htmlFor="site" className="block text-lg font-medium text-gray-700 mb-3">
                    Site
                  </label>
                  <select
                    id="site"
                    name="site"
                    value={formData.site}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 text-lg transition-colors"
                  >
                    <option value="bacalan">Bacalan</option>
                    <option value="aire-sur-adour">L'Aire sur l'Adour</option>
                    <option value="agen">Agen</option>
                  </select>
                </div>

                {/* Joueurs */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Joueur 1 */}
                  <div className="bg-gray-50 rounded-xl p-6 transform hover:scale-[1.01] transition-transform">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Joueur 1</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="player1.firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="player1.firstName"
                          name="player1.firstName"
                          value={formData.player1.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="player1.lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="player1.lastName"
                          name="player1.lastName"
                          value={formData.player1.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="player1.email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="player1.email"
                          name="player1.email"
                          value={formData.player1.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Joueur 2 */}
                  <div className="bg-gray-50 rounded-xl p-6 transform hover:scale-[1.01] transition-transform">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Joueur 2</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="player2.firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="player2.firstName"
                          name="player2.firstName"
                          value={formData.player2.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="player2.lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="player2.lastName"
                          name="player2.lastName"
                          value={formData.player2.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="player2.email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="player2.email"
                          name="player2.email"
                          value={formData.player2.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-lg border-gray-200 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bouton de soumission */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#00808b] text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-[#006d77] focus:outline-none focus:ring-2 focus:ring-[#00808b] focus:ring-offset-2 transform transition-all hover:scale-[1.02] hover:shadow-lg"
                  >
                    S'inscrire au tournoi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white p-2 rounded inline-block">
                <Image
                  src="/images/ca-logo-aquitaine.svg"
                  alt="Crédit Agricole Aquitaine"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mt-4">
                Tournoi de pétanque organisé par le Crédit Agricole
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/comment-ca-marche" className="text-gray-400 hover:text-white">
                    Comment ça marche ?
                  </Link>
                </li>
                <li>
                  <Link href="/classement" className="text-gray-400 hover:text-white">
                    Classement
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
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
    </div>
  );
}
