import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import AnimatedSection from '@/components/AnimatedSection';

export default function Construction() {
  const sections = [
    {
      icon: 'Compass',
      title: 'Проектирование конструкции',
      content: 'Современное проектирование самолётов начинается с создания цифровых моделей, использующих CAD-системы. Инженеры разрабатывают аэродинамический профиль, обеспечивающий оптимальные лётные характеристики.'
    },
    {
      icon: 'Box',
      title: 'Фюзеляж и крыло',
      content: 'Конструкция фюзеляжа проектируется с учётом максимальной прочности при минимальном весе. Крыло разрабатывается с учётом аэродинамических нагрузок, топливных баков и систем механизации.'
    },
    {
      icon: 'Zap',
      title: 'Силовые установки',
      content: 'Размещение двигателей требует точного расчёта центра тяжести и аэродинамического баланса. Конструкция пилонов и креплений должна выдерживать огромные нагрузки при различных режимах полёта.'
    },
    {
      icon: 'Layers',
      title: 'Системы управления',
      content: 'Проектирование систем управления включает механические и электрические компоненты. Современные fly-by-wire системы обеспечивают точное управление и защиту от критических режимов.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Конструирование больших самолётов
            </h1>
            <p className="text-xl text-blue-100">
              Комплексный подход к проектированию авиационных конструкций с использованием передовых технологий и инженерных решений
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={section.icon} size={28} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Этапы конструирования
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">1. Концептуальное проектирование</h4>
              <p className="text-slate-600">Определение основных параметров: дальность полёта, пассажировместимость, крейсерская скорость. Создание первичных эскизов и расчёт базовых характеристик.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">2. Предварительное проектирование</h4>
              <p className="text-slate-600">Детальная проработка конструкции, выбор материалов, расчёт нагрузок. Создание 3D-моделей и проведение компьютерных симуляций.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
              <h4 className="text-xl font-semibold text-slate-900 mb-2">3. Детальное проектирование</h4>
              <p className="text-slate-600">Разработка рабочей документации, создание чертежей всех узлов и агрегатов. Подготовка технологических карт производства.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}