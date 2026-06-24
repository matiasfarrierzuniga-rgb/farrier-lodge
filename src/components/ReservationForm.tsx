import React, { useState, useEffect } from 'react';
import { Room, Reservation } from '../types/hotel';
import { rooms } from '../data/rooms';

interface ReservationFormProps {
  selectedRoom?: Room;
  onCancel: () => void;
}

const ReservationForm: React.FC<ReservationFormProps> = ({
  selectedRoom,
  onCancel,
}) => {
  const [formData, setFormData] = useState({
    roomId: selectedRoom?.id || 0,
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const [reservation, setReservation] = useState<Reservation | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  const currentRoom = rooms.find((r) => r.id === formData.roomId) || rooms[0];

  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev) => ({
        ...prev,
        roomId: selectedRoom.id,
      }));
    }
  }, [selectedRoom]);

  const calculateNights = (checkIn: string, checkOut: string): number => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.checkIn) {
      newErrors.push('Por favor, selecciona una fecha de entrada.');
    }

    if (!formData.checkOut) {
      newErrors.push('Por favor, selecciona una fecha de salida.');
    }

    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      if (checkOutDate <= checkInDate) {
        newErrors.push(
          'La fecha de salida debe ser posterior a la fecha de entrada.'
        );
      }
    }

    if (formData.guests < 1) {
      newErrors.push('La cantidad de huéspedes debe ser al menos 1.');
    }

    if (formData.guests > currentRoom.maxCapacity) {
      newErrors.push(
        `La habitación solo puede alojar hasta ${currentRoom.maxCapacity} personas.`
      );
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const nights = calculateNights(formData.checkIn, formData.checkOut);
    const totalPrice = nights * currentRoom.pricePerNight;

    const newReservation: Reservation = {
      roomId: currentRoom.id,
      roomName: currentRoom.name,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      nights,
      pricePerNight: currentRoom.pricePerNight,
      totalPrice,
    };

    setReservation(newReservation);
    setShowSummary(true);
  };

  const handleConfirm = () => {
    if (reservation) {
      alert(
        `✅ Reserva registrada correctamente para Farrier Lodge.\n\nHabitación: ${reservation.roomName}\nFecha entrada: ${reservation.checkIn}\nFecha salida: ${reservation.checkOut}\nNoches: ${reservation.nights}\nPrecio total: $${reservation.totalPrice.toFixed(2)}`
      );
      setShowSummary(false);
      setFormData({
        roomId: selectedRoom?.id || 0,
        checkIn: '',
        checkOut: '',
        guests: 1,
      });
      setReservation(null);
    }
  };

  if (showSummary && reservation) {
    return (
      <div className="reservation-summary">
        <h3>Resumen de tu Reserva</h3>
        <div className="summary-details">
          <p>
            <strong>Habitación:</strong> {reservation.roomName}
          </p>
          <p>
            <strong>Fecha de entrada:</strong> {reservation.checkIn}
          </p>
          <p>
            <strong>Fecha de salida:</strong> {reservation.checkOut}
          </p>
          <p>
            <strong>Huéspedes:</strong> {reservation.guests}
          </p>
          <p>
            <strong>Número de noches:</strong> {reservation.nights}
          </p>
          <p>
            <strong>Precio por noche:</strong> ${reservation.pricePerNight}
          </p>
          <p className="total-price">
            <strong>Precio total:</strong> ${reservation.totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="summary-buttons">
          <button className="confirm-button" onClick={handleConfirm}>
            Confirmar Reserva
          </button>
          <button
            className="cancel-button"
            onClick={() => setShowSummary(false)}
          >
            Editar Reserva
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <h2>Realiza tu Reserva</h2>

      <div className="form-group">
        <label htmlFor="room-select">Selecciona una Habitación:</label>
        <select
          id="room-select"
          value={formData.roomId}
          onChange={(e) =>
            setFormData({
              ...formData,
              roomId: parseInt(e.target.value),
            })
          }
        >
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name} - ${room.pricePerNight}/noche
              {!room.available ? ' (No disponible)' : ''}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="check-in">Fecha de Entrada:</label>
        <input
          id="check-in"
          type="date"
          value={formData.checkIn}
          onChange={(e) =>
            setFormData({
              ...formData,
              checkIn: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="check-out">Fecha de Salida:</label>
        <input
          id="check-out"
          type="date"
          value={formData.checkOut}
          onChange={(e) =>
            setFormData({
              ...formData,
              checkOut: e.target.value,
            })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="guests">Cantidad de Huéspedes:</label>
        <input
          id="guests"
          type="number"
          min="1"
          max={currentRoom.maxCapacity}
          value={formData.guests}
          onChange={(e) =>
            setFormData({
              ...formData,
              guests: parseInt(e.target.value),
            })
          }
        />
      </div>

      {errors.length > 0 && (
        <div className="error-messages">
          {errors.map((error, index) => (
            <p key={index} className="error-message">
              ❌ {error}
            </p>
          ))}
        </div>
      )}

      <div className="form-buttons">
        <button type="submit" className="submit-button">
          Calcular y Revisar
        </button>
        <button
          type="button"
          className="cancel-button"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
