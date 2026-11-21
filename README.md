# 6 Modern Animated Tab Navigation Designs

🌐 **[Live Demo — Try It Here!](https://horacio-yon.github.io/-6-Modern-Animated-Tab/)**

A collection of 6 modern, interactive tab navigation designs featuring smooth animations, glassmorphism effects, neon lighting, and spring-based physics.

Built with pure **HTML, CSS, and JavaScript** — no frameworks or dependencies required.

## 🎨 Navigation Styles

1. **Liquid Glass** — A stretching liquid lens with elegant glassmorphism effects.
2. **Dark Neon Lens** — A dark floating lens with vibrant neon borders and glowing highlights.
3. **Bounce** — A playful floating bubble with smooth bouncing and hopping animations.
4. **Neon Wave** — An animated neon wave powered by spring physics.
5. **Spotlight** — A dynamic spotlight that follows and illuminates the selected tab.
6. **Floating Button** — A floating navigation button featuring advanced physics-based animations.

## ✨ Features

- 🎨 6 unique animated navigation styles
- ⚡ Spring physics for natural and fluid motion
- 🔍 Glassmorphism with CSS `backdrop-filter`
- 🌈 Neon glows, lighting effects, and dynamic shadows
- 🎯 Smooth transitions with custom cubic-bezier curves
- 📱 Responsive layouts for desktop and mobile devices
- ♿ Keyboard navigation and accessibility support
- 🎭 Reduced-motion support using `prefers-reduced-motion`
- 🚀 Lightweight implementation without external frameworks

## 📁 Project Structure

```text
src/
├── index.html    # Main HTML structure
├── styles.css    # Styles, animations, and visual effects
├── script.js     # Interactions and animation physics
└── README.md     # Project documentation
```

## 🛠️ Technologies

**HTML5**
- Semantic HTML structure
- ARIA attributes for accessibility

**CSS3**
- CSS Custom Properties
- Glassmorphism and `backdrop-filter`
- Keyframe animations
- Custom cubic-bezier transitions
- Responsive media queries
- CSS Grid and Flexbox

**Vanilla JavaScript**
- ES6 classes
- `requestAnimationFrame`
- `ResizeObserver` API
- Custom spring physics engine
- Keyboard and pointer interactions

## 🎮 Interactions

- **Click / Tap:** Select a navigation tab.
- **Hover:** Trigger radial lighting and interactive effects.
- **Keyboard:** Navigate between tabs using arrow keys, Home, and End.

### Keyboard Controls

| Key | Action |
|---|---|
| `Tab` | Focus the active tab |
| `Arrow Right` | Move to the next tab |
| `Arrow Left` | Move to the previous tab |
| `Home` | Jump to the first tab |
| `End` | Jump to the last tab |
| `Enter / Space` | Activate the focused tab |

## ⚡ Spring Physics

The project uses a custom spring physics system implemented through the `Sp` class.

Its main parameters include:

- **`k` — Stiffness:** Controls the spring's resistance and responsiveness.
- **`d` — Damping:** Controls oscillation and how quickly the animation settles.

This system creates natural, fluid movements without relying exclusively on predefined easing functions.

## 🌈 Color Palette

The interface uses a dark color scheme with turquoise accents, soft glass surfaces, and neon highlights.

```css
--ac: #4fe3c1;                   /* Turquoise accent */
--glow: rgba(79, 227, 193, .45); /* Glow effect */
--tx2: rgba(255, 255, 255, .66); /* Secondary text */
--gl: rgba(255, 255, 255, .07);  /* Glass background */
--gb: rgba(255, 255, 255, .16);  /* Glass border */
```

**Background:** Dark green radial gradient using `#052120` and `#062322`.

## 🚀 Getting Started

No installation, build tools, or additional dependencies required.

1. Download or clone the repository.
2. Open `index.html` in your browser.
3. Explore the six navigation styles.
4. Interact with the tabs using your mouse, touch screen, or keyboard.

Alternatively, try the **[Live Demo](https://horacio-yon.github.io/-6-Modern-Animated-Tab/)** directly in your browser.

## 🔧 Customization

### Modify Navigation Tabs

Edit the `TABS` array in `script.js`:

```javascript
const TABS = [
  ['icon-key', 'Label'],
  // Add more tabs here
];
```

### Add Custom Icons

Update the `IC` object in `script.js` with your custom SVG paths.

### Customize Colors

Modify the CSS custom properties to create your own color scheme, neon effects, or glassmorphism variations.

## 🎬 Key Animations

- **`pop`:** Scale-based icon entrance animation.
- **`hop`:** Elastic bouncing effect with subtle deformation.
- **Spring transitions:** Physics-driven motion for fluid interactions.
- **Custom cubic-bezier:** Smooth elastic transitions and visual feedback.

## 📊 Performance

- `requestAnimationFrame` for smooth, synchronized animations.
- Delta-time throttling (maximum 30 ms) to prevent large animation jumps.
- Hardware-accelerated CSS transitions where supported.
- `ResizeObserver` for efficient responsive adjustments.
- Lightweight implementation using native browser APIs.

## ♿ Accessibility

- ARIA attributes such as `aria-label`, `aria-current`, and `aria-hidden`.
- Full keyboard navigation.
- Visible focus indicators.
- Screen-reader-friendly hidden labels using `.sr`.
- Reduced-motion preferences supported through `prefers-reduced-motion`.

## 👨‍💻 Author

**Codea con Horacio** ❤️💻

Creating interactive web experiences, creative UI animations, and modern frontend projects using HTML, CSS, and JavaScript.

🎥 YouTube: [@codeaconhoracio](https://www.youtube.com/@codeaconhoracio)

## 📄 License

An educational project created for learning, experimentation, and exploring modern web animation techniques.

---

⭐ If you enjoyed this project, consider giving the repository a star!

❤️ Thanks for supporting **Codea con Horacio**. Keep coding and creating! 🚀