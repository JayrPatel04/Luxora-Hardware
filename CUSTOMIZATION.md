# Customization Guide

This guide will help you customize the Luxora Hardware website to match your brand and business.

## Quick Start Customization

### 1. Update Brand Name

**Files to edit:**
- `components/Navbar.tsx` - Lines 22-25 (Logo and brand name)
- `components/Footer.tsx` - Lines 13-17 (Footer logo)
- `app/layout.tsx` - Line 11 (Page title)

Replace "Luxora Hardware" with your brand name.

### 2. Update Colors

**Primary Color (Gold/Amber):**

Find and replace these Tailwind classes throughout the project:
- `amber-400` → your light color
- `amber-500` → your medium color
- `amber-600` → your dark color

**Background Colors:**
- `zinc-800` → lighter dark background
- `zinc-900` → darker background
- `black` → pure black background

**Main files to update:**
- All component files in `components/`
- All page files in `app/`

### 3. Update Contact Information

**WhatsApp Number:**
- Format: Country code + number (e.g., 919876543210)
- Files: `components/Navbar.tsx`, `app/page.tsx`, `app/products/[id]/page.tsx`, `app/contact/page.tsx`
- Search for: `919876543210` or `7718096969`

**Phone Numbers:**
- `app/contact/page.tsx` - Lines 30-35
- `components/Footer.tsx` - Line 74

**Email Addresses:**
- `app/contact/page.tsx` - Lines 39-44
- `components/Footer.tsx` - Line 81

**Business Address:**
- `app/contact/page.tsx` - Lines 23-28
- `components/Footer.tsx` - Lines 68-70

### 4. Update Social Media Links

**Files to edit:**
- `components/Footer.tsx` - Lines 20-37 (Social icons)
- `app/contact/page.tsx` - Lines 67-84 (Social buttons)

Update Instagram and Facebook URLs with your actual profiles.

## Product Management

### Adding New Products

Edit `data/products.json`:

```json
{
  "id": "unique-product-id",
  "name": "Product Name",
  "category": "handles|knobs|cabinets|accessories",
  "subcategory": "Product Subcategory",
  "price": "Premium|Mid-Range|Affordable",
  "description": "Detailed product description",
  "material": "Material composition",
  "size": "Dimensions",
  "images": [
    "image-url-1.jpg",
    "image-url-2.jpg"
  ],
  "featured": true|false
}
```

**Tips:**
- Use unique IDs (lowercase, hyphenated)
- Provide high-quality images (1200x800px minimum)
- Write compelling descriptions
- Set `featured: true` for homepage display

### Adding New Categories

1. Add category to `data/products.json` categories array:
```json
{
  "id": "category-id",
  "name": "Category Name",
  "description": "Brief description",
  "image": "category-image-url.jpg"
}
```

2. Category will automatically appear in:
   - Homepage categories section
   - Products page filters
   - Navigation dropdown

### Updating Images

**Product Images:**
- Recommended size: 1200x800px or larger
- Format: JPG or WebP
- Optimize before uploading (use TinyPNG.com)
- Update URLs in `data/products.json`

**Hero Image:**
- File: `app/page.tsx` - Line 17
- Recommended size: 1920x1080px
- High quality, relevant to hardware/interiors

**Category Images:**
- Update in `data/products.json` categories array
- Size: 800x600px minimum

## Styling Customization

### Change Fonts

**Current fonts:** Inter (body) and Playfair Display (headings)

To change:
1. Edit `app/layout.tsx` - Lines 3 and 7-8
2. Import new Google Fonts
3. Update font variables

Example:
```typescript
import { Roboto, Merriweather } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather'
});
```

### Adjust Spacing

Edit `tailwind.config.ts` to modify spacing:
```typescript
theme: {
  extend: {
    spacing: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
    }
  }
}
```

### Change Border Radius

All components use Tailwind's rounded utilities:
- `rounded-lg` → large radius
- `rounded-xl` → extra large
- `rounded-full` → circular

Search and replace to adjust globally.

## Content Customization

### Homepage Sections

**Hero Section** (`app/page.tsx` lines 14-61):
- Main heading
- Subheading
- CTA buttons

**Why Choose Us** (lines 124-167):
- Three feature cards
- Icons and descriptions

**Testimonials** (lines 169-199):
- Edit `data/products.json` testimonials array
- Add client reviews

### About Page

Edit `app/about/page.tsx`:
- Company story (lines 32-51)
- Statistics (lines 54-98)
- Commitment section (lines 100-130)

### Navigation Menu

Edit `components/Navbar.tsx`:
- Add/remove menu items (lines 34-66)
- Modify dropdown categories (lines 48-64)

## Advanced Customization

### Add New Pages

1. Create new file in `app/` directory:
```typescript
// app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* Your content */}
    </div>
  );
}
```

2. Add link in Navbar:
```typescript
<Link href="/services" className="...">
  Services
</Link>
```

### Custom Components

Create reusable components in `components/`:

```typescript
// components/ServiceCard.tsx
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon
}: ServiceCardProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      {icon}
      <h3 className="text-white font-bold">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
```

### Add Analytics

Add Google Analytics in `app/layout.tsx`:

```typescript
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## SEO Customization

### Update Meta Tags

Edit `app/layout.tsx` metadata:
```typescript
export const metadata: Metadata = {
  title: 'Your Company Name',
  description: 'Your description',
  keywords: 'your, keywords, here',
  // ... other meta tags
};
```

### Add Structured Data

Add to any page:
```typescript
export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your Business Name",
    "description": "Your description",
    // ... more schema data
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      {/* Page content */}
    </>
  );
}
```

## Testing Your Changes

1. **Development Server:**
```bash
npm run dev
```
Visit `http://localhost:3000`

2. **Build Test:**
```bash
npm run build
```

3. **Type Check:**
```bash
npm run typecheck
```

4. **Production Preview:**
```bash
npm run build && npm run start
```

## Common Customizations

### Remove Sections

Simply delete or comment out the section in the page file:
```typescript
{/*
  <section className="...">
    Section to remove
  </section>
*/}
```

### Change Layout

Modify grid columns:
```typescript
// 3 columns
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

### Add Icons

Using Lucide React:
```typescript
import { IconName } from 'lucide-react';

<IconName size={24} className="text-amber-400" />
```

Browse icons at: [lucide.dev](https://lucide.dev)

## Getting Help

- Check the main README.md for project structure
- Review existing components for patterns
- Refer to Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

Remember to test all changes before deploying!
