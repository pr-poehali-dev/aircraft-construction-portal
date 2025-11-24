import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/construction', label: 'Конструирование' },
    { to: '/creation', label: 'Создание' },
    { to: '/technologies', label: 'Технологии' },
    { to: '/problems', label: 'Проблемы' },
    { to: '/blog', label: 'Блог' },
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Icon name="Plane" size={32} className="text-blue-400" />
            <div>
              <div className="text-xl font-bold">AeroConstruct</div>
              <div className="text-xs text-blue-300">Инжиниринг будущего</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-blue-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
