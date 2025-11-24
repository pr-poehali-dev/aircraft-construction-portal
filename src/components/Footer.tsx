import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Plane" size={24} className="text-blue-400" />
              <span className="font-bold text-lg">AeroConstruct</span>
            </div>
            <p className="text-slate-400 text-sm">
              Профессиональный портал о конструировании и создании больших самолётов
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Главная</Link></li>
              <li><Link to="/construction" className="hover:text-blue-400 transition-colors">Конструирование</Link></li>
              <li><Link to="/creation" className="hover:text-blue-400 transition-colors">Создание</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/technologies" className="hover:text-blue-400 transition-colors">Технологии</Link></li>
              <li><Link to="/problems" className="hover:text-blue-400 transition-colors">Проблемы</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Блог</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@aeroconstruct.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 AeroConstruct. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
