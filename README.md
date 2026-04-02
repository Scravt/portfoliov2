# Portfolio V2 - Technical Snapshot & Documentation

Este documento sirve como "radiografía" arquitectónica y técnica del proyecto. Detalla las tecnologías, librerías, y efectos visuales implementados en cada sección, con la intención de facilitar el mantenimiento futuro y la detección temprana de cuellos de botella de rendimiento.

## 🛠 Tech Stack Core

El proyecto es una aplicación **React 19** impulsada por **Vite**, y estilizada con **Tailwind CSS v4**.

### Librerías Clave & Herramientas:
- **WebGL / 3D:** `@react-three/fiber`, `@react-three/drei`, `three`
- **Animaciones & Scroll:** `gsap`, `@gsap/react`, `react-countup`
- **Utilidades:** `react-responsive` (media queries), `@emailjs/browser` (formularios de contacto)

---

## 📂 Arquitectura del Proyecto

El código fuente está estructurado de la siguiente forma dentro de `/src`:
- **`/components`**: Componentes reusables de UI (botones, contadores, tarjetas con efectos). Contiene las subcarpetas `HeroModels` y `ContactModels` para lógicas y modelos 3D aislados.
- **`/sections`**: Lógica a nivel de página ("secciones" grandes como Hero, Experiencia, Contacto).
- **`/constants`**: Archivos de datos estáticos (texto, links de imágenes, detalles de tarjetas de experiencia).
- **`index.css`**: Configuración extensa de CSS base (con directivas `@theme` de Tailwind 4) y la lógica subyacente para filtros e iluminación visual pesada.

---

## 🎨 Efectos Visuales y Zonas de Alto Rendimiento

### 1. Modelos 3D Sensibles al Rendimiento
Se utilizan elementos pesados en WebGL alimentados por React Three Fiber (`<Canvas>`).
* **Hero Section** (`HeroExpierience.jsx` -> `Room.jsx`): Renderiza el archivo `/models/optimized-room.glb`. Utiliza un `OrbitControls` con rotación automática (`autoRotate`). Puntos a vigilar: el GLTF es asíncrono y pesado (ocupa memoria VRAM); mantener límites de resolución (`dpr={[1, 1.5]}`) ayuda.
* **Contact Section** (`ContactExperience.jsx` -> `Computer-optimized.jsx`): Renderiza una computadora animada 3D al lado del formulario. Genera sombras e iluminación volumétrica.

> ⚠️ **Potenciales riesgos:** 
> Los `<Canvas>` de 3D suelen causar congelamientos si se sobrecargan de polígonos, si múltiples canvas compiten por la GPU en móviles, o si se alteran las clases de "display" (como `hide` o `display: none`) provocando fallos en el *ResizeObserver* de WebGL (Context Lost).

### 2. Animaciones Controladas por Scroll (GSAP)
La librería GSAP interactúa directamente con el scroll de la ventana a través de `ScrollTrigger`.
* **Showcase Section:** Tarjetas de proyectos (links y fotos) que deslizan (`y: 50` hacia `0`) al hacer scroll sobre ellas.
* **Experience Section:** Las tarjetas del "timeline" (`.timeline-card`) entran lateralmente desde fuera de la pantalla (`xPercent: -100`). Además, una línea central animada modifica su altura acorde al progreso del scroll local (`scaleY: 1 - self.progress`).

> ⚠️ **Potenciales riesgos:** 
> Los `ScrollTrigger` en elementos muy grandes pueden causar el efecto "bloqueo de scroll" (stuttering) en navegadores móviles (iOS Safari, Android Chrome) al recalcular posiciones y superponerse con los refrescos nativos del navegador. 

### 3. Filtros CSS Demandantes (Blur/Glow)
En `index.css`, componentes como tarjetas o cajas de texto usan filtros de post-procesado:
* Clase `.glow` o animaciones `hover::before` utilizan `filter: blur(10px) saturate(200%);`

> ⚠️ **Potenciales riesgos:** 
> Aplicar `filter: blur()` o fondos tipo `backdrop-filter` extensos consume muchísimos recursos de la GPU en tiempo del ciclo de pintado (Paint phase) y puede destruir la tasa de FPS (fotogramas por segundo) especialmente si están superpuestos a canvas en 3D (Z-Index war) o siendo animados por GSAP en móviles.

---

## 🔌 Integraciones Externas
* **EmailJS:** En la sección form (`Contact.jsx`), configurado mediante hooks de React sin validación compleja en backend, utilizando claves en el archivo `.env` para envíos directos (*Service ID*, *Template ID*, *Public Key*).

## 🚀 Recomendaciones Futuras
En caso de detectar caídas de fotogramas, congelamientos, o comportamiento inesperado (scroll jank):
1. **Modelos 3D:** Simplificar los modelos con herramientas como [*gltf-pipeline* o *gltfjsx*](https://github.com/pmndrs/gltfjsx).
2. **Desactivar condicionalmente efectos costosos:** Emplear `useMediaQuery` de *react-responsive* (usado en el Hero) para remover lógicamente del DOM los canvas de Three o anular ejecuciones GSAP cuando se detecten pantallas de celular.
3. **Optimización CSS:** Eliminar temporalmente propiedades `.glow` en `index.css` para perfilar la causa raíz del render-lag. 
