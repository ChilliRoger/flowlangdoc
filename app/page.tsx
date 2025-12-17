import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          FlowLang
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A lightweight interpreted programming language designed for workflow automation, data processing, and API orchestration.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs/quickstart"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Quick Start
          </Link>
        </div>
      </section>

      {/* Code Example */}
      <section className="max-w-3xl mx-auto mb-20">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <pre className="text-sm bg-transparent border-0 p-0"><code>{`func fetch_and_save(id) {
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
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Simple Syntax
            </h3>
            <p className="text-gray-600">
              Minimal, readable syntax that's easy to learn. Code that serves as its own documentation.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Native HTTP Support
            </h3>
            <p className="text-gray-600">
              Built-in HTTP functions for GET and POST requests with automatic JSON parsing.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Zero Dependencies
            </h3>
            <p className="text-gray-600">
              Built entirely on Python's standard library. No external dependencies required.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              First-Class Functions
            </h3>
            <p className="text-gray-600">
              Functions with parameters and return values for clean, modular code.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              File I/O Operations
            </h3>
            <p className="text-gray-600">
              Built-in functions for reading and writing files with simple, intuitive syntax.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Control Flow
            </h3>
            <p className="text-gray-600">
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
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Get Started in Seconds
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-left">
          <pre className="text-sm bg-transparent border-0 p-0"><code>{`# Install via pip
pip install flowlang-script

# Run your first script
flow run hello.flow`}</code></pre>
        </div>
        <div className="mt-8">
          <Link
            href="/docs/installation"
            className="text-blue-600 font-medium hover:text-blue-700"
          >
            View full installation guide →
          </Link>
        </div>
      </section>
    </div>
  );
}

