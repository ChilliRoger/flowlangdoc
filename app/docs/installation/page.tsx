export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Installation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">From PyPI (Recommended)</h2>
        <p className="text-gray-700 mb-4">
          The easiest way to install FlowLang is via pip from the Python Package Index.
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"><code>pip install flowlang-script</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">From Source</h2>
        <p className="text-gray-700 mb-4">
          You can also install FlowLang from the source code repository.
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"><code>{`git clone https://github.com/ChilliRoger/flowlang.git
cd flowlang
pip install -e .`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verify Installation</h2>
        <p className="text-gray-700 mb-4">
          After installation, verify that FlowLang is installed correctly by running:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"><code>flow run --help</code></pre>
        <p className="text-gray-700">
          You should see the help message for the FlowLang command-line interface.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Requirements</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Python 3.7 or higher</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>No external dependencies (uses only Python standard library)</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
        <p className="text-gray-700 mb-4">
          Now that you have FlowLang installed, you're ready to write your first script!
        </p>
        <a href="/docs/quickstart" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Continue to Quick Start →
        </a>
      </section>
    </div>
  );
}
