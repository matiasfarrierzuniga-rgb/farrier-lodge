import React from 'react';

const LocationSection: React.FC = () => {
  const handleMapClick = () => {
    alert(
      'En una aplicación real, esto abrería Google Maps con nuestra ubicación: Farrier Lodge, Camino de la Montaña 2024, Valle Verde, CO 80401'
    );
  };

  return (
    <section className="location-section">
      <div className="location-container">
        <div className="location-info">
          <h2>Nuestra Ubicación</h2>
          <p>
            Farrier Lodge está ubicado en el corazón del Valle Verde, rodeado
            de naturaleza y montañas que ofrecen vistas espectaculares durante
            todo el año.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-label">Dirección:</p>
                <p>Camino de la Montaña 2024, Valle Verde, CO 80401</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Teléfono:</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-label">Correo Electrónico:</p>
                <p>reservas@farrierlodge.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">🗺️</span>
              <div>
                <p className="contact-label">Referencia:</p>
                <p>A 45 minutos del aeropuerto Internacional de Denver</p>
              </div>
            </div>
          </div>

          <button className="map-button" onClick={handleMapClick}>
            📍 Ver ubicación en mapa
          </button>
        </div>

        <div className="location-map-placeholder">
          <div className="map-placeholder-content">
            <p>🗺️</p>
            <p>Mapa - Farrier Lodge</p>
            <p style={{ fontSize: '12px', marginTop: '10px' }}>
              Ubicación: 39.5501° N, 105.2705° W
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
