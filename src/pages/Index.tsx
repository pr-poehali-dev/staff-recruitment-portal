import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const Index = () => {
  const [positionLevel, setPositionLevel] = useState([50]);
  const [urgency, setUrgency] = useState([50]);
  const [quantity, setQuantity] = useState([1]);

  const calculateCost = () => {
    const basePrice = 50000;
    const levelMultiplier = 1 + (positionLevel[0] / 100) * 2;
    const urgencyMultiplier = 1 + (urgency[0] / 100) * 0.5;
    const quantityDiscount = Math.max(0.7, 1 - (quantity[0] - 1) * 0.05);
    
    return Math.round(basePrice * levelMultiplier * urgencyMultiplier * quantityDiscount * quantity[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TalentHub
              </span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">О компании</a>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Услуги</a>
              <a href="#calculator" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Калькулятор</a>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">
                <Icon name="Sparkles" size={16} className="mr-1" />
                Профессиональный рекрутинг
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Найдём идеальных{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  кандидатов
                </span>{' '}
                для вашего бизнеса
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Современные технологии подбора персонала + личный подход к каждому клиенту = успешные команды
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6">
                  Начать подбор
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600">500+</div>
                  <div className="text-gray-600">Закрытых вакансий</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-600">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">14 дней</div>
                  <div className="text-gray-600">Средний срок подбора</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-20 animate-gradient"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Скорость подбора</div>
                    <div className="text-2xl font-bold text-purple-700">+35% быстрее</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                    <Icon name="Target" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Точность подбора</div>
                    <div className="text-2xl font-bold text-orange-600">92% совпадений</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Гарантия</div>
                    <div className="text-2xl font-bold text-purple-700">3 месяца</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4">
              О компании
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Почему выбирают{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                TalentHub
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы используем передовые технологии и многолетний опыт для решения самых сложных задач подбора персонала
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Brain',
                title: 'AI-технологии',
                description: 'Искусственный интеллект анализирует тысячи резюме и находит идеальные совпадения',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Shield',
                title: 'Гарантия результата',
                description: 'Бесплатная замена кандидата в течение 3 месяцев, если что-то пойдёт не так',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: 'Zap',
                title: 'Быстрый подбор',
                description: 'Средний срок закрытия вакансии — 14 дней. Срочные задачи — от 3 дней',
                gradient: 'from-orange-500 to-purple-500'
              },
              {
                icon: 'Users',
                title: 'База 50 000+ кандидатов',
                description: 'Постоянно пополняемая база проверенных специалистов всех уровней',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'MessageCircle',
                title: 'Личный менеджер',
                description: 'Персональный рекрутер ведёт ваш проект от начала до успешного завершения',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: 'Star',
                title: 'Прозрачность процесса',
                description: 'Онлайн-доступ к статусу подбора, отчёты и аналитика в реальном времени',
                gradient: 'from-orange-500 to-purple-500'
              }
            ].map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4">
              Услуги
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Подбираем специалистов{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                любого уровня
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'Briefcase',
                title: 'Топ-менеджмент',
                positions: ['CEO', 'CFO', 'CTO', 'Директора'],
                color: 'purple',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: 'Code',
                title: 'IT-специалисты',
                positions: ['Разработчики', 'DevOps', 'QA', 'Аналитики'],
                color: 'pink',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: 'TrendingUp',
                title: 'Продажи и маркетинг',
                positions: ['Менеджеры', 'Маркетологи', 'SMM', 'Аналитики'],
                color: 'orange',
                gradient: 'from-orange-500 to-purple-500'
              },
              {
                icon: 'User',
                title: 'Линейный персонал',
                positions: ['Операторы', 'Специалисты', 'Помощники', 'Стажёры'],
                color: 'purple',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.positions.map((position, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <Icon name="CheckCircle2" size={16} className="text-purple-600" />
                        <span>{position}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full mt-6 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white`}>
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4">
              <Icon name="Calculator" size={16} className="mr-1" />
              Калькулятор стоимости
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Рассчитайте стоимость{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                подбора персонала
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное ценообразование — никаких скрытых платежей
            </p>
          </div>

          <Card className="border-0 shadow-2xl animate-scale-in">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-2xl">Параметры подбора</CardTitle>
              <CardDescription className="text-base">
                Настройте параметры, чтобы узнать стоимость услуги
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-medium">Уровень позиции</Label>
                  <Badge variant="outline" className="text-base px-4 py-1">
                    {positionLevel[0] < 33 ? 'Junior' : positionLevel[0] < 66 ? 'Middle' : 'Senior/Executive'}
                  </Badge>
                </div>
                <Slider
                  value={positionLevel}
                  onValueChange={setPositionLevel}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Junior</span>
                  <span>Middle</span>
                  <span>Senior</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-medium">Срочность подбора</Label>
                  <Badge variant="outline" className="text-base px-4 py-1">
                    {urgency[0] < 33 ? 'Обычная' : urgency[0] < 66 ? 'Приоритетная' : 'Срочная'}
                  </Badge>
                </div>
                <Slider
                  value={urgency}
                  onValueChange={setUrgency}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>30 дней</span>
                  <span>14 дней</span>
                  <span>3-7 дней</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-medium">Количество позиций</Label>
                  <Badge variant="outline" className="text-base px-4 py-1">
                    {quantity[0]} {quantity[0] === 1 ? 'позиция' : quantity[0] < 5 ? 'позиции' : 'позиций'}
                  </Badge>
                </div>
                <Slider
                  value={quantity}
                  onValueChange={setQuantity}
                  max={10}
                  min={1}
                  step={1}
                  className="cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 позиция</span>
                  <span>5 позиций</span>
                  <span>10 позиций</span>
                </div>
              </div>

              <div className="pt-6 border-t">
                <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-2xl p-8 text-center">
                  <div className="text-gray-600 text-lg mb-2">Итоговая стоимость</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {calculateCost().toLocaleString('ru-RU')} ₽
                  </div>
                  <div className="text-gray-500 mb-6">
                    {quantity[0] > 1 && (
                      <span className="text-green-600 font-medium">
                        Скидка за объём: {Math.round((1 - Math.max(0.7, 1 - (quantity[0] - 1) * 0.05)) * 100)}%
                      </span>
                    )}
                  </div>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12">
                    Оставить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Users" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">TalentHub</span>
              </div>
              <p className="text-gray-400">
                Современные решения для подбора персонала
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Подбор персонала</li>
                <li>Executive Search</li>
                <li>HR-консалтинг</li>
                <li>Аутстаффинг</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@talenthub.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 TalentHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
