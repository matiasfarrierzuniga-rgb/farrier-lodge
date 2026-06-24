# 🏨 Farrier Lodge - Hotel Boutique

Aplicación web moderna para reservas de hotel construida con **React + TypeScript**. Proyecto educativo que demuestra mejores prácticas en desarrollo frontend.

## 🎯 Características

- ✅ Carrusel de imágenes interactivo con navegación
- ✅ Catálogo de 4 tipos de habitaciones
- ✅ Formulario de reserva con validaciones
- ✅ Cálculo automático de noches y precio total
- ✅ Información del hotel y servicios
- ✅ Sección de ubicación y contacto
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Paleta de colores profesional (verde, beige, dorado)
- ✅ 100% TypeScript - Sin JavaScript
- ✅ Componentes funcionales tipados

## 📁 Estructura del Proyecto

```
farrier-lodge/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navegación principal
│   │   ├── HeroCarousel.tsx         # Carrusel de imágenes
│   │   ├── HotelInfo.tsx            # Información del hotel
│   │   ├── RoomCard.tsx             # Tarjeta de habitación
│   │   ├── ReservationForm.tsx      # Formulario de reserva
│   │   ├── LocationSection.tsx      # Ubicación y contacto
│   │   └── Footer.tsx               # Pie de página
│   ├── data/
│   │   ├── rooms.ts                 # Datos de habitaciones
│   │   └── images.ts                # Datos de carrusel
│   ├── types/
│   │   └── hotel.ts                 # Interfaces TypeScript
│   ├── App.tsx                      # Componente principal
│   ├── App.css                      # Estilos globales
│   └── main.tsx                     # Punto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🚀 Instalación y Uso

### 1. Clonar o descargar el proyecto

```bash
cd farrier-lodge
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

### 4. Build para producción

```bash
npm run build
```

### 5. Vista previa del build

```bash
npm run preview
```

## 📋 Componentes Principales

### Header
- Logo del hotel
- Navegación a 5 secciones principales
- Barra sticky con scroll suave

### HeroCarousel
- Carrusel con 4 imágenes
- Botones de navegación (anterior/siguiente)
- Indicadores de posición
- Overlay con título y subtítulo

### HotelInfo
- Descripción del hotel
- 6 servicios destacados (WiFi, desayuno, parqueo, piscina, restaurante, recepción)
- Diseño en grid

### RoomCard
- Tarjeta visual de cada habitación
- Imagen, nombre, descripción
- Capacidad máxima y precio por noche
- Badge de disponibilidad
- Botón para reservar

### ReservationForm
- Selección de habitación
- Inputs de fecha (check-in/check-out)
- Cantidad de huéspedes
- **Validaciones completas**
- **Cálculo automático de noches y precio total**
- Resumen de reserva
- Confirmación con alert

### LocationSection
- Dirección, teléfono, correo
- Referencia geográfica
- Botón "Ver ubicación en mapa"
- Placeholder visual del mapa

## 💾 Datos de Ejemplo

### Habitaciones Disponibles

1. **Habitación Estándar** - $80/noche - Hasta 2 personas
2. **Habitación Deluxe** - $150/noche - Hasta 2 personas
3. **Suite Familiar** - $250/noche - Hasta 6 personas
4. **Habitación Vista al Jardín** - $120/noche - Hasta 2 personas

## 🎨 Paleta de Colores

- **Verde Oscuro Principal**: `#1a5c3d`
- **Verde Claro**: `#2a8659`
- **Dorado Acentuado**: `#d4af37`
- **Beige**: `#f5e6d3`
- **Blanco**: `#ffffff`
- **Gris Claro**: `#f0f0f0`
- **Gris Oscuro**: `#333333`

## 📱 Responsividad

- ✅ Desktop: 1200px+
- ✅ Tablet: 768px - 1199px
- ✅ Móvil: < 768px

## ✨ Validaciones del Formulario

- ✅ Fecha de salida posterior a entrada
- ✅ Cantidad de huéspedes dentro de capacidad
- ✅ Fecha de entrada requerida
- ✅ Fecha de salida requerida
- ✅ Habitación disponible

## 🔧 Tecnologías Utilizadas

- **React 18.2** - Librería UI
- **TypeScript 5.2** - Lenguaje tipado
- **Vite 5** - Build tool
- **CSS3** - Estilos nativos

## 📝 TypeScript Interfaces

```typescript
interface CarouselImage {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

interface Room {
  id: number;
  name: string;
  description: string;
  pricePerNight: number;
  maxCapacity: number;
  image: string;
  available: boolean;
}

interface Reservation {
  roomId: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
}
```

## 📚 Propósito Educativo

Este proyecto es una práctica educativa que demuestra:

- Organización de componentes en React
- Tipado seguro con TypeScript
- Manejo de estado con hooks (useState, useEffect)
- Validación de formularios
- Cálculos automáticos
- Diseño responsive con CSS Grid/Flexbox
- Buenas prácticas de desarrollo
- Props tipadas en componentes

## 🎓 Lecciones Aprendidas

- Estructura modular de componentes
- TypeScript strict mode
- Props y state management
- Event handling en React
- Validación de datos
- Diseño responsivo
- Nombres significativos en TypeScript

## 📄 Licencia

Este proyecto es de propósito educativo. Siéntete libre de usarlo como referencia para tu aprendizaje.

---

**Desarrollado como práctica educativa de React + TypeScript**
