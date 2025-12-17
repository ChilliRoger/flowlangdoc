export default function QuickStartPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Quick Start</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hello World</h2>
        <p className="text-gray-700 mb-4">
          Create a file named <code>hello.flow</code>:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4"><code>print "Hello, World!"</code></pre>
        <p className="text-gray-700 mb-4">Run it:</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4"><code>flow run hello.flow</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Basic Operations</h2>
        <p className="text-gray-700 mb-4">
          FlowLang supports basic arithmetic and variables:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4"><code>{`let x = 10
let y = 20
let sum = x + y
print sum`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">HTTP Request Example</h2>
        <p className="text-gray-700 mb-4">
          One of FlowLang's powerful features is built-in HTTP support:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4"><code>{`let response = http_get("https://api.github.com")
print response`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Working with Functions</h2>
        <p className="text-gray-700 mb-4">
          Define and use functions in FlowLang:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4"><code>{`func greet(name) {
  return "Hello, " + name
}

let message = greet("FlowLang")
print message`}</code></pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Control Flow</h2>
        <p className="text-gray-700 mb-4">
          Use if statements and while loops for control flow:
        </p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4"><code>{`let count = 5
while count > 0 {
  print count
  let count = count - 1
}

let age = 18
if age >= 18 {
  print "Adult"
}`}</code></pre>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps</h2>
        <p className="text-gray-700 mb-4">
          Explore the full language specification and built-in functions to unlock the full power of FlowLang.
        </p>
        <div className="flex gap-4">
          <a href="/docs/language" className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            Language Specification →
          </a>
          <a href="/docs/functions" className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
            Built-in Functions →
          </a>
        </div>
      </section>
    </div>
  );
}
