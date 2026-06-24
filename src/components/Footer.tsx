import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Farrier Lodge</h3>
          <p>Tu destino perfecto para descanso y confort.</p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#habitaciones">Habitaciones</a>
            </li>
            <li>
              <a href="#reservas">Reservas</a>
            </li>
            <li>
              <a href="#ubicacion">Ubicación</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ reservas@farrierlodge.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Farrier Lodge. Todos los derechos reservados. |
          Política de Privacidad | Términos de Servicio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
