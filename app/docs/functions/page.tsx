export default function FunctionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>Built-in Functions</h1>

      <h2>I/O Functions</h2>

      <h3>print(value)</h3>
      <p>Outputs a value to the console.</p>
      <pre><code>{`print "Hello"
print 42`}</code></pre>

      <h3>input(prompt)</h3>
      <p>Reads user input from the console.</p>
      <pre><code>{`let name = input("Enter your name: ")
print name`}</code></pre>

      <h2>Type Conversion Functions</h2>

      <h3>str(value)</h3>
      <p>Converts a value to a string.</p>
      <pre><code>{`let num = 42
let text = str(num)`}</code></pre>

      <h3>int(value)</h3>
      <p>Converts a value to an integer.</p>
      <pre><code>{`let text = "123"
let num = int(text)`}</code></pre>

      <h3>type(value)</h3>
      <p>Returns the type name of a value as a string.</p>
      <pre><code>{`print type(42)        # Prints: int
print type("hello")   # Prints: str`}</code></pre>

      <h2>Utility Functions</h2>

      <h3>len(value)</h3>
      <p>Returns the length of a string or list.</p>
      <pre><code>{`let text = "FlowLang-Script"
print len(text)  # Prints: 15`}</code></pre>

      <h3>range(start, end)</h3>
      <p>Creates a list of integers from start (inclusive) to end (exclusive).</p>
      <pre><code>{`let numbers = range(1, 5)
print numbers  # Prints: [1, 2, 3, 4]`}</code></pre>

      <h2>HTTP Functions</h2>

      <h3>http_get(url)</h3>
      <p>Performs an HTTP GET request and returns the response.</p>
      <pre><code>{`let data = http_get("https://jsonplaceholder.typicode.com/users/1")
print data`}</code></pre>

      <p><strong>Features:</strong></p>
      <ul>
        <li>Automatic JSON parsing when possible</li>
        <li>Returns dictionary for JSON responses</li>
        <li>Returns string for plain text responses</li>
        <li>Error handling with error messages</li>
      </ul>

      <h3>http_post(url, data)</h3>
      <p>Performs an HTTP POST request with JSON data.</p>
      <pre><code>{`let response = http_post("https://api.example.com/data", {"key": "value"})
print response`}</code></pre>

      <h2>File I/O Functions</h2>

      <h3>read_file(path)</h3>
      <p>Reads and returns the contents of a file.</p>
      <pre><code>{`let content = read_file("data.txt")
print content`}</code></pre>

      <h3>write_file(path, content)</h3>
      <p>Writes content to a file.</p>
      <pre><code>{`let result = write_file("output.txt", "Hello, World!")
print result  # Prints: Written to output.txt`}</code></pre>

      <h2>Function Reference Table</h2>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>print(value)</code></td>
            <td>I/O</td>
            <td>Output to console</td>
          </tr>
          <tr>
            <td><code>input(prompt)</code></td>
            <td>I/O</td>
            <td>Read user input</td>
          </tr>
          <tr>
            <td><code>str(value)</code></td>
            <td>Conversion</td>
            <td>Convert to string</td>
          </tr>
          <tr>
            <td><code>int(value)</code></td>
            <td>Conversion</td>
            <td>Convert to integer</td>
          </tr>
          <tr>
            <td><code>type(value)</code></td>
            <td>Utility</td>
            <td>Get type name</td>
          </tr>
          <tr>
            <td><code>len(value)</code></td>
            <td>Utility</td>
            <td>Get length</td>
          </tr>
          <tr>
            <td><code>range(start, end)</code></td>
            <td>Utility</td>
            <td>Create number list</td>
          </tr>
          <tr>
            <td><code>http_get(url)</code></td>
            <td>HTTP</td>
            <td>GET request</td>
          </tr>
          <tr>
            <td><code>http_post(url, data)</code></td>
            <td>HTTP</td>
            <td>POST request</td>
          </tr>
          <tr>
            <td><code>read_file(path)</code></td>
            <td>File I/O</td>
            <td>Read file</td>
          </tr>
          <tr>
            <td><code>write_file(path, content)</code></td>
            <td>File I/O</td>
            <td>Write file</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
