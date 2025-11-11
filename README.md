# Kvíz Játékkártya Kft. - Static Landing Page

A modern, responsive static landing page for Kvíz Játékkártya Kft., a Hungarian playing card company.

## 🎯 Features

- **Fully Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean and contemporary design using Tailwind CSS
- **Fast Loading** - Pure HTML, CSS, and vanilla JavaScript - no heavy frameworks
- **SEO Friendly** - Semantic HTML structure
- **Smooth Animations** - Scroll-based animations and smooth transitions
- **Interactive Elements** - Mobile menu, smooth scrolling, back-to-top button
- **Form Handlers** - Newsletter, contact, and reseller inquiry forms

## 📁 Project Structure

```
jatekkartya/
├── index.html          # Main landing page
├── script.js           # JavaScript functionality
├── assets/
│   └── images/         # Image assets folder
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

No build tools or dependencies required! This is a pure static site.

### Installation

1. Clone or download this repository
2. No installation needed - just open `index.html` in your browser

### Local Development

You can use any local server to view the site. Here are a few options:

#### Option 1: Python Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

#### Option 2: Node.js http-server
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000

# Then visit: http://localhost:8000
```

#### Option 3: VS Code Live Server Extension
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📱 Sections

The landing page includes the following sections:

1. **Navigation Bar** - Fixed header with mobile menu
2. **Hero Section** - Eye-catching welcome section with CTAs
3. **Products Section** - Showcase of card games and products
4. **Custom Cards Section** - Information about custom card design services
5. **Game Rules Section** - Game instructions and rules
6. **Resellers Section** - B2B partnership information with inquiry form
7. **About Section** - Company information and values
8. **Newsletter Section** - Email subscription form
9. **Contact Section** - Contact information and form
10. **Footer** - Links and social media

## 🎨 Customization

### Colors

The site uses a purple/indigo color scheme. To change colors, update the Tailwind CSS classes in `index.html`:

- Primary: `purple-600`, `purple-700`
- Secondary: `indigo-600`, `indigo-700`

### Content

Simply edit the text content directly in `index.html`. All content is in Hungarian (hu).

### Images

Place your images in the `assets/images/` folder and update the image paths in `index.html`.

Example:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

### Forms

The forms currently show alert messages. To connect to a backend:

1. Update the form handlers in `script.js`
2. Send data to your API endpoint using `fetch()` or `XMLHttpRequest`

Example:
```javascript
newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    
    // Handle response...
});
```

## 🌐 Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select the main branch as source
5. Your site will be live at: `https://username.github.io/repository-name/`

### Option 2: Netlify

1. Sign up for a free Netlify account
2. Drag and drop the `jatekkartya` folder to Netlify
3. Your site will be live instantly!

### Option 3: Vercel

1. Sign up for a free Vercel account
2. Import your GitHub repository
3. Deploy with one click

### Option 4: Traditional Web Hosting

1. Upload all files to your web hosting via FTP
2. Ensure `index.html` is in the root directory
3. Your site is live!

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Poppins font family

## ✨ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do / Future Enhancements

- [ ] Add actual product images
- [ ] Connect forms to a backend API
- [ ] Add actual company logo
- [ ] Implement cookie consent banner
- [ ] Add Google Analytics
- [ ] Create separate pages for each section
- [ ] Add Hungarian language specific content
- [ ] Implement product catalog with filtering
- [ ] Add customer testimonials section
- [ ] Create FAQ section

## 🤝 Contributing

This is a static website project. To contribute:

1. Make your changes
2. Test thoroughly on different devices
3. Ensure all forms work correctly
4. Submit your changes

## 📄 License

© 2025 Kvíz Játékkártya Kft. All rights reserved.

## 📞 Support

For support or questions, contact:
- Website: https://www.jatekkartya.hu/
- Email: info@jatekkartya.hu

---

**Made with ❤️ for Kvíz Játékkártya Kft.**
