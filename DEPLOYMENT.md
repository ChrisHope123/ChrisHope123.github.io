# Deployment Guide - Kvíz Játékkártya Static Site

This guide will help you deploy your static landing page to various hosting platforms.

## 🚀 Quick Deployment Options

### 1. GitHub Pages (FREE) ⭐ Recommended for beginners

**Steps:**
1. Create a GitHub account (if you don't have one): https://github.com
2. Create a new repository named `jatekkartya`
3. Upload all files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/jatekkartya.git
   git push -u origin main
   ```
4. Go to repository Settings → Pages
5. Under "Source", select "main" branch
6. Click Save
7. Your site will be live at: `https://YOUR-USERNAME.github.io/jatekkartya/`

**Pros:** Free, easy to use, automatic HTTPS
**Cons:** Public repositories only (unless you have Pro)

---

### 2. Netlify (FREE) ⭐ Recommended for best performance

**Steps:**
1. Create account at: https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag and drop the entire `jatekkartya` folder
4. Your site will be live instantly with a random URL
5. (Optional) Change to custom domain in Site settings

**Pros:** Instant deployment, automatic HTTPS, CDN, custom domains
**Cons:** None for static sites

**Alternative with Git:**
```bash
# Connect to GitHub first, then:
# In Netlify: New site from Git → Select repository → Deploy
```

---

### 3. Vercel (FREE)

**Steps:**
1. Create account at: https://vercel.com
2. Click "Add New" → "Project"
3. Import from GitHub or upload files
4. Click "Deploy"
5. Your site will be live at a vercel.app URL

**Pros:** Fast deployment, automatic HTTPS, great performance
**Cons:** Overkill for simple static sites

---

### 4. Traditional Web Hosting (Paid)

**For hosting providers like:**
- One.com
- HostGator
- Bluehost
- SiteGround
- etc.

**Steps:**
1. Purchase hosting and domain
2. Access your hosting control panel (cPanel)
3. Open File Manager
4. Navigate to `public_html` folder
5. Upload all files (index.html, script.js, assets/, etc.)
6. Your site will be live at your domain

**Via FTP:**
1. Get FTP credentials from your hosting provider
2. Use FileZilla (free FTP client)
3. Connect to your server
4. Upload all files to `public_html` or `www` folder

---

### 5. Cloudflare Pages (FREE)

**Steps:**
1. Create account at: https://pages.cloudflare.com
2. Connect your GitHub repository
3. Deploy with one click
4. Get free CDN and DDoS protection

**Pros:** Global CDN, excellent performance, free SSL
**Cons:** Requires GitHub

---

## 🌐 Custom Domain Setup

After deploying, you can connect a custom domain (e.g., jatekkartya.hu):

### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### For GitHub Pages:
1. Add a `CNAME` file to your repository with your domain
2. Update DNS:
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
   Value: YOUR-USERNAME.github.io
   ```

---

## 📊 Adding Analytics

### Google Analytics:

1. Create account at: https://analytics.google.com
2. Get your Measurement ID (e.g., G-XXXXXXXXXX)
3. Add before `</head>` in index.html:

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

---

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All links work correctly
- [ ] Forms are properly connected (if using backend)
- [ ] Images are optimized and loading
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Contact information is correct
- [ ] Meta tags are filled in (SEO)
- [ ] Favicon is added
- [ ] 404 page created (optional)
- [ ] SSL certificate is active (HTTPS)
- [ ] Analytics code added (optional)

---

## 🎯 SEO Optimization

Add these to `<head>` section in index.html:

```html
<!-- Primary Meta Tags -->
<title>Kvíz Játékkártya Kft. - Ami összehozza a társaságot</title>
<meta name="title" content="Kvíz Játékkártya Kft. - Ami összehozza a társaságot">
<meta name="description" content="Magyar gyártású játékkártyák és kártyajátékok. Egyedi tervezés, kvízjátékok és tradicionális kártyák.">
<meta name="keywords" content="játékkártya, kártyajáték, kvízjáték, magyar kártya, egyedi kártya">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.jatekkartya.hu/">
<meta property="og:title" content="Kvíz Játékkártya Kft.">
<meta property="og:description" content="Magyar gyártású játékkártyák és kártyajátékok">
<meta property="og:image" content="https://www.jatekkartya.hu/assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.jatekkartya.hu/">
<meta property="twitter:title" content="Kvíz Játékkártya Kft.">
<meta property="twitter:description" content="Magyar gyártású játékkártyák és kártyajátékok">
<meta property="twitter:image" content="https://www.jatekkartya.hu/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">
```

---

## 🔐 Security Headers (Advanced)

If using Netlify, create a `_headers` file:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📱 Testing Your Site

Before going live:

1. **Mobile Responsiveness**: https://responsivedesignchecker.com/
2. **Page Speed**: https://pagespeed.web.dev/
3. **SEO Check**: https://www.seoptimer.com/
4. **Broken Links**: https://www.deadlinkchecker.com/
5. **Browser Testing**: BrowserStack or actual devices

---

## 🆘 Troubleshooting

**Site not loading:**
- Check if all files are uploaded
- Verify index.html is in root directory
- Clear browser cache

**Images not showing:**
- Check file paths are correct
- Ensure images are in assets/images folder
- Verify image file names match exactly (case-sensitive)

**Forms not working:**
- Forms need backend to actually send data
- Currently showing alerts only
- Connect to email service or API

---

## 📞 Support

Need help deploying? Check these resources:
- Netlify Docs: https://docs.netlify.com/
- GitHub Pages Guide: https://pages.github.com/
- Vercel Docs: https://vercel.com/docs

---

**Good luck with your deployment! 🚀**
