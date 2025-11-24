import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

export default function Creation() {
  const stages = [
    {
      number: '01',
      title: 'Производство компонентов',
      description: 'Изготовление отдельных деталей и узлов на специализированных производственных линиях с применением высокоточного оборудования.',
      icon: 'Factory'
    },
    {
      number: '02',
      title: 'Сборка секций',
      description: 'Объединение компонентов в крупные секции фюзеляжа, крыла и хвостового оперения. Использование автоматизированных сборочных стендов.',
      icon: 'Package'
    },
    {
      number: '03',
      title: 'Окончательная сборка',
      description: 'Соединение всех секций самолёта в единую конструкцию. Монтаж двигателей, шасси, систем управления и авионики.',
      icon: 'Settings'
    },
    {
      number: '04',
      title: 'Испытания',
      description: 'Комплекс наземных и лётных испытаний для проверки всех систем. Сертификация самолёта согласно международным стандартам.',
      icon: 'CheckCircle'
    }
  ];

  const processes = [
    { icon: 'Hammer', title: 'Механообработка', desc: 'Фрезерование и токарная обработка' },
    { icon: 'Flame', title: 'Литьё', desc: 'Производство сложных деталей' },
    { icon: 'Sparkles', title: 'Композиты', desc: 'Работа с композитными материалами' },
    { icon: 'Zap', title: 'Сварка', desc: 'Специальные методы соединения' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Создание самолётов
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            От первой детали до первого полёта: технологический процесс производства современных авиалайнеров
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Основные этапы создания
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-6xl font-bold text-blue-200">
                    {stage.number}
                  </div>
                  <div className="flex-1">
                    <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={stage.icon} size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-slate-600">
                      {stage.description}
                    </p>
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
            Производственные процессы
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {processes.map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={process.icon} size={28} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">{process.title}</h4>
                <p className="text-sm text-slate-600">{process.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Качество и контроль
            </h3>
            <p className="text-slate-600 mb-6">
              На каждом этапе производства проводится многоуровневый контроль качества. Применяются методы неразрушающего контроля, цифровые измерительные системы и автоматизированная инспекция.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">99.99%</div>
                <div className="text-slate-600">Точность изготовления</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-slate-600">Контроль качества</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="text-3xl font-bold text-blue-600 mb-1">1000+</div>
                <div className="text-slate-600">Проверок на самолёт</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
