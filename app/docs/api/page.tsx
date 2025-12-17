export default function APIPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>API Reference</h1>

      <h2>Command Line Interface</h2>
      <pre><code>flow run &lt;script.flow&gt;</code></pre>

      <p><strong>Arguments:</strong></p>
      <ul>
        <li><code>&lt;script.flow&gt;</code>: Path to the FlowLang script file</li>
      </ul>

      <p><strong>Examples:</strong></p>
      <pre><code>{`flow run examples/basic.flow
flow run workflow.flow`}</code></pre>

      <h2>Programmatic Usage</h2>
      <p>FlowLang can be embedded in Python applications:</p>
      <pre><code>{`from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

# Your FlowLang-Script code
code = """
let x = 10
let y = 20
print x + y
"""

# Execute
tokens = Lexer(code).tokens
ast = Parser(tokens).parse()
Interpreter().eval(ast)`}</code></pre>

      <h2>Custom Built-in Functions</h2>
      <p>Extend FlowLang with custom built-in functions:</p>
      <pre><code>{`from flowlang.interpreter import Interpreter

interp = Interpreter()

# Add custom function
interp.builtins['custom_func'] = lambda args: args[0] * 2

# Execute code that uses it
code = "print custom_func(21)"
tokens = Lexer(code).tokens
ast = Parser(tokens).parse()
interp.eval(ast)`}</code></pre>

      <h2>Error Handling</h2>
      <p>FlowLang provides error messages for common issues:</p>
      <ul>
        <li>Syntax errors during parsing</li>
        <li>Undefined variables or functions</li>
        <li>Type errors in operations</li>
        <li>HTTP request failures</li>
        <li>File I/O errors</li>
      </ul>

      <h2>Module Structure</h2>
      <p>FlowLang consists of three main components:</p>
      <ul>
        <li><strong>Lexer:</strong> Tokenizes the source code</li>
        <li><strong>Parser:</strong> Builds an abstract syntax tree (AST)</li>
        <li><strong>Interpreter:</strong> Evaluates the AST and executes the code</li>
      </ul>

      <h2>Return Values</h2>
      <p>When used programmatically, the interpreter returns the result of the last evaluated expression. This can be captured and used in your Python code.</p>

      <h2>Environment Variables</h2>
      <p>FlowLang scripts run in an isolated environment with access to:</p>
      <ul>
        <li>Local file system (via <code>read_file</code> and <code>write_file</code>)</li>
        <li>Network access (via HTTP functions)</li>
        <li>Standard input/output (via <code>input</code> and <code>print</code>)</li>
      </ul>
    </div>
  );
}
