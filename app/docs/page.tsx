import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">FlowLang Documentation</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Welcome to the FlowLang documentation. FlowLang is a lightweight interpreted programming language designed for workflow automation, data processing, and API orchestration.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design Philosophy</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Simplicity First:</strong> Minimal syntax that's easy to learn and read</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Zero Dependencies:</strong> Built entirely on Python's standard library</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Practical:</strong> Focused on real-world automation tasks</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Readable:</strong> Code that serves as its own documentation</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Native HTTP request capabilities (http_get, http_post)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Built-in file I/O operations</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>First-class functions with return values</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Control flow structures (if, while)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Rich set of built-in utility functions</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Automatic JSON parsing for API responses</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>String escape sequence support</span>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/docs/installation" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
            <p className="text-gray-600">Learn how to install FlowLang on your system</p>
          </Link>
          <Link href="/docs/quickstart" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Start</h3>
            <p className="text-gray-600">Get up and running with your first FlowLang script</p>
          </Link>
          <Link href="/docs/language" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Language Specification</h3>
            <p className="text-gray-600">Comprehensive guide to FlowLang syntax and features</p>
          </Link>
          <Link href="/docs/functions" className="block p-6 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Built-in Functions</h3>
            <p className="text-gray-600">Reference for all built-in functions</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Resources</h2>
        <div className="space-y-3">
          <Link href="/docs/examples" className="block text-blue-600 hover:text-blue-700">
            Usage Examples →
          </Link>
          <Link href="/docs/api" className="block text-blue-600 hover:text-blue-700">
            API Reference →
          </Link>
          <Link href="/docs/use-cases" className="block text-blue-600 hover:text-blue-700">
            Use Cases →
          </Link>
          <Link href="/docs/integration" className="block text-blue-600 hover:text-blue-700">
            Integration Guide →
          </Link>
        </div>
      </section>
    </div>
  );
}
