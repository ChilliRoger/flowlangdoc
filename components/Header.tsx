import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">FlowLang</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </Link>
            <Link href="/docs/quickstart" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Quick Start
            </Link>
            <Link href="/docs/examples" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Examples
            </Link>
            <Link href="/docs/api" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              API Reference
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ChilliRoger/flowlang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
