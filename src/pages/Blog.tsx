import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const articles = [
    {
      icon: 'Flame',
      title: 'Проблемы усталости металла в авиаконструкциях',
      excerpt: 'Циклические нагрузки приводят к микротрещинам. Рекомендации по мониторингу и профилактике усталостных разрушений.',
      category: 'Материалы',
      date: '15 ноября 2024',
      readTime: '8 мин'
    },
    {
      icon: 'Wind',
      title: 'Оптимизация аэродинамики законцовок крыла',
      excerpt: 'Законцовки типа winglet снижают индуктивное сопротивление до 5%. Практические рекомендации по проектированию.',
      category: 'Аэродинамика',
      date: '12 ноября 2024',
      readTime: '10 мин'
    },
    {
      icon: 'Zap',
      title: 'Интеграция электрических систем нового поколения',
      excerpt: 'Переход на 270V DC системы электроснабжения. Решение проблем электромагнитной совместимости и надёжности.',
      category: 'Авионика',
      date: '8 ноября 2024',
      readTime: '12 мин'
    },
    {
      icon: 'Layers',
      title: 'Композитные материалы: вызовы производства',
      excerpt: 'Контроль качества укладки слоёв препрега. Методы предотвращения расслоений и пустот в композитных деталях.',
      category: 'Технологии',
      date: '5 ноября 2024',
      readTime: '15 мин'
    },
    {
      icon: 'Shield',
      title: 'Защита от молнии в авиаконструкциях',
      excerpt: 'Современные методы молниезащиты композитных панелей. Требования сертификации и проверочные испытания.',
      category: 'Безопасность',
      date: '1 ноября 2024',
      readTime: '9 мин'
    },
    {
      icon: 'Settings',
      title: 'Проблемы точности сборки крупногабаритных узлов',
      excerpt: 'Обеспечение допусков 0.1 мм на длине 70 метров. Лазерные системы измерения и автоматизированная юстировка.',
      category: 'Производство',
      date: '28 октября 2024',
      readTime: '11 мин'
    },
    {
      icon: 'Thermometer',
      title: 'Тепловое управление в современных самолётах',
      excerpt: 'Отвод тепла от авионики и силовых установок. Проблемы перегрева при высоких температурах окружающей среды.',
      category: 'Системы',
      date: '24 октября 2024',
      readTime: '7 мин'
    },
    {
      icon: 'Volume2',
      title: 'Снижение шума на этапе проектирования',
      excerpt: 'Новые нормы ICAO Annex 16. Методы акустической оптимизации двигателей и планера самолёта.',
      category: 'Экология',
      date: '20 октября 2024',
      readTime: '13 мин'
    },
    {
      icon: 'Database',
      title: 'Цифровой двойник: от проекта до эксплуатации',
      excerpt: 'Создание и поддержка цифровой модели самолёта. Предиктивное обслуживание на основе данных датчиков.',
      category: 'Цифровизация',
      date: '16 октября 2024',
      readTime: '14 мин'
    }
  ];

  const categories = ['Все', 'Материалы', 'Аэродинамика', 'Авионика', 'Технологии', 'Безопасность', 'Производство'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Блог о самолётостроении
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Экспертные статьи, практические советы и решения актуальных проблем авиационной индустрии
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-blue-500 hover:text-white transition-colors text-sm font-medium text-slate-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={article.icon} size={24} className="text-white" />
                  </div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-white text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-8 md:p-12 text-white text-center">
            <Icon name="Mail" size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Подписка на новости</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Получайте свежие статьи, экспертные материалы и новости авиационной индустрии прямо на почту
            </p>
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              />
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
