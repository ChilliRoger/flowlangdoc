'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Overview', href: '/docs' },
  { name: 'Installation', href: '/docs/installation' },
  { name: 'Quick Start', href: '/docs/quickstart' },
  { name: 'Language Specification', href: '/docs/language' },
  { name: 'Built-in Functions', href: '/docs/functions' },
  { name: 'Examples', href: '/docs/examples' },
  { name: 'API Reference', href: '/docs/api' },
  { name: 'Use Cases', href: '/docs/use-cases' },
  { name: 'Integration', href: '/docs/integration' },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6 overflow-y-auto h-[calc(100vh-4rem)] sticky top-16">
      <nav className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600 pl-3'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
