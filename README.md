# UID-PROJECT

# 🏏 SS Cricket — Cloned  Website

> **Forging Legends Since 1969** — A premium cricket equipment e-commerce website built with pure HTML, CSS, and JavaScript.

---

## 📌 Overview

SS Cricket is a fully responsive, multi-section static website for a cricket sports equipment brand. It showcases products, brand story, and handles basic user interactions like cart feedback, newsletter subscription, smooth scrolling, and active navigation highlighting — all without any frameworks or libraries.

---

## 🌐 Live Demo

> _Deploy on GitHub Pages / Netlify / Vercel and paste your link here._

```
https://github.com/rithvikreddyoram-sudo/UID-PROJECT
```

---

## 📁 Project Structure

```
ss-cricket/
│
├── index.html        # Main HTML file — all page sections and content
├── style.css         # All styling — layout, components, animations, responsive design
├── script.js         # All interactivity — menu, scroll spy, cart, toast, smooth scroll
│
└── images/           # Product and section images
    ├── bat.jpg
    ├── helmet.jpg
    ├── bag.jpg
    ├── ball.jpg
    ├── gloves.jpg
    ├── pads.jpg
    ├── shoes.jpg
    ├── Thigh.jpg
    ├── probat.jpg
    ├── tball.jpg
    ├── kit.jpg
    ├── wkgloves.jpg
    ├── jersey.jpg
    ├── elbow.jpg
    └── legacy.jpg
```

---

## ✨ Features

- **Fixed Navigation Bar** — Stays on top while scrolling; active link highlights based on current section
- **Responsive Hamburger Menu** — Collapses into a toggle menu on mobile devices
- **Hero Section** — Full-screen banner with CTA buttons and overlay gradient
- **Promo Strip** — Trust badges for shipping, returns, payment, and quality
- **Bestsellers Grid** — 8 product cards with discount tags, star ratings, and prices
- **New Arrivals Grid** — 6 product cards with "New" badges
- **Add to Cart** — Button feedback with toast notification and color change
- **About Section** — Two-column brand story layout with image
- **Newsletter Subscription** — Email form with success toast feedback
- **Smooth Scrolling** — All anchor links scroll smoothly to their target sections
- **Scroll Spy** — Active nav link updates automatically as user scrolls through sections
- **Footer** — Four-column layout with product links, support links, and contact info
- **Fully Responsive** — Works on desktops, tablets, and mobile phones

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, layout, animations, media queries |
| Vanilla JavaScript | Interactivity and DOM manipulation |

> ⚡ No frameworks. No libraries. No dependencies. Just pure web fundamentals.

---

## 📱 Responsive Breakpoints

| Screen Width | Layout Behaviour |
|--------------|-----------------|
| > 1024px | 4-column product grid, full navbar |
| ≤ 1024px | 3-column product grid |
| ≤ 768px | 2-column grid, hamburger menu, stacked about section |
| ≤ 480px | 1-column grid, stacked footer, smaller hero text |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rithvikreddyoram-sudo/UID-PROJECT
```

### 2. Navigate into the Folder

```bash
cd ss-cricket
```

### 3. Open in Browser

Simply open `index.html` in any modern browser:

```bash
# On Windows
start index.html

# On macOS
open index.html

# Or drag and drop index.html into your browser
```

> No build steps, no npm install, no server required.

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Dark | `#1a1a2e` | Header, footer, buttons |
| Cricket Red | `#d62828` | Accents, tags, hover states |
| Teal | `#2a9d8f` | New tag, cart success toast |
| Light Gray | `#f4f4f4` | Alternate section backgrounds |
| White | `#ffffff` | Cards, inputs, text on dark |

---

## 📦 Sections Breakdown

| Section | ID | Description |
|---------|----|-------------|
| Header | `#header` | Fixed navbar with logo and links |
| Hero | `#home` | Full-screen landing banner |
| Promo Strip | — | 4 trust badge items |
| Bestsellers | `#products` | 8 discounted product cards |
| New Arrivals | `#arrivals` | 6 newly launched product cards |
| About | `#about` | Brand story with image |
| Newsletter | — | Email subscription form |
| Footer | `#contact` | Links, socials, contact info |

---

## 🔧 JavaScript Functionality

| Function | Description |
|----------|-------------|
| `addToCart(btn)` | Shows toast, changes button state, resets after 2.2s |
| `handleSubscribe(e)` | Validates email, shows success toast, clears input |
| Hamburger Toggle | Opens/closes mobile nav menu |
| Scroll Shadow | Deepens header shadow after 60px scroll |
| Smooth Scroll | Smooth `scrollIntoView` for all `#` anchor links |
| Scroll Spy | Highlights active nav link based on scroll position |

---

## 🖼️ Adding Your Own Images

Place your images inside the `images/` folder and update the `src` attributes in `index.html`:

```html
<!-- Example -->
<img src="images/your-image.jpg" alt="Product Name">
```

For the hero background, update this line in `style.css`:

```css
.hero {
    background: linear-gradient(...), url('images/your-hero.jpg') center / cover no-repeat;
}
```

---

## 🌍 Deployment

### GitHub Pages
1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set source branch to `main` and folder to `/ (root)`
4. Your site will be live at `https://your-username.github.io/ss-cricket/`


---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch — `git checkout -b feature/your-feature`
3. Make your changes and commit — `git commit -m "Add: your feature"`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request



## 👤 Author

**Your Name**
- GitHub: [@rithvikreddyoram-sudo](https://github.com/rithvikreddyoram-sudo)
- Email: rithvikreddyoram@gmail.com

---

> _"From  international grounds — SS Cricket, trusted by champions."_ 🏏
