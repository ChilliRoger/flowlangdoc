export default function LanguagePage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>Language Specification</h1>

      <h2>Variables</h2>
      <p>Variables are declared using the <code>let</code> keyword and are dynamically typed.</p>
      <pre><code>{`let name = "FlowLang-Script"
let version = 1
let pi = 3.14`}</code></pre>

      <h2>Data Types</h2>
      <ul>
        <li><strong>Integer:</strong> Whole numbers (<code>42</code>, <code>-10</code>)</li>
        <li><strong>String:</strong> Text enclosed in double quotes (<code>"hello"</code>)</li>
        <li><strong>List:</strong> Returned by built-in functions like <code>range()</code></li>
        <li><strong>Dictionary:</strong> Returned by JSON parsing in HTTP responses</li>
      </ul>

      <h2>Operators</h2>

      <h3>Arithmetic Operators</h3>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>+</code></td>
            <td>Addition</td>
            <td><code>5 + 3</code> returns <code>8</code></td>
          </tr>
          <tr>
            <td><code>-</code></td>
            <td>Subtraction</td>
            <td><code>10 - 4</code> returns <code>6</code></td>
          </tr>
          <tr>
            <td><code>*</code></td>
            <td>Multiplication</td>
            <td><code>3 * 4</code> returns <code>12</code></td>
          </tr>
          <tr>
            <td><code>/</code></td>
            <td>Division</td>
            <td><code>15 / 3</code> returns <code>5</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Comparison Operators</h3>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>&lt;</code></td>
            <td>Less than</td>
            <td><code>5 &lt; 10</code> returns <code>true</code></td>
          </tr>
          <tr>
            <td><code>&gt;</code></td>
            <td>Greater than</td>
            <td><code>10 &gt; 5</code> returns <code>true</code></td>
          </tr>
          <tr>
            <td><code>&lt;=</code></td>
            <td>Less than or equal</td>
            <td><code>5 &lt;= 5</code> returns <code>true</code></td>
          </tr>
          <tr>
            <td><code>&gt;=</code></td>
            <td>Greater than or equal</td>
            <td><code>10 &gt;= 5</code> returns <code>true</code></td>
          </tr>
          <tr>
            <td><code>==</code></td>
            <td>Equal to</td>
            <td><code>5 == 5</code> returns <code>true</code></td>
          </tr>
          <tr>
            <td><code>!=</code></td>
            <td>Not equal to</td>
            <td><code>5 != 3</code> returns <code>true</code></td>
          </tr>
        </tbody>
      </table>

      <h2>Control Flow</h2>

      <h3>If Statements</h3>
      <pre><code>{`let age = 18
if age >= 18 {
  print "Adult"
}`}</code></pre>

      <h3>While Loops</h3>
      <pre><code>{`let count = 5
while count > 0 {
  print count
  let count = count - 1
}`}</code></pre>

      <h2>Functions</h2>
      <p>Functions are defined using the <code>func</code> keyword and support parameters and return values.</p>
      <pre><code>{`func add(a, b) {
  return a + b
}

let result = add(10, 20)
print result`}</code></pre>

      <h3>Function Scope</h3>
      <p>Functions have their own local scope. Variables passed as arguments are local to the function.</p>
      <pre><code>{`func increment(x) {
  let x = x + 1
  return x
}

let value = 5
let newValue = increment(value)
print newValue  # Prints 6
print value     # Prints 5 (unchanged)`}</code></pre>

      <h2>Comments</h2>
      <p>FlowLang currently does not support inline comments. Use descriptive variable and function names for self-documenting code.</p>
    </div>
  );
}
