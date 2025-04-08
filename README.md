# Deno Mastra Project

A modern AI-powered application built with Deno and Mastra framework.

## Prerequisites

- [Deno](https://deno.land/) (version 2.2 or higher)

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd deno-mastra
```

2. Install dependencies:

```bash
deno task dev
```

3. Create a `.env` file:

```bash
cp .env.example .env
```

4. Update your `.env` file with your API keys:

```
OPENAI_API_KEY=your_openai_api_key
```

## Project Structure

```
.
├── src/             # Source code directory
├──── mastra/        # Mastra configuration
├────── agents/      # Agents configuration
├────── tools/       # Tools configuration
├── deno.json        # Deno configuration
├── deno.lock        # Dependency lock file
└── .env             # Environment variables
```

## Development

Start the development server:

```bash
deno task dev
```

This will start the Mastra server and make your agents available via REST
endpoints.

## Testing the API

You can test your agents using `curl` or any HTTP client:

```bash
curl -X POST http://localhost:4111/api/agents/npmAgent/generate \
  -H "Content-Type: application/json" \
  -d '{"messages": ["react"]}'
```

## Dependencies

- `@mastra/core`: Core Mastra framework
- `@mastra/memory`: Memory management for agents
- `@ai-sdk/openai`: OpenAI integration
- `zod`: Schema validation

## License

MIT
