import React from 'react';
import { HotelService } from '../types/hotel';

const HotelInfo: React.FC = () => {
  const services: HotelService[] = [
    { name: 'WiFi Gratuito', icon: '📡' },
    { name: 'Desayuno Incluido', icon: '🍽️' },
    { name: 'Parqueo Gratuito', icon: '🚗' },
    { name: 'Piscina', icon: '🏊' },
    { name: 'Restaurante 24/7', icon: '🍴' },
    { name: 'Recepción 24 horas', icon: '🔔' },
  ];

  return (
    <section className="hotel-info">
      <div className="hotel-info-container">
        <div className="hotel-description">
          <h2>Acerca de Farrier Lodge</h2>
          <p>
            En Farrier Lodge nos enorgullece ofrecerte una experiencia de
            hospedaje incomparable. Ubicado en un entorno privilegiado rodeado
            de naturaleza, nuestro hotel combina elegancia, confort y excelente
            atención al cliente.
          </p>
          <p>
            Con más de 15 años de trayectoria, somos la opción preferida de
            visitantes y viajeros de negocios. Cada detalle de nuestras
            instalaciones ha sido cuidadosamente diseñado para tu comodidad.
          </p>
        </div>

        <div className="services-grid">
          <h3>Nuestros Servicios</h3>
          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
