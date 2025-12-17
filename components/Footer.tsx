export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <h3 className="font-semibold text-gray-900">FlowLang</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              A lightweight interpreted programming language for workflow automation and API orchestration.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs" className="text-gray-600 hover:text-blue-600 transition-colors">Getting Started</a></li>
              <li><a href="/docs/quickstart" className="text-gray-600 hover:text-blue-600 transition-colors">Quick Start</a></li>
              <li><a href="/docs/language" className="text-gray-600 hover:text-blue-600 transition-colors">Language Spec</a></li>
              <li><a href="/docs/api" className="text-gray-600 hover:text-blue-600 transition-colors">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs/examples" className="text-gray-600 hover:text-blue-600 transition-colors">Examples</a></li>
              <li><a href="/docs/use-cases" className="text-gray-600 hover:text-blue-600 transition-colors">Use Cases</a></li>
              <li><a href="/docs/integration" className="text-gray-600 hover:text-blue-600 transition-colors">Integration</a></li>
              <li><a href="https://pypi.org/project/flowlang-script/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">PyPI Package</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/ChilliRoger/flowlang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">GitHub</a></li>
              <li><a href="https://github.com/ChilliRoger/flowlang/issues" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">Issues</a></li>
              <li><a href="https://github.com/ChilliRoger/flowlang/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">Discussions</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2025 FlowLang. Licensed under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
