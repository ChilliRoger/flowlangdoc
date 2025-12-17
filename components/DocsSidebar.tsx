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
    <aside className="w-64 border-r border-gray-200 bg-gray-50 p-6 overflow-y-auto">
      <nav className="space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-white text-gray-900 border border-gray-200'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
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
