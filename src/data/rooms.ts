import { Room } from '../types/hotel';

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Habitación Estándar',
    description: 'Habitación acogedora con cama matrimonial, baño privado y vista a la montaña. Perfecta para parejas o viajeros individuales que buscan confort a buen precio.',
    pricePerNight: 80,
    maxCapacity: 2,
    image: 'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=350&fit=crop',
    available: true,
  },
  {
    id: 2,
    name: 'Habitación Deluxe',
    description: 'Habitación premium con cama king-size, jacuzzi privado, minibar y balcón con vistas panorámicas. Disfruta de lujos adicionales durante tu estadía.',
    pricePerNight: 150,
    maxCapacity: 2,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=350&fit=crop',
    available: true,
  },
  {
    id: 3,
    name: 'Suite Familiar',
    description: 'Amplia suite con dos dormitorios, sala de estar y cocina equipada. Ideal para familias o grupos de hasta 6 personas. Incluye acceso a zona de juegos infantiles.',
    pricePerNight: 250,
    maxCapacity: 6,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=350&fit=crop',
    available: true,
  },
  {
    id: 4,
    name: 'Habitación Vista al Jardín',
    description: 'Hermosa habitación con vistas directas al jardín zen del hotel. Incluye área de descanso y acceso privado a la terraza. Perfecta para disfrutar de la naturaleza.',
    pricePerNight: 120,
    maxCapacity: 2,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=350&fit=crop',
    available: true,
  },
];
