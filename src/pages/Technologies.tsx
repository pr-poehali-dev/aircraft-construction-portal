import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Technologies() {
  const technologies = [
    {
      icon: 'Layers',
      title: 'Композитные материалы',
      description: 'Углепластик и стеклопластик обеспечивают высокую прочность при минимальном весе. До 50% конструкции современных самолётов изготавливается из композитов.',
      benefits: ['Снижение веса на 20%', 'Увеличение прочности', 'Коррозионная стойкость']
    },
    {
      icon: 'Cpu',
      title: 'Цифровое проектирование',
      description: 'CAD/CAM системы и цифровые двойники позволяют моделировать поведение самолёта до начала производства. BIM-технологии оптимизируют все этапы создания.',
      benefits: ['Сокращение времени проектирования', 'Виртуальные испытания', 'Снижение затрат']
    },
    {
      icon: 'Printer',
      title: '3D-печать',
      description: 'Аддитивные технологии применяются для производства сложных деталей двигателей, интерьера и систем. Позволяют создавать геометрию, невозможную традиционными методами.',
      benefits: ['Уникальная геометрия', 'Быстрое прототипирование', 'Персонализация деталей']
    },
    {
      icon: 'Wind',
      title: 'Аэродинамика',
      description: 'Компьютерное моделирование воздушных потоков (CFD) и испытания в аэродинамических трубах. Разработка законцовок крыла и оптимизация обтекаемости.',
      benefits: ['Снижение расхода топлива', 'Улучшение управляемости', 'Уменьшение шума']
    },
    {
      icon: 'Shield',
      title: 'Системы безопасности',
      description: 'Многоканальные резервированные системы управления. Автоматическая защита от опасных режимов полёта. Системы предотвращения столкновений.',
      benefits: ['Максимальная надёжность', 'Автоматическая защита', 'Мониторинг в реальном времени']
    },
    {
      icon: 'Lightbulb',
      title: 'Энергоэффективность',
      description: 'Новые поколения двигателей с высоким КПД. Системы рекуперации энергии и оптимизированные генераторы. Использование электрических приводов.',
      benefits: ['Экономия топлива до 25%', 'Снижение выбросов', 'Экологичность']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Технологии самолётостроения
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Инновационные решения и передовые технологии, определяющие будущее авиационной индустрии
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 w-14 h-14 rounded-lg flex items-center justify-center">
                      <Icon name={tech.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {tech.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6">
                    {tech.description}
                  </p>
                  <div className="space-y-2">
                    {tech.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Перспективные направления
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Icon name="Battery" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Электрические самолёты</h4>
              <p className="text-slate-600">Разработка электрических и гибридных силовых установок для коротких маршрутов</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Icon name="Atom" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Водородные технологии</h4>
              <p className="text-slate-600">Использование водородного топлива как экологичной альтернативы керосину</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <Icon name="Bot" size={32} className="text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Автономные системы</h4>
              <p className="text-slate-600">ИИ для управления полётом и оптимизации маршрутов в реальном времени</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
