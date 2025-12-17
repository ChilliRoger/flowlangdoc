export default function UseCasesPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>Use Cases</h1>

      <h2>1. API Testing and Validation</h2>
      <p>FlowLang excels at quick API testing without the overhead of larger frameworks.</p>
      <pre><code>{`let endpoint = "https://api.example.com/health"
let response = http_get(endpoint)
print "API Status:"
print response`}</code></pre>

      <h2>2. Data Pipeline Automation</h2>
      <p>Create ETL (Extract, Transform, Load) workflows with minimal code.</p>
      <pre><code>{`func etl_pipeline(source_id) {
  let data = http_get("https://api.source.com/data/" + str(source_id))
  let transformed = str(data)
  write_file("output_" + str(source_id) + ".txt", transformed)
  return "Complete"
}

let ids = range(1, 10)
let i = 1
while i < 10 {
  etl_pipeline(i)
  let i = i + 1
}`}</code></pre>

      <h2>3. Configuration Management</h2>
      <p>Automate configuration file generation and updates.</p>
      <pre><code>{`func generate_config(env) {
  let config = "environment=" + env
  write_file(env + "_config.txt", config)
  return "Config generated for " + env
}

generate_config("production")
generate_config("staging")`}</code></pre>

      <h2>4. Microservice Orchestration</h2>
      <p>Coordinate calls across multiple microservices.</p>
      <pre><code>{`func orchestrate() {
  let users = http_get("https://api.service1.com/users")
  let orders = http_get("https://api.service2.com/orders")
  
  write_file("users.txt", str(users))
  write_file("orders.txt", str(orders))
  
  return "Orchestration complete"
}

orchestrate()`}</code></pre>

      <h2>5. Scheduled Tasks and Cron Jobs</h2>
      <p>Perfect for periodic data collection and processing tasks.</p>
      <pre><code>{`func daily_report() {
  let data = http_get("https://api.example.com/daily-stats")
  let timestamp = str(data)
  write_file("daily_report.txt", timestamp)
  return "Report generated"
}

daily_report()`}</code></pre>

      <h2>6. Web Scraping and Data Collection</h2>
      <p>Collect data from multiple sources efficiently.</p>
      <pre><code>{`func collect_data(urls) {
  let count = 1
  while count <= 5 {
    let url = "https://api.data.com/item/" + str(count)
    let data = http_get(url)
    write_file("data_" + str(count) + ".txt", str(data))
    let count = count + 1
  }
  return "Collection complete"
}

collect_data()`}</code></pre>

      <h2>7. DevOps Automation</h2>
      <p>Automate deployment and infrastructure tasks.</p>
      <pre><code>{`func deploy_service(service_name) {
  let health = http_get("https://" + service_name + ".com/health")
  
  if type(health) == "dict" {
    print "Service healthy, proceeding with deployment"
    let deploy_result = http_post(
      "https://deploy.com/trigger",
      {"service": service_name}
    )
    return deploy_result
  }
  
  return "Service unhealthy, aborting"
}

let result = deploy_service("my-api")
print result`}</code></pre>

      <h2>8. Log Processing and Analysis</h2>
      <p>Process and analyze log files.</p>
      <pre><code>{`func process_logs(log_file) {
  let content = read_file(log_file)
  let summary = "Processed: " + str(len(content)) + " characters"
  write_file("log_summary.txt", summary)
  return summary
}

let result = process_logs("server.log")
print result`}</code></pre>

      <h2>9. Backup and Sync Operations</h2>
      <p>Automate data backup and synchronization.</p>
      <pre><code>{`func backup_to_api(file_path) {
  let content = read_file(file_path)
  let response = http_post(
    "https://backup.com/upload",
    {"content": content, "filename": file_path}
  )
  return response
}

let result = backup_to_api("important_data.txt")
print result`}</code></pre>

      <h2>10. Integration Testing</h2>
      <p>Test integration between multiple systems.</p>
      <pre><code>{`func test_integration() {
  let auth = http_get("https://auth.service.com/token")
  let data = http_get("https://api.service.com/data")
  
  if type(auth) == "dict" {
    if type(data) == "dict" {
      print "Integration test passed"
      return "PASS"
    }
  }
  
  return "FAIL"
}

let result = test_integration()
print result`}</code></pre>
    </div>
  );
}
