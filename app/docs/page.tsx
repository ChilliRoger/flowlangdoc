import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">FlowLang Documentation</h1>
      <p className="text-xl text-gray-600 mb-12 leading-relaxed">
        Welcome to the FlowLang documentation. Learn how to use FlowLang for workflow automation, data processing, and API orchestration.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <a href="/docs/installation" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Installation</h3>
          <p className="text-gray-600">Get FlowLang up and running on your system in minutes.</p>
        </a>

        <a href="/docs/quickstart" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Quick Start</h3>
          <p className="text-gray-600">Write your first FlowLang script in under 5 minutes.</p>
        </a>

        <a href="/docs/language" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Language Spec</h3>
          <p className="text-gray-600">Comprehensive guide to FlowLang syntax and features.</p>
        </a>

        <a href="/docs/functions" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Built-in Functions</h3>
          <p className="text-gray-600">Complete reference of all built-in functions.</p>
        </a>

        <a href="/docs/examples" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Examples</h3>
          <p className="text-gray-600">Real-world code examples and use cases.</p>
        </a>

        <a href="/docs/api" className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all group">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
            <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">API Reference</h3>
          <p className="text-gray-600">Complete API documentation and CLI usage.</p>
        </a>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Help</h2>
        <p className="text-gray-700 mb-6">
          If you need help or have questions, check out these resources:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <a href="https://github.com/ChilliRoger/flowlang/issues" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                GitHub Issues
              </a>
              <p className="text-sm text-gray-600">Report bugs or request features</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <a href="https://github.com/ChilliRoger/flowlang/discussions" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                GitHub Discussions
              </a>
              <p className="text-sm text-gray-600">Ask questions and share ideas</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <a href="https://pypi.org/project/flowlang-script/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700">
                PyPI Package
              </a>
              <p className="text-sm text-gray-600">View package details and release history</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
