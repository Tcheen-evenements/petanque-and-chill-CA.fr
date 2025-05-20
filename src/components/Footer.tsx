import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-[#00808b] p-2 rounded">
            <Image
              src="/images/ca-logo.svg"
              alt="Crédit Agricole"
              width={100}
              height={32}
              className="h-6 w-auto brightness-0 invert"
            />
          </div>
          <div className="text-gray-500 text-sm text-center">
            © 2025 Crédit Agricole. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
