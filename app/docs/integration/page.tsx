export default function IntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto px-8 py-12 prose prose-lg">
      <h1>Integration</h1>

      <h2>Integration with Python Projects</h2>
      <p>FlowLang can be embedded in Python applications for scriptable automation.</p>

      <h3>Example: Flask Integration</h3>
      <pre><code>{`from flask import Flask, request
from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

app = Flask(__name__)

@app.route('/execute', methods=['POST'])
def execute_flowlang():
    code = request.json.get('code')
    
    tokens = Lexer(code).tokens
    ast = Parser(tokens).parse()
    Interpreter().eval(ast)
    
    return {'status': 'success'}`}</code></pre>

      <h2>Integration with CI/CD Pipelines</h2>
      <p>Use FlowLang scripts in continuous integration workflows.</p>

      <h3>Example: GitHub Actions</h3>
      <pre><code>{`name: Run FlowLang Script
on: [push]
jobs:
  run-script:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Python
        uses: actions/setup-python@v2
      - name: Install FlowLang
        run: pip install flowlang
      - name: Execute Script
        run: flow run scripts/deploy.flow`}</code></pre>

      <h2>Integration with Docker</h2>
      <p>Create containerized FlowLang execution environments.</p>

      <h3>Dockerfile Example:</h3>
      <pre><code>{`FROM python:3.9-slim

WORKDIR /app

RUN pip install flowlang

COPY scripts/ /app/scripts/

CMD ["flow", "run", "scripts/main.flow"]`}</code></pre>

      <h2>Integration with Scheduling Systems</h2>
      <p>Use with cron or systemd timers for scheduled execution.</p>

      <h3>Cron Example:</h3>
      <pre><code>{`# Run daily report at 9 AM
0 9 * * * /usr/local/bin/flow run /home/user/reports/daily.flow`}</code></pre>

      <h2>Integration with FastAPI</h2>
      <p>Create REST APIs that execute FlowLang scripts.</p>
      <pre><code>{`from fastapi import FastAPI, HTTPException
from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

app = FastAPI()

@app.post("/run")
async def run_script(code: str):
    try:
        tokens = Lexer(code).tokens
        ast = Parser(tokens).parse()
        result = Interpreter().eval(ast)
        return {"status": "success", "result": str(result)}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))`}</code></pre>

      <h2>Integration with Django</h2>
      <p>Use FlowLang for background tasks in Django applications.</p>
      <pre><code>{`from django.http import JsonResponse
from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

def execute_script(request):
    if request.method == 'POST':
        code = request.POST.get('code')
        
        tokens = Lexer(code).tokens
        ast = Parser(tokens).parse()
        Interpreter().eval(ast)
        
        return JsonResponse({'status': 'success'})
    
    return JsonResponse({'error': 'Invalid method'}, status=405)`}</code></pre>

      <h2>Integration with AWS Lambda</h2>
      <p>Deploy FlowLang scripts as serverless functions.</p>
      <pre><code>{`import json
from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

def lambda_handler(event, context):
    code = event.get('code', '')
    
    try:
        tokens = Lexer(code).tokens
        ast = Parser(tokens).parse()
        result = Interpreter().eval(ast)
        
        return {
            'statusCode': 200,
            'body': json.dumps({'result': str(result)})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }`}</code></pre>

      <h2>Integration with Celery</h2>
      <p>Use FlowLang for distributed task processing.</p>
      <pre><code>{`from celery import Celery
from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

app = Celery('tasks', broker='redis://localhost:6379')

@app.task
def execute_flowlang_script(code):
    tokens = Lexer(code).tokens
    ast = Parser(tokens).parse()
    result = Interpreter().eval(ast)
    return str(result)`}</code></pre>

      <h2>Integration with Jupyter Notebooks</h2>
      <p>Execute FlowLang code within Jupyter notebooks.</p>
      <pre><code>{`from flowlang.lexer import Lexer
from flowlang.parser import Parser
from flowlang.interpreter import Interpreter

def run_flowlang(code):
    tokens = Lexer(code).tokens
    ast = Parser(tokens).parse()
    return Interpreter().eval(ast)

# Use in notebook cell
code = """
let data = http_get("https://api.github.com")
print data
"""

run_flowlang(code)`}</code></pre>

      <h2>Best Practices for Integration</h2>
      <ul>
        <li>Always validate and sanitize FlowLang code before execution</li>
        <li>Use try-except blocks to handle execution errors gracefully</li>
        <li>Consider running FlowLang scripts in isolated environments</li>
        <li>Monitor resource usage for long-running scripts</li>
        <li>Implement proper logging for debugging and auditing</li>
        <li>Set timeouts for HTTP requests to prevent hanging</li>
      </ul>
    </div>
  );
}
