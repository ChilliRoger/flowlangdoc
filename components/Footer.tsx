export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">FlowLang</h3>
            <p className="text-sm text-gray-600">
              A lightweight interpreted programming language for workflow automation and API orchestration.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs" className="text-gray-600 hover:text-gray-900">Getting Started</a></li>
              <li><a href="/docs/quickstart" className="text-gray-600 hover:text-gray-900">Quick Start</a></li>
              <li><a href="/docs/language" className="text-gray-600 hover:text-gray-900">Language Spec</a></li>
              <li><a href="/docs/api" className="text-gray-600 hover:text-gray-900">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs/examples" className="text-gray-600 hover:text-gray-900">Examples</a></li>
              <li><a href="/docs/use-cases" className="text-gray-600 hover:text-gray-900">Use Cases</a></li>
              <li><a href="/docs/integration" className="text-gray-600 hover:text-gray-900">Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/ChilliRoger/flowlang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a></li>
              <li><a href="https://github.com/ChilliRoger/flowlang/issues" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Issues</a></li>
              <li><a href="https://github.com/ChilliRoger/flowlang/discussions" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Discussions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © 2025 FlowLang. Licensed under the MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
}
