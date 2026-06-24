// Proyecto Farrier Lodge

import React, { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import HotelInfo from './components/HotelInfo';
import RoomCard from './components/RoomCard';
import ReservationForm from './components/ReservationForm';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import { carouselImages } from './data/images';
import { rooms } from './data/rooms';
import { Room } from './types/hotel';
import './App.css';

const App: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);
  const [showReservationForm, setShowReservationForm] = useState(false);

  const handleNavigate = (section: string) => {
    setShowReservationForm(false);

    const sectionMap: { [key: string]: string } = {
      inicio: 'hero',
      habitaciones: 'rooms',
      reservas: 'reservation',
      ubicación: 'location',
      ubicacion: 'location',
      contacto: 'location',
    };

    const targetId = sectionMap[section];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setShowReservationForm(true);
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCancelReservation = () => {
    setShowReservationForm(false);
    setSelectedRoom(undefined);
  };

  return (
    <div className="app">
      <Header onNavigate={handleNavigate} />

      <main className="main-content">
        <section id="hero" className="section">
          <HeroCarousel images={carouselImages} />
        </section>

        <section id="info" className="section">
          <HotelInfo />
        </section>

        <section id="rooms" className="section">
          <div className="section-container">
            <h2 className="section-title">Nuestras Habitaciones</h2>
            <div className="rooms-grid">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  room={room}
                  onSelectRoom={handleSelectRoom}
                />
              ))}
            </div>
          </div>
        </section>

        {showReservationForm && (
          <section id="reservation" className="section">
            <div className="section-container">
              <ReservationForm
                selectedRoom={selectedRoom}
                onCancel={handleCancelReservation}
              />
            </div>
          </section>
        )}

        <section id="location" className="section">
          <LocationSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
