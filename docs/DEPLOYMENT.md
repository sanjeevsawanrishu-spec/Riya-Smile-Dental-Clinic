# Deployment Guide - Riya Smile Care Centre Website

## Overview

This is a static HTML/CSS website optimized for SEO and performance. It can be deployed to any static hosting provider.

## File Structure

```
riyasmile-2/
├── index.html              # Homepage
├── about.html              # About Us page
├── contact.html            # Contact & Appointment page
├── privacy-policy.html     # Privacy Policy
├── terms.html              # Terms of Service
├── cookie-policy.html      # Cookie Policy
├── sitemap.xml             # XML Sitemap for search engines
├── robots.txt              # Robots configuration
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Minimal JavaScript
├── services/               # Service pages (13 files)
│   ├── dental-implants-uttam-nagar.html
│   ├── root-canal-treatment-uttam-nagar.html
│   └── ...
├── doctors/                # Doctor profile pages (4 files)
│   ├── dr-s-k-singh.html
│   ├── dr-p-kumar.html
│   └── ...
├── blog/                   # Blog articles (5 files)
│   ├── dental-implants-uttam-nagar-guide.html
│   └── ...
├── images/                 # Images folder (add your images)
│   ├── logo.png
│   ├── doctors/
│   └── services/
└── docs/                   # Documentation
    ├── SEO-CHECKLIST.md
    ├── DEPLOYMENT.md
    └── GBP-DESCRIPTION.md
```

## Pre-Deployment Checklist

### 1. Add Images
- [ ] Add clinic logo (`images/logo.png`)
- [ ] Add Open Graph image (`images/og-image.jpg` - 1200x630px)
- [ ] Add doctor photos (`images/doctors/`)
- [ ] Add service images (`images/services/`)
- [ ] Add clinic interior/exterior photos
- [ ] Optimize all images (compress to WebP format)
- [ ] Add `loading="lazy"` attribute to images

### 2. Update Favicon
- [ ] Create favicon.ico (32x32px)
- [ ] Create apple-touch-icon.png (180x180px)
- [ ] Place in root directory

### 3. Verify Contact Information
- [ ] Phone numbers are correct
- [ ] WhatsApp number is correct
- [ ] Email address is correct
- [ ] Address is complete and accurate
- [ ] Google Maps embed URL is correct

### 4. Configure Form Submission
The contact form uses FormSubmit.co for email delivery. To configure:
1. The form action is set to: `https://formsubmit.co/racc.dental@gmail.com`
2. On first submission, FormSubmit will send a confirmation email
3. Click the confirmation link to activate

Alternative form options:
- Netlify Forms (if deploying to Netlify)
- Formspree
- Custom backend

---

## Deployment Options

### Option 1: Netlify (Recommended)

**Advantages:** Free SSL, CDN, automatic deploys, form handling

1. Create account at [netlify.com](https://netlify.com)
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire `riyasmile-2` folder
4. Site will be live at `random-name.netlify.app`
5. Go to Site settings → Domain management → Add custom domain
6. Add `riyasmile.in` and follow DNS configuration

**DNS Configuration for Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### Option 2: Vercel

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to project folder and run: `vercel`
4. Follow prompts to deploy
5. Add custom domain in dashboard

### Option 3: GitHub Pages

1. Create GitHub repository
2. Push code to main branch
3. Go to Settings → Pages
4. Select source: "Deploy from a branch"
5. Select main branch, root folder
6. Add custom domain

**DNS for GitHub Pages:**
```
Type: A
Name: @
Values: 
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

### Option 4: Traditional Hosting (cPanel)

1. Log into cPanel
2. Go to File Manager → public_html
3. Upload all files from riyasmile-2 folder
4. Ensure index.html is in root
5. SSL certificate via Let's Encrypt (AutoSSL)

### Option 5: Hostinger / Bluehost

1. Log into hosting dashboard
2. Navigate to File Manager
3. Upload files to public_html or www folder
4. Install SSL certificate
5. Point domain to hosting nameservers

---

## Post-Deployment Steps

### 1. Verify Deployment
- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Mobile version displays correctly
- [ ] Forms submit successfully
- [ ] Phone/WhatsApp links work
- [ ] Images load properly

### 2. SSL/HTTPS
- [ ] Ensure SSL certificate is active
- [ ] Force HTTPS redirect
- [ ] Update all internal links to use https://

### 3. Google Search Console Setup
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://riyasmile.in`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://riyasmile.in/sitemap.xml`
5. Check for crawl errors

### 4. Bing Webmaster Tools
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site and verify
3. Submit sitemap

### 5. Google Analytics Setup
1. Create Google Analytics 4 property
2. Get measurement ID (G-XXXXXXXXXX)
3. Add tracking code to all pages (before </head>):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 6. Google Business Profile
1. Go to [business.google.com](https://business.google.com)
2. Claim or create business listing
3. Add website URL: `https://riyasmile.in`
4. Complete all information
5. Add photos
6. Use the GBP description from `docs/GBP-DESCRIPTION.md`

---

## Performance Optimization

### Image Optimization
```bash
# Using ImageMagick or online tools
# Convert to WebP format
# Compress JPEG to 80% quality
# Resize to actual display size
```

### Testing Tools
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)

### Target Scores
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- Mobile PageSpeed: 85+

---

## Maintenance

### Regular Updates
- Update copyright year in footer (annually)
- Update "last modified" dates when content changes
- Update sitemap.xml lastmod dates
- Add new blog posts monthly
- Update testimonials periodically
- Check for broken links quarterly

### Backup
- Keep local copy of all files
- Use Git for version control
- Backup before any major changes

---

## Troubleshooting

### 404 Errors
- Check file paths are correct
- Ensure filenames match exactly (case-sensitive)
- Verify .html extension is included in links

### Forms Not Working
- Verify FormSubmit email confirmation completed
- Check network requests in browser dev tools
- Try alternative form service

### Slow Loading
- Optimize images (compress, resize, WebP)
- Enable GZIP compression on server
- Use CDN for static assets
- Minimize HTTP requests

### Mobile Display Issues
- Test on actual mobile devices
- Check viewport meta tag
- Verify CSS media queries
- Test in Chrome DevTools mobile mode

---

## Support

For technical support with this website:
- Review the code documentation
- Check browser console for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Validate CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

---

*Last Updated: February 2026*
