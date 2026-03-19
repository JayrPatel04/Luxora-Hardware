# Deployment Guide for Luxora Hardware

This guide will help you deploy the Luxora Hardware website to Vercel.

## Prerequisites

- A Vercel account (free tier is sufficient)
- Your code in a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally for testing

## Step 1: Prepare Your Repository

1. Push your code to a Git repository:
```bash
git init
git add .
git commit -m "Initial commit - Luxora Hardware website"
git remote add origin <your-repository-url>
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Root Directory: **./** (leave as is)
   - Build Command: **npm run build**
   - Output Directory: **.next**
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete

### Option B: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., luxorahardware.com)
4. Update your DNS records as instructed by Vercel
5. SSL certificate will be automatically provisioned

## Step 4: Environment Variables (Optional)

If you want to use environment variables:

1. In Vercel Dashboard, go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables (refer to `.env.example`)
4. Redeploy your project

## Step 5: Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation works smoothly
- [ ] Images are loading
- [ ] WhatsApp links work with your number
- [ ] Contact form displays correctly
- [ ] Mobile responsiveness
- [ ] SEO meta tags are present

## Updating Your Website

To deploy updates:

1. Make your changes locally
2. Test with `npm run dev`
3. Build to check for errors: `npm run build`
4. Commit and push to your repository:
```bash
git add .
git commit -m "Your update description"
git push
```

Vercel will automatically deploy your changes!

## Custom Configuration

### Update WhatsApp Number

Update the number in these files:
- `components/Navbar.tsx` (line 14)
- `app/page.tsx` (line 10)
- `app/products/[id]/page.tsx` (line 35)
- `app/contact/page.tsx` (line 5)

Replace `919876543210` with your number (country code + number, no + or spaces).

### Update Contact Information

Edit `components/Footer.tsx` and `app/contact/page.tsx` with:
- Your actual address
- Phone numbers
- Email addresses
- Social media links

### Update Google Maps

In `app/contact/page.tsx`:
1. Get your Google Maps embed code
2. Replace the iframe `src` URL (around line 70)

### Update Product Data

Edit `data/products.json` to:
- Add your own products
- Update categories
- Change product images
- Modify descriptions and prices

### Change Images

Replace Pexels image URLs with your own:
1. Upload images to a CDN or use relative paths
2. Update URLs in `data/products.json`
3. Ensure images are optimized (WebP format recommended)

## Performance Optimization

Your site is already optimized with:
- Next.js Image optimization
- Automatic code splitting
- Static page generation
- CSS optimization with Tailwind

For additional optimization:
- Use WebP/AVIF image formats
- Enable Vercel Analytics (free)
- Monitor Core Web Vitals in Vercel dashboard

## Troubleshooting

### Build Fails

1. Check the build log in Vercel
2. Run `npm run build` locally to reproduce the error
3. Ensure all dependencies are in `package.json`
4. Check for TypeScript errors with `npm run typecheck`

### Images Not Loading

1. Verify image URLs are accessible
2. Check Next.js image configuration in `next.config.js`
3. Ensure images are served over HTTPS

### WhatsApp Links Not Working

1. Ensure the number format is correct: `919876543210` (country code + number)
2. Test the link manually: `https://wa.me/919876543210`

### Pages Not Found (404)

1. Check file structure in `app/` directory
2. Ensure proper exports in page components
3. Clear Vercel cache and redeploy

## Support

For deployment issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Documentation: [nextjs.org/docs](https://nextjs.org/docs)

For website customization:
- Check the main README.md file
- Review component documentation in code

## Security Checklist

Before going live:
- [ ] Update all contact information
- [ ] Replace placeholder WhatsApp number
- [ ] Add Privacy Policy page (if collecting user data)
- [ ] Configure proper CORS headers
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set up proper error pages

## Analytics and Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics (built-in)
- Facebook Pixel (for marketing)
- Google Search Console (for SEO)

Add these through the `app/layout.tsx` file using Next.js Script component.

---

Your Luxora Hardware website is now live and ready to showcase premium architectural hardware to the world!
