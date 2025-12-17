export default function ExamplesPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>Usage Examples</h1>

      <h2>Example 1: Simple Calculator</h2>
      <pre><code>{`func calculate(a, b, operation) {
  if operation == "add" {
    return a + b
  }
  if operation == "subtract" {
    return a - b
  }
  if operation == "multiply" {
    return a * b
  }
  if operation == "divide" {
    return a / b
  }
  return 0
}

let result = calculate(10, 5, "add")
print result`}</code></pre>

      <h2>Example 2: API Data Fetching</h2>
      <pre><code>{`let user = http_get("https://jsonplaceholder.typicode.com/users/1")
let filename = "user_data.txt"
write_file(filename, str(user))
print "Data saved successfully"`}</code></pre>

      <h2>Example 3: Batch Processing</h2>
      <pre><code>{`func process_item(id) {
  let url = "https://jsonplaceholder.typicode.com/todos/" + str(id)
  let data = http_get(url)
  let filename = "item_" + str(id) + ".txt"
  write_file(filename, str(data))
  return "Processed item " + str(id)
}

let count = 1
while count <= 3 {
  let status = process_item(count)
  print status
  let count = count + 1
}`}</code></pre>

      <h2>Example 4: Data Transformation Pipeline</h2>
      <pre><code>{`func fetch_and_transform() {
  print "Fetching data..."
  let raw_data = http_get("https://jsonplaceholder.typicode.com/posts/1")
  
  print "Processing data..."
  let processed = str(raw_data)
  
  print "Saving results..."
  write_file("processed_data.txt", processed)
  
  return "Pipeline complete"
}

let status = fetch_and_transform()
print status`}</code></pre>

      <h2>Example 5: User Input Processing</h2>
      <pre><code>{`func greet_user() {
  let name = input("What is your name? ")
  let age = input("What is your age? ")
  
  let age_num = int(age)
  
  if age_num >= 18 {
    print "Hello, " + name + "! You are an adult."
  }
  
  return "Processing complete"
}

greet_user()`}</code></pre>

      <h2>Example 6: File Processing</h2>
      <pre><code>{`func backup_file(filename) {
  let content = read_file(filename)
  let backup_name = filename + ".backup"
  write_file(backup_name, content)
  return "Backup created: " + backup_name
}

let result = backup_file("important.txt")
print result`}</code></pre>

      <h2>Example 7: Number Range Processing</h2>
      <pre><code>{`func sum_range(start, end) {
  let numbers = range(start, end)
  let total = 0
  let i = start
  
  while i < end {
    let total = total + i
    let i = i + 1
  }
  
  return total
}

let result = sum_range(1, 11)
print result  # Prints: 55`}</code></pre>

      <h2>Example 8: API Error Handling</h2>
      <pre><code>{`func fetch_with_fallback(url, fallback_url) {
  let data = http_get(url)
  
  let data_type = type(data)
  if data_type == "str" {
    let data = http_get(fallback_url)
  }
  
  return data
}

let result = fetch_with_fallback(
  "https://api.primary.com/data",
  "https://api.backup.com/data"
)
print result`}</code></pre>
    </div>
  );
}
