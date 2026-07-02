import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'works', label: 'Работы' },
  { id: 'about', label: 'Обо мне' },
  { id: 'services', label: 'Услуги' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const CATEGORIES = ['Все', 'Айдентика', 'Логотипы', 'Упаковка', 'Плакаты'];

const WORKS = [
  { id: 1, title: 'ORBITA', cat: 'Айдентика', type: 'Бренд-система', year: '2025', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/b6382f2a-fbfe-4729-b56c-588b1492d459.jpg' },
  { id: 2, title: 'NOISE', cat: 'Плакаты', type: 'Типографика', year: '2025', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/69ca484b-a3c7-449c-af11-b0e91e7d5fad.jpg' },
  { id: 3, title: 'FORMA', cat: 'Айдентика', type: 'Фирменный стиль', year: '2024', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/dcf3852a-29e6-4f7a-8064-aae30712685a.jpg' },
  { id: 4, title: 'PULSE', cat: 'Логотипы', type: 'Логотип', year: '2024', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/25c74f8b-2162-4e31-8288-67ae29eeaad2.jpg' },
  { id: 5, title: 'CRAFT', cat: 'Упаковка', type: 'Дизайн упаковки', year: '2025', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/b6382f2a-fbfe-4729-b56c-588b1492d459.jpg' },
  { id: 6, title: 'STUDIO', cat: 'Логотипы', type: 'Логотип', year: '2023', img: 'https://cdn.poehali.dev/projects/76bfb0a9-e43d-49ba-95c1-d79fddb7ca20/files/dbc5510a-c59e-41dd-a32b-84881cbe0161.jpg' },
];

const SERVICES = [
  { n: '02', title: 'Логотип и знак', desc: 'Уникальный, запоминающийся знак, который работает в любом масштабе.', icon: 'PenTool' },
  { n: '03', title: 'Фирменный стиль', desc: 'Единый язык бренда: цвета, шрифты, паттерны и правила применения.', icon: 'Palette' },
  { n: '04', title: 'Дизайн упаковки', desc: 'Упаковка, которая выделяется на полке и продаёт продукт.', icon: 'Package' },
];

const REVIEWS = [
  { name: 'Анна Ковалёва', role: 'CEO, ORBITA', text: 'Дизайн полностью изменил восприятие нашего бренда. Работа на уровне ведущих студий, но с личным вниманием к каждой детали.' },
  { name: 'Дмитрий Соколов', role: 'Основатель CRAFT', text: 'Смелые, нестандартные решения, которые точно попадают в задачу. Продажи после ребрендинга выросли ощутимо.' },
  { name: 'Мария Лебедева', role: 'Маркетолог, PULSE', text: 'Глубокая проработка концепции и невероятная насмотренность. Рекомендую всем, кто хочет выделиться.' },
];

const Index = () => {
  const [activeCat, setActiveCat] = useState('Все');
  const [menuOpen, setMenuOpen] = useState(false);

  const filtered = activeCat === 'Все' ? WORKS : WORKS.filter((w) => w.cat === activeCat);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-5 md:px-10 py-5">
          <button onClick={() => scrollTo('hero')} className="font-display font-700 text-xl tracking-tight text-white">
            СТУДИЯ<span className="text-primary">.</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="font-display uppercase text-sm tracking-widest text-white/80 hover:text-white transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setMenuOpen((v) => !v)} className="md:hidden text-white">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-secondary text-secondary-foreground px-5 py-6 flex flex-col gap-4 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="font-display uppercase text-2xl text-left">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center px-5 md:px-10 pt-24 pb-10">
        <div className="absolute top-1/4 right-0 w-[45vw] h-[45vw] max-w-[520px] max-h-[520px] bg-primary animate-blob opacity-90 -z-0" />
        <div className="absolute bottom-10 left-[8%] w-24 h-24 rounded-full bg-[hsl(var(--accent-lime))] hidden md:block" />
        <div className="relative z-10">
          <p className="font-display uppercase tracking-[0.3em] text-sm mb-6 animate-fade-in">Графический дизайнер · Айдентика</p>
          <h1 className="font-display font-700 uppercase leading-[0.85] tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block text-[16vw] md:text-[12vw]">Создаю</span>
            <span className="block text-[16vw] md:text-[12vw] text-stroke">бренды</span>
            <span className="block text-[16vw] md:text-[12vw]">с характером</span>
          </h1>
          <div className="mt-8 max-w-md animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <p className="text-lg text-foreground/70">
              Разрабатываю уникальную визуальную айдентику, которая помогает продуктам выделиться и решать реальные задачи бизнеса.
            </p>
            <button onClick={() => scrollTo('works')} className="mt-6 inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-display uppercase tracking-widest text-sm px-7 py-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Смотреть работы <Icon name="ArrowDownRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-secondary text-secondary-foreground py-4 overflow-hidden border-y-2 border-secondary">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="font-display uppercase text-2xl tracking-widest flex items-center">
              {['Айдентика', 'Логотипы', 'Упаковка', 'Плакаты', 'Брендинг', 'Концепция'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <span className="text-primary">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* WORKS */}
      <section id="works" className="px-5 md:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display font-700 uppercase text-6xl md:text-8xl leading-none">Работы</h2>
          <p className="text-foreground/60 max-w-xs">Избранные проекты. Фильтруйте по категориям, чтобы найти нужный тип работ.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`font-display uppercase tracking-widest text-sm px-5 py-2.5 border-2 border-secondary transition-colors ${
                activeCat === cat ? 'bg-secondary text-secondary-foreground' : 'bg-transparent hover:bg-secondary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((w, i) => (
            <article
              key={w.id}
              className="group relative overflow-hidden bg-secondary cursor-pointer animate-fade-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-secondary via-secondary/20 to-transparent">
                <span className="font-display uppercase text-xs tracking-widest text-primary">{w.type} · {w.year}</span>
                <h3 className="font-display font-700 uppercase text-4xl text-secondary-foreground leading-none mt-1">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-secondary text-secondary-foreground px-5 md:px-10 py-24">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <div className="w-full aspect-square bg-primary animate-blob flex items-center justify-center">
              <span className="font-display font-700 text-8xl text-primary-foreground">Я</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="font-display uppercase tracking-[0.3em] text-sm text-primary mb-6">Обо мне</p>
            <h2 className="font-display font-500 text-3xl md:text-5xl leading-tight mb-8">
              Независимый дизайнер, который превращает идеи в живую визуальную айдентику.
            </h2>
            <p className="text-secondary-foreground/70 text-lg max-w-2xl mb-10">
              Специализируюсь на создании визуальных решений для брендов и бизнеса. Сочетаю глубокую проработку концепции с вниманием к деталям — чтобы дизайн был не только эстетичным, но и эффективно решал задачи. Индивидуальный подход к каждому проекту.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-secondary-foreground/20 pt-8">
              {[['8+', 'лет опыта'], ['120+', 'проектов'], ['40+', 'брендов']].map(([num, label]) => (
                <div key={label}>
                  <div className="font-display font-700 text-5xl text-primary">{num}</div>
                  <div className="uppercase tracking-widest text-xs text-secondary-foreground/60 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 md:px-10 py-24">
        <h2 className="font-display font-700 uppercase text-6xl md:text-8xl leading-none mb-12">Услуги</h2>
        <div className="border-t-2 border-secondary">
          {SERVICES.map((s) => (
            <div key={s.n} className="group grid md:grid-cols-12 gap-4 items-center py-8 border-b-2 border-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors px-2 md:px-6">
              <div className="md:col-span-1 font-display text-2xl text-primary">{s.n}</div>
              <div className="md:col-span-1"><Icon name={s.icon} size={32} className="text-primary" /></div>
              <h3 className="md:col-span-4 font-display font-600 uppercase text-2xl md:text-3xl">{s.title}</h3>
              <p className="md:col-span-5 text-current/70">{s.desc}</p>
              <div className="md:col-span-1 flex justify-end">
                <Icon name="ArrowUpRight" size={28} className="group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[hsl(var(--accent-lime))] text-secondary px-5 md:px-10 py-24">
        <h2 className="font-display font-700 uppercase text-6xl md:text-8xl leading-none mb-12">Отзывы</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-background text-foreground p-8 flex flex-col">
              <Icon name="Quote" size={36} className="text-primary mb-6" />
              <p className="text-lg flex-1 mb-8">{r.text}</p>
              <div className="border-t-2 border-secondary pt-4">
                <div className="font-display font-600 uppercase text-lg">{r.name}</div>
                <div className="text-sm text-foreground/60">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-secondary text-secondary-foreground px-5 md:px-10 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display uppercase tracking-[0.3em] text-sm text-primary mb-6">Контакты</p>
            <h2 className="font-display font-700 uppercase text-5xl md:text-7xl leading-[0.9] mb-8">
              Давайте<br />создадим<br /><span className="text-primary">что-то</span></h2>
            <a href="mailto:hello@studio.design" className="font-display text-2xl md:text-3xl underline decoration-primary decoration-2 underline-offset-8 hover:text-primary transition-colors">
              hello@studio.design
            </a>
            <div className="flex gap-4 mt-10">
              {['Instagram', 'Send', 'Dribbble' as string].map((ic) => (
                <a key={ic} href="#" className="w-12 h-12 border-2 border-secondary-foreground/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                  <Icon name={ic} fallback="Link" size={20} />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <input placeholder="Ваше имя" className="bg-transparent border-2 border-secondary-foreground/30 px-5 py-4 font-display uppercase tracking-wider placeholder:text-secondary-foreground/40 focus:border-primary outline-none" />
            <input placeholder="Email" type="email" className="bg-transparent border-2 border-secondary-foreground/30 px-5 py-4 font-display uppercase tracking-wider placeholder:text-secondary-foreground/40 focus:border-primary outline-none" />
            <textarea placeholder="О проекте" rows={4} className="bg-transparent border-2 border-secondary-foreground/30 px-5 py-4 font-display uppercase tracking-wider placeholder:text-secondary-foreground/40 focus:border-primary outline-none resize-none" />
            <button className="bg-primary text-primary-foreground font-display uppercase tracking-widest px-7 py-4 hover:bg-[hsl(var(--accent-lime))] hover:text-secondary transition-colors">
              Отправить заявку
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background px-5 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display uppercase tracking-widest text-sm">СТУДИЯ<span className="text-primary">.</span> © 2025</span>
        <span className="text-foreground/50 text-sm">Графический дизайн и айдентика</span>
      </footer>
    </div>
  );
};

export default Index;