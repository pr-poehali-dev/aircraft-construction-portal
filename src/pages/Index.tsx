import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Index() {
  const features = [
    {
      icon: 'Ruler',
      title: 'Конструирование',
      description: 'Современные методы проектирования авиатехники',
      link: '/construction'
    },
    {
      icon: 'Wrench',
      title: 'Создание',
      description: 'Технологические процессы производства самолётов',
      link: '/creation'
    },
    {
      icon: 'Cpu',
      title: 'Технологии',
      description: 'Инновационные решения в самолётостроении',
      link: '/technologies'
    },
    {
      icon: 'AlertCircle',
      title: 'Проблемы',
      description: 'Актуальные вызовы отрасли и пути решения',
      link: '/problems'
    },
    {
      icon: 'BookOpen',
      title: 'Блог',
      description: 'Экспертные статьи и практические советы',
      link: '/blog'
    },
    {
      icon: 'TrendingUp',
      title: 'Развитие',
      description: 'Перспективы авиационной индустрии',
      link: '/blog'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/7bcbdb48-c0b2-4e78-b800-6a529e4850c8/files/b482ecb0-6aee-4e9a-a4ac-e3bb73187c20.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Инжиниринг больших самолётов
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Профессиональный портал о технологиях конструирования и создания современной авиатехники
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/construction" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Начать изучение
              <Icon name="ArrowRight" size={20} />
            </Link>
            <Link 
              to="/blog" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2 border border-white/30"
            >
              Читать блог
              <Icon name="BookOpen" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Разделы портала
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Комплексная информация о всех аспектах создания больших самолётов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <Icon name={feature.icon} size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                О портале AeroConstruct
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Мы создаём профессиональное информационное пространство для специалистов авиационной отрасли, инженеров и всех, кто интересуется созданием больших самолётов.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Наша миссия — предоставить доступ к актуальным знаниям о технологиях, методах проектирования и производственных процессах в авиастроении.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  <span className="text-slate-700">Экспертные материалы</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  <span className="text-slate-700">Актуальные технологии</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500" />
                  <span className="text-slate-700">Практические решения</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Статистика отрасли</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-blue-100">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-blue-100">Статей в базе</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">10К+</div>
                  <div className="text-blue-100">Специалистов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
