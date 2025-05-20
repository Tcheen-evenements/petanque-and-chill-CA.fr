import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed w-full top-0 bg-white/90 backdrop-blur-sm border-b border-[#00808b]/20 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <div className="bg-[#00808b] p-2 rounded">
              <Image
                src="/images/ca-logo.svg"
                alt="Crédit Agricole"
                width={100}
                height={32}
                className="h-6 w-auto brightness-0 invert"
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
