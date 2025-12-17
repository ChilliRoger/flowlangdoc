# FlowLang Documentation Website

This is the official documentation website for FlowLang, a lightweight interpreted programming language designed for workflow automation, data processing, and API orchestration.

## Built With

- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the production application:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm start
```

## Project Structure

```
flowlangdoc/
├── app/                    # Next.js App Router pages
│   ├── docs/              # Documentation pages
│   │   ├── installation/
│   │   ├── quickstart/
│   │   ├── language/
│   │   ├── functions/
│   │   ├── examples/
│   │   ├── api/
│   │   ├── use-cases/
│   │   └── integration/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── DocsSidebar.tsx
└── public/               # Static assets
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ChilliRoger/flowlangdoc)

Or manually:

```bash
vercel
```

Follow the prompts to deploy your site.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the LICENSE file for details.

## Links

- [FlowLang GitHub Repository](https://github.com/ChilliRoger/flowlang)
- [FlowLang PyPI Package](https://pypi.org/project/flowlang-script/)
- [Documentation](https://flowlang.vercel.app)


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
