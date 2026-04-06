import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Waves, HeartHandshake, CalendarDays, Trophy, Newspaper, Users, ShieldCheck, Droplets, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroSlides = [
  {
    image:
     
      "https://images.unsplash.com/photo-1464925257126-6450e871c667?auto=format&fit=crop&w=1600&q=80",
    alt: "Crianças e adolescentes em atividade na praia",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464925257126-6450e871c667?auto=format&fit=crop&w=1600&q=80",
    alt: "Prancha de surf na areia durante o pôr do sol",
  },
  {
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1600&q=80",
    alt: "Surfista no mar representando transformação e esperança",
  },
  {
    image: "/fotos/IMG_4654.JPG",
    alt: "Evento Soul Surf - Foto 2",
  },
  {
    image: "/fotos/IMG_4146.JPG",
    alt: "Evento Soul Surf - Foto 3",
  },
  {
    image: "/fotos/IMG_4449.JPG",
    alt: "Evento Soul Surf - Foto 4",
  },
];

const projectSlides = [
  {
    title: "Surf e Inclusão",
    text: "Aulas e vivências no mar para desenvolver disciplina, autoestima e convivência.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Educação e Futuro",
    text: "Apoio ao crescimento pessoal e incentivo à educação para ampliar horizontes.",
    image:
      "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cultura e Meio Ambiente",
    text: "Formação cidadã com ações culturais e consciência ambiental ligadas ao oceano.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
];

const missionVisionValues = [
  {
    title: "Missão",
    text: "Promover a inclusão social de crianças e adolescentes em vulnerabilidade (física, emocional, cognitiva ou social) por meio de projetos educacionais, esportivos, culturais e ambientais vinculados ao surf.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Visão",
    text: "Fortalecer a crença na superação e na capacidade de vencer desafios inesperados.",
    image:
      "https://images.unsplash.com/photo-1517837016564-bfc2a1f1a8f0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Valores",
    text: "Respeito, Fraternidade, Solidariedade, Empatia, Autoestima, autoconfiança, Fortalecimento dos vínculos familiares.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
];

const navItems = [
  { label: "Soul Surf", href: "#top", icon: Waves },
  { label: "Calendário", href: "#calendario", icon: CalendarDays },
  { label: "Circuitos", href: "#circuitos", icon: Trophy },
  { label: "Notícias", href: "#noticias", icon: Newspaper },
  { label: "Surf", href: "#surf", icon: Waves },
  { label: "Atletas", href: "#atletas", icon: Users },
  { label: "Portal de Transparência", href: "#transparencia", icon: ShieldCheck },
];

function Carousel({ slides, interval = 5000, heightClass = "h-[70vh]" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${heightClass}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current].image}
          src={slides[current].image}
          alt={slides[current].alt || slides[current].title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0.3, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 0.98 }}
          transition={{ duration: 0.7 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-slate-900/20" />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/25"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur hover:bg-white/25"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function SoulSurfHomepage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 ring-1 ring-cyan-300/30">
              <Waves className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Soul Surf</p>
              <p className="text-xs text-slate-300">Projeto Social</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-slate-200 transition hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <a href="https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy" target="_blank" rel="noopener noreferrer">
            <Button className="rounded-2xl bg-cyan-500 px-5 text-slate-950 hover:bg-cyan-400">
              Doe agora
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          <div className="relative">
            <Carousel slides={heroSlides} />
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="max-w-3xl px-6 md:px-10 lg:px-14">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm text-cyan-100 backdrop-blur"
                >
                  Esporte, educação e transformação social
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl font-black uppercase leading-tight text-white md:text-6xl"
                >
                  DO MAR PRA VIDA!
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mt-3 text-2xl font-semibold text-cyan-100 md:text-4xl"
                >
                  Ajude a Transformar Vidas e Futuros
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-5 max-w-2xl text-base leading-7 text-slate-100 md:text-lg"
                >
                  Sua doação permite que promovamos oportunidades de crescimento,
                  autoestima e um caminho melhor através do esporte e educação.
                  Juntos, podemos mudar histórias!
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-8"
                >
                  <Button className="rounded-2xl bg-cyan-400 px-7 py-6 text-base font-bold text-slate-950 hover:bg-cyan-300">
                    Doe agora
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="aspect-video rounded-[2rem] overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/2hnO7fT-f_g"
              title="Soul Surf Project Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            ></iframe>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-2xl">
            <CardContent className="grid gap-8 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                  <Droplets className="h-4 w-4" />
                  Chamada para ação
                </div>
                <h3 className="text-3xl font-black md:text-4xl">Precisamos de água doce também</h3>
                <p className="mt-3 text-xl font-semibold text-cyan-50">Banho Depois do Surf</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
                  Ajude a instalar um poço artesiano e garantir um banho digno pras
                  crianças depois do surf. Com sua ajuda, a água chega!
                </p>
                <Button className="mt-6 rounded-2xl bg-white px-6 text-sky-700 hover:bg-slate-100">
                  Quero ajudar
                </Button>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=1200&q=80"
                  alt="Projeto social na praia com crianças e surf"
                  className="h-full min-h-[260px] w-full rounded-[1.75rem] object-cover shadow-xl"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">
                Uma Onda de Solidariedade
              </p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                Esporte que acolhe, educa e transforma
              </h3>
              <blockquote className="mt-5 border-l-4 border-cyan-500 pl-4 text-lg italic text-slate-600">
                “A melhor maneira de se encontrar é se perder no serviço aos outros.” –
                Mahatma Gandhi
              </blockquote>
              <p className="mt-6 text-base leading-8 text-slate-700">
                Fundada em setembro de 2021, em Itanhaém/SP, a Associação de Surf
                Cibratel – Projeto Social Soul Surf é uma organização sem fins
                lucrativos que utiliza o surf como ferramenta de inclusão social e
                transformação de vidas. Seu foco é o desenvolvimento integral de jovens
                e adolescentes em situação de vulnerabilidade, combinando esporte,
                educação e valores como disciplina, respeito e superação.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80"
                alt="Projeto Soul Surf em ação na praia"
                className="h-[430px] w-full rounded-[2rem] object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">
              Nossa Essência
            </p>
            <h3 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
              Missão, visão e valores que conduzem cada onda
            </h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden rounded-[2rem] border-0 bg-white shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-4 text-base leading-7 text-slate-700">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">
                Carrossel
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
                Nossos Projetos
              </h3>
              <p className="mt-3 text-lg text-slate-600">
                Conheça as iniciativas que estão mudando vidas dentro e fora do mar
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projectSlides.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="overflow-hidden rounded-[2rem] border-0 bg-slate-900 text-white shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                    <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="calendario" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              { id: "Calendário", text: "Publique datas de aulas, ações sociais, eventos e competições." },
              { id: "Circuitos", text: "Mostre circuitos, etapas, regulamentos e resultados." },
              { id: "Notícias", text: "Destaque conquistas, novidades e histórias inspiradoras do projeto." },
              { id: "Surf", text: "Explique como funcionam as aulas, metodologia e benefícios do esporte." },
              { id: "Atletas", text: "Apresente os atletas, perfis, categorias e evolução de cada participante." },
              { id: "Portal de Transparência", text: "Publique documentos, relatórios, prestações de contas e apoiadores." },
            ].map((item) => (
              <Card
                key={item.id}
                id={item.id.toLowerCase().replace(/\s+/g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                className="rounded-[2rem] border-0 bg-white shadow-md"
              >
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-slate-900">{item.id}</h4>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-2xl font-black text-white">Soul Surf</p>
            <p className="mt-2 max-w-xl text-slate-400">
              Projeto social que usa o surf como ferramenta de inclusão, educação e
              transformação de vidas.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <HeartHandshake className="h-4 w-4" /> Doe agora
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
              <ShieldCheck className="h-4 w-4" /> Transparência
            </span>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-slate-500">
          © {year} Soul Surf. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
