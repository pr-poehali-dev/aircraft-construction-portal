import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Problems() {
  const challenges = [
    {
      icon: 'DollarSign',
      title: 'Высокая стоимость разработки',
      problem: 'Создание нового самолёта требует инвестиций до $15-20 млрд и 10-15 лет разработки. Огромные риски при недостижении целевых характеристик.',
      solutions: [
        'Международная кооперация производителей',
        'Государственное финансирование НИОКР',
        'Модульная архитектура для снижения затрат'
      ],
      status: 'В процессе'
    },
    {
      icon: 'Leaf',
      title: 'Экологические требования',
      problem: 'Авиация производит 2-3% глобальных выбросов CO2. Ужесточение экологических норм требует кардинального снижения эмиссии.',
      solutions: [
        'Разработка биотоплива и синтетического керосина',
        'Водородные силовые установки',
        'Оптимизация аэродинамики и веса'
      ],
      status: 'Критично'
    },
    {
      icon: 'Users',
      title: 'Дефицит кадров',
      problem: 'Острая нехватка высококвалифицированных инженеров и технических специалистов. Старение кадров и недостаток молодых профессионалов.',
      solutions: [
        'Образовательные программы и стипендии',
        'Партнёрства с университетами',
        'Повышение престижа профессии'
      ],
      status: 'Актуально'
    },
    {
      icon: 'Shield',
      title: 'Сертификация и безопасность',
      problem: 'Длительный процесс сертификации (3-5 лет). Необходимость доказательства абсолютной надёжности новых технологий.',
      solutions: [
        'Цифровые сертификационные процедуры',
        'Гармонизация международных стандартов',
        'Ускоренное тестирование с помощью симуляций'
      ],
      status: 'В процессе'
    },
    {
      icon: 'Wrench',
      title: 'Сложность производства',
      problem: 'Изготовление крупногабаритных деталей из композитов. Обеспечение точности сборки с допусками до 0.1 мм на конструкциях длиной 70+ метров.',
      solutions: [
        'Автоматизация производства',
        'Роботизированные сборочные линии',
        'Лазерные измерительные системы'
      ],
      status: 'Решается'
    },
    {
      icon: 'TrendingUp',
      title: 'Рыночная конкуренция',
      problem: 'Доминирование двух крупных производителей. Высокие барьеры входа для новых игроков. Геополитические факторы влияют на продажи.',
      solutions: [
        'Развитие региональных производителей',
        'Специализация на нишевых сегментах',
        'Кооперация вместо конкуренции'
      ],
      status: 'Стратегически'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Критично': return 'bg-red-100 text-red-700';
      case 'Актуально': return 'bg-orange-100 text-orange-700';
      case 'В процессе': return 'bg-blue-100 text-blue-700';
      case 'Решается': return 'bg-green-100 text-green-700';
      case 'Стратегически': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Нерешённые проблемы
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Актуальные вызовы авиационной индустрии и пути их преодоления
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={challenge.icon} size={32} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {challenge.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(challenge.status)}`}>
                          {challenge.status}
                        </span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Icon name="AlertCircle" size={18} className="text-red-500" />
                          Проблема
                        </h4>
                        <p className="text-slate-600 pl-6">
                          {challenge.problem}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Icon name="Lightbulb" size={18} className="text-green-500" />
                          Пути решения
                        </h4>
                        <ul className="space-y-2 pl-6">
                          {challenge.solutions.map((solution, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Icon name="ArrowRight" size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                              <span className="text-slate-600">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Будущее самолётостроения</h2>
            <p className="text-lg text-blue-100 mb-6">
              Несмотря на существующие вызовы, авиационная индустрия активно развивается. Инвестиции в новые технологии, международное сотрудничество и инновационный подход позволяют преодолевать сложности и создавать самолёты нового поколения.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">$180 млрд</div>
                <div className="text-blue-100">Инвестиции в НИОКР ежегодно</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">30+</div>
                <div className="text-blue-100">Новых моделей в разработке</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold mb-1">50%</div>
                <div className="text-blue-100">Сокращение выбросов к 2050</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
