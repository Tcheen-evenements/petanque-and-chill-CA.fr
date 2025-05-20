'use client';

import Header from '@/components/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Contenu principal */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-12 text-center">
              Comment ça marche ? 🎯
            </h1>

            <div className="space-y-8">
              {/* Déroulement */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-[#00808b] mb-6">Le tournoi qui va vous faire vibrer ! 🎉</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#00808b] pl-4">
                    <h3 className="font-semibold text-lg mb-2">1. Formez votre dream team 🤝</h3>
                    <p className="text-gray-600">Formez votre équipe de 2 ou 3 joueurs et inscrivez-vous ! Que vous soyez pointeur de précision ou tireur d&apos;élite, c&apos;est le moment de briller. Les équipes seront regroupées par site pour plus de convivialité entre collègues.</p>
                  </div>
                  <div className="border-l-4 border-[#00808b] pl-4">
                    <h3 className="font-semibold text-lg mb-2">2. À vous de jouer ! ⭐</h3>
                    <p className="text-gray-600">Une fois les poules constituées, organisez vos matchs à votre rythme. Profitez de la pause déjeuner ou d&apos;un moment après le travail pour défier vos collègues dans une ambiance décontractée.</p>
                  </div>
                  <div className="border-l-4 border-[#00808b] pl-4">
                    <h3 className="font-semibold text-lg mb-2">3. La grande finale approche 🏆</h3>
                    <p className="text-gray-600">Les meilleures équipes de chaque site se retrouveront pour des matchs épiques ! Qui remportera le titre de champions du Crédit Agricole ?</p>
                  </div>
                </div>
              </div>

              {/* Règles des matchs */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-[#00808b] mb-6">Comment ça marche ? 🤔</h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00808b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Objectif : 9 points pour la victoire avec un point d’écart (mais le plaisir de jouer est infini 😉)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00808b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>On vous fournit les boules indoor &quot;La Mariole&quot; - pas besoin de ramener les vôtres !</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00808b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3 jours pour organiser votre match - trouvez le moment qui vous convient le mieux !</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#00808b] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Partagez votre victoire sur le site (ou votre défaite avec fair-play 🤝)</span>
                  </li>
                </ul>
              </div>

              {/* Suivi du tournoi */}
              <div className="bg-gray-50 rounded-2xl p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">On reste connectés ! 📱</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">Comment ça se passe ?</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                    <li>On vous envoie un petit email pour programmer vos matchs</li>
                    <li>Un petit rappel si vous oubliez (ça arrive aux meilleurs 😊)</li>
                    <li>Le classement est mis à jour en temps réel - suivez votre progression !</li>
                    <li>Restez à l&apos;affût des derniers résultats et des performances de vos collègues</li>
                  </ul>
                </div>
              </div>

              {/* Boutons d&apos;action */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                <Link
                  href="/inscription"
                  className="inline-block bg-[#00808b] text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-[#006c7f] focus:outline-none focus:ring-2 focus:ring-[#00808b] focus:ring-offset-2 transform transition-all hover:scale-[1.02] hover:shadow-lg text-center"
                >
                  Je relève le défi ! 💪
                </Link>
                <Link
                  href="/classement"
                  className="inline-block bg-white border-2 border-[#00808b] text-[#00808b] py-4 px-8 rounded-xl text-lg font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#00808b] focus:ring-offset-2 transform transition-all hover:scale-[1.02] hover:shadow-lg text-center"
                >
                  Voir le classement 🏆
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

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
    </div>
  );
}
