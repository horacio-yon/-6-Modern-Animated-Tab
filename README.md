# Navigation Tabs - 6 Estilos Animados

Proyecto de navegación con tabs que presenta 6 estilos diferentes de animación e interacción, con efectos glassmorphism y animaciones suaves basadas en física.

## 🎨 Estilos Incluidos

1. **Liquid Glass** - Lente líquida con efecto glassmorphism que se estira
2. **Dark Neon Lens** - Lente oscura con bordes neón brillantes
3. **Bounce** - Burbuja flotante que rebota con animación hop
4. **Neon Wave** - Onda neón animada con física de resorte
5. **Spotlight** - Foco de luz que ilumina el tab seleccionado
6. **Floating Button** - Botón flotante con animación de física avanzada

## 📁 Estructura del Proyecto

```
src/
├── index.html       # HTML principal con estructura semántica
├── styles.css       # Estilos CSS con animaciones y efectos
├── script.js        # Lógica JavaScript con física de animación
└── README.md        # Este archivo
```

## 🚀 Características

- ✨ 6 estilos de animación únicos
- 🎯 Física de animación con sistema de resortes (Spring Physics)
- 🔍 Efectos glassmorphism con backdrop-filter
- ♿ Accesible con navegación por teclado (flechas, Home, End)
- 📱 Responsive y optimizado para móviles
- 🎭 Respeta preferencias de movimiento reducido (prefers-reduced-motion)
- 🌟 Efectos de glow y sombras neón
- 💫 Transiciones suaves con cubic-bezier personalizadas

## 🎮 Interacción

- **Click/Tap**: Selecciona un tab
- **Teclado**:
  - `Arrow Right/Left`: Navega entre tabs
  - `Home`: Primer tab
  - `End`: Último tab
- **Hover**: Efectos de iluminación radial en la barra

## 🛠️ Tecnologías

- HTML5 semántico
- CSS moderno con:
  - Variables CSS (Custom Properties)
  - Glassmorphism (backdrop-filter)
  - Animaciones keyframes
  - Media queries
  - Grid y Flexbox
- JavaScript vanilla con:
  - Clases ES6
  - ResizeObserver API
  - RequestAnimationFrame
  - Sistema de física con resortes

## 🎨 Sistema de Física

El proyecto implementa un sistema de animación basado en física de resortes (Spring Physics) mediante la clase `Sp`:

- **k**: Constante de rigidez del resorte
- **d**: Constante de amortiguamiento
- Animaciones fluidas y naturales sin necesidad de easing predefinidos

## 🌈 Paleta de Colores

```css
--ac: #4fe3c1          /* Color de acento (turquesa) */
--glow: rgba(79, 227, 193, .45)  /* Efecto de brillo */
--tx2: rgba(255, 255, 255, .66)  /* Texto secundario */
--gl: rgba(255, 255, 255, .07)   /* Fondo glass light */
--gb: rgba(255, 255, 255, .16)   /* Borde glass */
```

Fondo principal: degradado radial en tonos verde oscuro (#052120 - #062322)

## 📦 Uso

1. Abre `index.html` en tu navegador
2. Explora los diferentes estilos de navegación
3. Interactúa con los tabs mediante click o teclado

## ♿ Accesibilidad

- Roles ARIA apropiados (`aria-label`, `aria-current`, `aria-hidden`)
- Navegación completa por teclado
- Estados de focus visibles
- Textos ocultos para screen readers (clase `.sr`)
- Respeto por `prefers-reduced-motion`

## 🎯 Navegación por Teclado

Cada barra de tabs soporta:
- `Tab`: Enfoca el tab activo actual
- `Arrow Right`: Siguiente tab
- `Arrow Left`: Tab anterior
- `Home`: Primer tab
- `End`: Último tab
- `Enter/Space`: Activa el tab enfocado

## 📊 Rendimiento

- Uso de `requestAnimationFrame` para animaciones suaves a 60fps
- Throttling de delta time para evitar saltos (máx 30ms)
- Transiciones CSS hardware-accelerated
- ResizeObserver para ajuste responsive eficiente

## 🔧 Personalización

Para modificar los tabs, edita el array `TABS` en `script.js`:

```javascript
const TABS = [
  ['icon-key', 'Label'],
  // Agrega más tabs aquí
];
```

Para agregar iconos, actualiza el objeto `IC` con paths SVG.

## 🎬 Animaciones Clave

- **pop**: Aparición del icono con escala
- **hop**: Rebote de la burbuja con deformación
- Transiciones con cubic-bezier personalizadas para efectos elásticos

## 👨‍💻 Autor

**Codea con Horacio**
- YouTube: [@codeaconhoracio](https://www.youtube.com/@codeaconhoracio)

## 📄 Licencia

Proyecto educativo de código abierto.

---

¡Disfruta experimentando con estos efectos de navegación! 🚀
