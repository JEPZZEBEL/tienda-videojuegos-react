🎯 Descripción del proyecto

Este proyecto es una tienda virtual de videojuegos creada con React, como parte de la actividad “Mejorando funcionalidades clave en el eCommerce con React”.
Su objetivo es aplicar conceptos de estado, efectos y renderizado condicional, mejorando la experiencia de usuario mediante componentes interactivos y datos dinámicos.

🧩 Principales características:

Catálogo de productos cargado dinámicamente desde un archivo JSON.

Filtros por categoría y barra de búsqueda.

Carrito de compras interactivo con persistencia en localStorage.

Simulación de compra con planes de membresía.

Despliegue en línea con GitHub Pages.

🚀 Demo en línea

🔗 Ver Tienda Online

🧠 Tecnologías utilizadas
Tecnología	Descripción
⚛️ React	Framework principal para la interfaz.
🧩 React Router DOM	Manejo de rutas y navegación.
💾 LocalStorage	Persistencia de datos del carrito.
🖼️ CSS personalizado	Estilo visual con efectos neon y diseño moderno.
📦 gh-pages	Despliegue automatizado en GitHub Pages.
🧱 Estructura del proyecto
📦 tienda-videojuegos-react
├── 📁 public
│   ├── 📁 img              # Imágenes de productos
│   ├── 📁 data             # Archivo productos.json
│   ├── index.html
│   └── manifest.json
│
├── 📁 src
│   ├── 📁 components       # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── CategorySection.jsx
│   │   ├── ProductList.jsx
│   │   ├── MembershipPlans.jsx
│   │   ├── PaymentMethods.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │
│   ├── 📁 pages            # Páginas principales
│   │   └── CartPage.jsx
│   │
│   ├── App.js             # Lógica principal del sitio
│   ├── App.css            # Estilos globales
│   └── index.js
│
├── package.json
├── README.md
└── .gitignore

⚙️ Instalación y ejecución local

Sigue estos pasos si deseas ejecutar el proyecto en tu entorno local:

# 1️⃣ Clonar el repositorio
git clone https://github.com/JEPZZEBEL/tienda-videojuegos-react.git

# 2️⃣ Entrar al directorio del proyecto
cd tienda-videojuegos-react

# 3️⃣ Instalar dependencias
npm install

# 4️⃣ Ejecutar el servidor de desarrollo
npm start


Luego abre en tu navegador:
👉 http://localhost:3000

🌐 Despliegue en GitHub Pages

El proyecto se despliega automáticamente en GitHub Pages usando el paquete gh-pages.

Pasos:

# 1️⃣ Crear la build optimizada
npm run build

# 2️⃣ Desplegar a GitHub Pages
npm run deploy
