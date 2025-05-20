import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm border-b border-[#00808b]/20 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded">
              <Image
                src="/images/ca-logo-aquitaine.svg"
                alt="Crédit Agricole Aquitaine"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </Link>
          <nav className="flex space-x-6">
            <Link href="/comment-ca-marche" className="text-[#00808b] font-medium hover:text-[#006d77]">
              Comment ça marche ?
            </Link>
            <Link href="/classement" className="text-[#00808b] font-medium hover:text-[#006d77]">
              Classement
            </Link>
            <Link href="/matchs" className="text-[#00808b] font-medium hover:text-[#006d77]">
              Matchs
            </Link>
            <Link href="/inscription" className="text-[#00808b] font-medium hover:text-[#006d77]">
              Inscription
            </Link>
            <Link href="/contact" className="text-[#00808b] font-medium hover:text-[#006d77]">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
