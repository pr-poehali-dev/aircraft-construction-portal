import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Article {
  icon: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
}

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  if (!article) return null;

  const fullContent = `
${article.excerpt}

## Введение

Авиационная промышленность постоянно развивается, внедряя новые технологии и методы. В данной статье мы подробно рассмотрим ключевые аспекты темы, основываясь на опыте ведущих специалистов отрасли.

## Основная проблематика

Современные вызовы требуют комплексного подхода к решению технических задач. Инженеры сталкиваются с необходимостью балансировать между требованиями безопасности, эффективности и экономичности.

### Технические аспекты

- Применение передовых материалов и технологий
- Оптимизация конструктивных решений
- Соответствие международным стандартам
- Интеграция инновационных систем

### Практические рекомендации

На основе многолетнего опыта специалистов можно выделить ключевые направления работы:

1. **Планирование** — детальная проработка всех этапов
2. **Контроль качества** — непрерывный мониторинг параметров
3. **Документирование** — фиксация всех изменений и решений
4. **Тестирование** — комплексная проверка систем

## Заключение

Внедрение описанных методов позволяет значительно повысить эффективность работы и минимизировать риски. Постоянное совершенствование процессов является залогом успешного развития авиационной отрасли.

---

**Автор:** Эксперт в области авиастроения  
**Дата публикации:** ${article.date}  
**Время чтения:** ${article.readTime}
`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
              <Icon name={article.icon} size={24} className="text-blue-600" />
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <DialogTitle className="text-3xl font-bold text-slate-900 mb-4">
            {article.title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center gap-6 text-sm text-slate-500 mb-6 pb-6 border-b">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Eye" size={16} />
            <span>1,234 просмотра</span>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          {fullContent.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n');
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-slate-600">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            if (/^\d+\./.test(paragraph)) {
              const items = paragraph.split('\n');
              return (
                <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
                  {items.map((item, i) => {
                    const [num, ...rest] = item.split(' ');
                    const text = rest.join(' ');
                    const [bold, ...normal] = text.split('**');
                    return (
                      <li key={i} className="text-slate-600">
                        {bold && <strong className="font-semibold">{bold.replace('**', '')}</strong>}
                        {normal.join(' ')}
                      </li>
                    );
                  })}
                </ol>
              );
            }
            if (paragraph.startsWith('---')) {
              return <hr key={index} className="my-8 border-slate-200" />;
            }
            if (paragraph.startsWith('**')) {
              return (
                <p key={index} className="text-slate-600 my-4">
                  <strong className="font-semibold">{paragraph.replace(/\*\*/g, '')}</strong>
                </p>
              );
            }
            return (
              <p key={index} className="text-slate-600 leading-relaxed my-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700">
                <Icon name="ThumbsUp" size={18} />
                <span className="text-sm">Полезно (245)</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700">
                <Icon name="Share2" size={18} />
                <span className="text-sm">Поделиться</span>
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white">
              <Icon name="Bookmark" size={18} />
              <span className="text-sm">Сохранить</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
