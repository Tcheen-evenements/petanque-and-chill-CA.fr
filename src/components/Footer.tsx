import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white p-2 rounded">
            <Image
              src="/images/ca-logo-aquitaine.svg"
              alt="Crédit Agricole Aquitaine"
              width={120}
              height={40}
              className="h-8 w-auto"
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
