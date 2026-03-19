# Luxora Hardware - Premium Architectural Hardware Website

A modern, production-ready website for Luxora Hardware - a premium architectural hardware and interior fittings brand. Built with Next.js 13 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Luxury Dark Theme**: Elegant black and charcoal design with gold accents
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, semantic HTML, and Next.js SEO features
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **Product Catalog**: Categorized product listings with search and filters
- **WhatsApp Integration**: Direct enquiry buttons throughout the site
- **Contact Forms**: Google Maps integration and contact information

## Pages

- **Home**: Hero section, categories, featured products, testimonials, and CTAs
- **Products**: Product listing with category filters and search
- **Product Details**: Individual product pages with images, specifications, and enquiry options
- **About**: Company story, values, and statistics
- **Contact**: Contact information, Google Maps, and social media links

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), Playfair Display (serif)
- **Images**: Next.js Image component with Pexels stock photos

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd luxora-hardware
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment on Vercel

This project is optimized for deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

3. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. Deploy!

The site will be live with automatic SSL certificate and CDN optimization.

## Configuration

### WhatsApp Number

Update the WhatsApp number in the following files:
- `components/Navbar.tsx`
- `app/page.tsx`
- `app/products/[id]/page.tsx`
- `app/contact/page.tsx`

Search for `919876543210` and replace with your number (include country code without +).

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Product Data

Product data is stored in `data/products.json`. You can:
- Add new products
- Modify existing products
- Add new categories
- Update testimonials

### Google Maps

Update the Google Maps embed URL in `app/contact/page.tsx` with your actual location coordinates.

## Project Structure

```
luxora-hardware/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products pages
│   │   ├── [id]/         # Dynamic product detail page
│   │   └── page.tsx      # Products listing page
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── CategoryCard.tsx   # Category display card
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation bar
│   └── ProductCard.tsx    # Product display card
├── data/                  # Static data
│   └── products.json      # Product catalog
└── public/                # Static assets

```

## Customization

### Colors

The color scheme uses Tailwind CSS classes. Main colors:
- Primary: Amber (amber-400, amber-500, amber-600)
- Background: Black and Zinc (zinc-800, zinc-900)
- Text: White and Gray

### Fonts

Two Google Fonts are used:
- **Inter**: Primary sans-serif font
- **Playfair Display**: Serif font for headings

Update in `app/layout.tsx` to change fonts.

### Images

All images are from Pexels and are properly attributed. Replace with your own product images:
- Update URLs in `data/products.json`
- Ensure proper image optimization
- Use Next.js Image component for best performance

## Performance Optimization

- Images are optimized with Next.js Image component
- Lazy loading for off-screen content
- Code splitting with Next.js App Router
- Efficient CSS with Tailwind
- Minimal JavaScript bundle size

## SEO Features

- Semantic HTML
- Meta tags for social sharing
- Descriptive alt tags for images
- Structured data ready
- Mobile-friendly
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved. This is a commercial project for Luxora Hardware.

## Support

For support, email info@luxorahardware.com or contact us via WhatsApp.
