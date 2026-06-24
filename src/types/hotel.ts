export interface CarouselImage {
  id: number;
  url: string;
  title: string;
  subtitle: string;
}

export interface Room {
  id: number;
  name: string;
  description: string;
  pricePerNight: number;
  maxCapacity: number;
  image: string;
  available: boolean;
}

export interface Reservation {
  roomId: number;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  nights: number;
  pricePerNight: number;
  totalPrice: number;
}

export interface HotelService {
  name: string;
  icon: string;
}
