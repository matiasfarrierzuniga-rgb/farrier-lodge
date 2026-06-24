import React from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const navItems = ['Inicio', 'Habitaciones', 'Reservas', 'Ubicación', 'Contacto'];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🏨 Farrier Lodge</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className="nav-button"
                  onClick={() => onNavigate(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
