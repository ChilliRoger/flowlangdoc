# FlowLang Documentation - Deployment Guide

## Deploying to Vercel

This guide will help you deploy the FlowLang documentation website to Vercel.

### Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Git installed on your local machine

### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `flowlangdoc`)

2. Initialize git and push your code:

```bash
cd e:\flowlangdoc
git init
git add .
git commit -m "Initial commit: FlowLang documentation website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/flowlangdoc.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 2: Deploy to Vercel

#### Option 1: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

That's it! Vercel will build and deploy your site automatically.

#### Option 2: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd e:\flowlangdoc
vercel
```

3. Follow the prompts:
   - Login to your Vercel account
   - Set up and deploy the project
   - Confirm the settings

4. For production deployment:
```bash
vercel --prod
```

### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the main branch
- Create preview deployments for pull requests
- Run builds and tests before deployment

### Environment Variables

If you need to add environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy if necessary

### Build Settings

The project uses these default settings:
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Development Command:** `npm run dev`

These are already configured in `vercel.json`.

### Troubleshooting

**Build fails:**
- Check that all dependencies are in `package.json`
- Ensure Node.js version is 18.0 or higher
- Review build logs in Vercel Dashboard

**404 errors:**
- Verify all routes are properly configured
- Check that files are in the correct directories

**Styling issues:**
- Make sure Tailwind CSS is properly configured
- Check that `globals.css` is imported in the layout

### Performance Optimization

The site is already optimized with:
- Static page generation
- Image optimization
- Code splitting
- Minification

### Monitoring

After deployment:
- Monitor analytics in Vercel Dashboard
- Check Web Vitals for performance metrics
- Review deployment logs for any issues

### Support

For issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/ChilliRoger/flowlangdoc/issues)
