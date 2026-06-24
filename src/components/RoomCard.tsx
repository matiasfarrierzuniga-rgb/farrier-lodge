import React from 'react';
import { Room } from '../types/hotel';

interface RoomCardProps {
  room: Room;
  onSelectRoom: (room: Room) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onSelectRoom }) => {
  return (
    <div className="room-card">
      <div className="room-image-container">
        <img src={room.image} alt={room.name} className="room-image" />
        <div className="availability-badge">
          {room.available ? (
            <span className="available">Disponible</span>
          ) : (
            <span className="unavailable">No disponible</span>
          )}
        </div>
      </div>

      <div className="room-content">
        <h3 className="room-name">{room.name}</h3>
        <p className="room-description">{room.description}</p>

        <div className="room-details">
          <div className="detail-item">
            <span className="detail-label">Capacidad:</span>
            <span className="detail-value">Hasta {room.maxCapacity} personas</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Precio por noche:</span>
            <span className="detail-value">${room.pricePerNight}</span>
          </div>
        </div>

        <button
          className="room-button"
          onClick={() => onSelectRoom(room)}
          disabled={!room.available}
        >
          {room.available ? 'Reservar Ahora' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
