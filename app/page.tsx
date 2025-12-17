import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-24">
        <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
          Available on PyPI
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
          FlowLang
        </h1>
        <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          A lightweight interpreted programming language designed for workflow automation, data processing, and API orchestration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/docs"
            className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link
            href="/docs/quickstart"
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
          >
            Quick Start
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
          <a href="https://pypi.org/project/flowlang-script/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            PyPI Package
          </a>
          <span className="text-gray-300">•</span>
          <a href="https://github.com/ChilliRoger/flowlang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            GitHub Repository
          </a>
        </div>
      </section>

      {/* Code Example */}
      <section className="max-w-4xl mx-auto mb-24">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400 font-mono">example.flow</span>
          </div>
          <pre className="text-sm bg-transparent border-0 p-0 overflow-x-auto"><code className="text-gray-100 font-mono">{`func fetch_and_save(id) {
  let url = "https://api.example.com/data/" + str(id)
  let data = http_get(url)
  write_file("data_" + str(id) + ".txt", str(data))
  return "Success"
}

let result = fetch_and_save(1)
print result`}</code></pre>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Simple Syntax
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Minimal, readable syntax that's easy to learn. Code that serves as its own documentation.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Native HTTP Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built-in HTTP functions for GET and POST requests with automatic JSON parsing.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Zero Dependencies
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built entirely on Python's standard library. No external dependencies required.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              First-Class Functions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Functions with parameters and return values for clean, modular code.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              File I/O Operations
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Built-in functions for reading and writing files with simple, intuitive syntax.
            </p>
          </div>
          <div className="p-8 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Control Flow
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Standard control structures including if statements and while loops.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Perfect For
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">→</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">API Testing & Validation</h4>
              <p className="text-gray-600">Quick API testing without the overhead of larger frameworks.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚙</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Pipeline Automation</h4>
              <p className="text-gray-600">Create ETL workflows with minimal code.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏱</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Scheduled Tasks</h4>
              <p className="text-gray-600">Perfect for cron jobs and periodic data collection.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔗</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Microservice Orchestration</h4>
              <p className="text-gray-600">Coordinate calls across multiple microservices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Quick Preview */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          Get Started in Seconds
        </h2>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-left shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm text-gray-400 font-mono">terminal</span>
          </div>
          <pre className="text-sm bg-transparent border-0 p-0"><code className="text-gray-100 font-mono">{`# Install via pip
pip install flowlang-script

# Run your first script
flow run hello.flow`}</code></pre>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs/installation"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View full installation guide →
          </Link>
          <a
            href="https://pypi.org/project/flowlang-script/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View on PyPI →
          </a>
        </div>
      </section>
    </div>
  );
}

