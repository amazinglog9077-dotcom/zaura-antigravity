import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageCircle,
  Search,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Target,
  Zap,
  Globe,
  Plus,
  Minus,
  CheckCircle2,
  Send
} from 'lucide-react';

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
import { TechCard, TechButton, SectionTitle } from './components/TechUI';
import { StarField } from './components/StarField';
import { cn } from './lib/utils';
import heroBgVideo from './assets/hero-bg.mp4';
import heroLogo from './assets/hero-logo.png';
import macleodBeerImg from './assets/macleodbeer.png';
import operaMarketingImg from './assets/opera-marketing.png';
import officeWorkersImg from './assets/office-workers-using-finance-graphs.jpg';
import footerLogo from './assets/footer-logo.png';

const LeadForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    nome: '',
    segmento: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyeA7nYXZm8qKAutAl7q49T8-iKckmCLA82e9dMnBAStl_hoMJ1dP-L8Dl3LJdd1QE_/exec";

      if (GOOGLE_SHEET_URL) {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setStatus('success');
      setFormData({ nome: '', segmento: '', whatsapp: '', email: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 border border-cyan-tech/30 bg-cyan-tech/5 text-center"
      >
        <div className="w-16 h-16 bg-cyan-tech/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-cyan-tech" size={32} />
        </div>
        <h4 className="text-xl font-display font-bold text-white mb-2 uppercase">Recebido com Sucesso</h4>
        <p className="text-white/60 text-sm">Nossa equipe entrará em contato em breve para analisar seu cenário.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-[10px] font-mono text-cyan-tech uppercase tracking-widest hover:underline"
        >
          Enviar outro formulário
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Nome</label>
          <input
            required
            type="text"
            placeholder="Seu nome completo"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:border-cyan-tech/50 focus:outline-none transition-colors"
            value={formData.nome}
            onChange={e => setFormData({ ...formData, nome: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">Segmento</label>
          <input
            required
            type="text"
            placeholder="Ex: Advocacia, Loja..."
            className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:border-cyan-tech/50 focus:outline-none transition-colors"
            value={formData.segmento}
            onChange={e => setFormData({ ...formData, segmento: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">WhatsApp</label>
          <input
            required
            type="tel"
            placeholder="(00) 00000-0000"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:border-cyan-tech/50 focus:outline-none transition-colors"
            value={formData.whatsapp}
            onChange={e => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-1">E-mail</label>
          <input
            required
            type="email"
            placeholder="seu@email.com"
            className="w-full bg-white/5 border border-white/10 p-3 text-sm text-white focus:border-cyan-tech/50 focus:outline-none transition-colors"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <button
        disabled={status === 'loading'}
        type="submit"
        className="w-full bg-cyan-tech text-black py-4 font-display font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === 'loading' ? (
          <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
        ) : (
          <>
            <Send size={18} />
            Solicitar Análise Grátis
          </>
        )}
      </button>

      <div className="text-center">
        <a
          href="https://wa.me/5511932313943"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono text-white/40 uppercase tracking-widest hover:text-cyan-tech transition-colors flex items-center justify-center gap-2"
        >
          <MessageCircle size={12} />
          Ou prefere falar agora pelo WhatsApp?
        </a>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-[10px] font-mono text-center uppercase">Erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-display font-medium group-hover:text-cyan-tech transition-colors">{question}</span>
        {isOpen ? <Minus className="text-cyan-tech" /> : <Plus className="text-cyan-tech/50" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProblemCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      text: "“Eu posto, mas ninguém chama no WhatsApp”",
      icon: <MessageCircle className="text-red-400" />,
      desc: "Engajamento vazio não paga boletos. Você precisa de conversão real."
    },
    {
      text: "“Não tenho site, só Instagram”",
      icon: <Globe className="text-yellow-400" />,
      desc: "Você está construindo em terreno alugado. Um site é seu território oficial."
    },
    {
      text: "“Já tentei impulsionar, mas só gastei dinheiro”",
      icon: <TrendingUp className="text-purple-400" />,
      desc: "Tráfego sem estratégia é desperdício. O destino precisa estar pronto para vender."
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-4 px-2 sm:px-12 group">
      <div 
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="min-w-full px-2 sm:px-6 shrink-0">
            <div className="max-w-2xl mx-auto h-full">
              <TechCard label={`ERRO_0${i + 1}`} className="flex flex-col h-full bg-graphite/40 border-white/10 group-hover:border-cyan-tech/30 transition-colors">
                <div className="mb-6 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 shrink-0">
                  {item.icon}
                </div>
                <p className="text-xl sm:text-2xl font-display font-bold mb-4 italic">
                  {item.text}
                </p>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </TechCard>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-0 sm:px-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prev} 
          className="w-10 h-10 flex items-center justify-center bg-black/80 border border-white/20 text-white hover:text-cyan-tech hover:border-cyan-tech/50 rounded-full shrink-0 transition-colors pointer-events-auto backdrop-blur-sm shadow-xl"
        >
          <ArrowRight className="rotate-180" size={18} />
        </button>
        <button 
          onClick={next} 
          className="w-10 h-10 flex items-center justify-center bg-black/80 border border-white/20 text-white hover:text-cyan-tech hover:border-cyan-tech/50 rounded-full shrink-0 transition-colors pointer-events-auto backdrop-blur-sm shadow-xl"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-8 pb-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${
              idx === currentIndex ? 'bg-cyan-tech w-8 shadow-[0_0_10px_rgba(0,242,255,0.5)]' : 'bg-white/20 w-2 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/5511932313943";
  const email = "zaurakdesign@gmail.com";
  const address = "Embu das Artes";

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-black text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 tech-grid-fine opacity-10 pointer-events-none" />

      {/* Floating WhatsApp Card */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-8 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(37,211,102,0.45)] border border-white/20 group"
      >
        {/* Pulse ring */}
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30 duration-1000" />
          <span className="relative flex items-center justify-center text-white">
            <WhatsAppIcon size={26} />
          </span>
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">Fale conosco</span>
          <span className="text-sm font-bold tracking-tight">WhatsApp</span>
        </div>
      </motion.a>

      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-black/95 backdrop-blur-md border-cyan-dark/60 py-4" : "bg-transparent border-cyan-dark/30 py-6"
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={heroLogo} alt="ZAURAKWEB" className="w-10 h-10 object-contain" />
            <span className="flex items-center text-base md:text-lg font-sans font-bold tracking-tight uppercase text-[#FFFFFF] mt-1">
              ZAURAKWEB
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-sans font-light uppercase tracking-[0.15em] text-[#888888]">
            <a href="#problem" className="hover:text-white transition-colors">Diagnóstico</a>
            <a href="#solution" className="hover:text-white transition-colors">Solução</a>
            <a href="#benefits" className="hover:text-white transition-colors">Métricas</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/zaurakweb.sp/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-cyan-tech hover:border-cyan-tech/50 transition-colors rounded-sm"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2.5 px-6 border border-cyan-tech text-cyan-tech text-xs font-sans font-medium uppercase tracking-[0.1em] hover:bg-cyan-tech/10 hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all rounded-sm"
            >
              Quero mais clientes agora
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-black/40">
          <video 
            src={heroBgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-80 z-[-2] pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-[-1] pointer-events-none" />
          <StarField />
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center mb-12"
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  src={heroLogo}
                  alt="ZAURAKWEB Logo"
                  className="w-full max-w-[120px] md:max-w-[240px] h-auto mb-10"
                />

                <div className="inline-flex items-center px-5 py-2 bg-white/5 backdrop-blur-sm border border-cyan-dark rounded-full mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <span className="text-[11px] font-sans font-semibold text-cyan-tech uppercase tracking-[0.2em] whitespace-nowrap">Protocolo de Conversão Ativo</span>
                </div>

                <h1 className="text-5xl md:text-[7vw] lg:text-[70px] font-sans font-bold leading-[0.9] mb-8 uppercase italic tracking-tighter text-[#FFFFFF]">
                  Transforme seu site em uma <span className="text-[#00F2FF]">máquina</span> de gerar clientes todos os dias
                </h1>

                <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl leading-relaxed">
                  Você não precisa apenas “estar na internet”.<br />
                  Criamos <span className="text-white font-bold">páginas estratégicas</span> que atraem, convencem e convertem visitantes em mensagens e vendas.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <TechButton
                    href={whatsappLink}
                    className="w-full sm:w-auto"
                  >
                    <MessageCircle size={18} />
                    Quero mais clientes agora
                  </TechButton>
                  <div className="flex items-center px-6 py-4 border border-white/10 font-mono text-sm text-white/60 uppercase tracking-widest whitespace-nowrap">
                    Foco 100% em Resultado
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full max-w-4xl"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-tech to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-graphite border border-white/10 rounded-lg overflow-hidden shadow-2xl">
                    <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/10">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                        <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      </div>
                      <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Projeto_Ativo_v4.0</div>
                    </div>
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                        alt="Estratégia Digital"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-tech animate-pulse" />
                          <span className="text-[10px] font-mono text-cyan-tech uppercase tracking-tighter">Otimização em Tempo Real</span>
                        </div>
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 2, delay: 1 }}
                            className="h-full bg-cyan-tech"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-black/40">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase">Performance</div>
                          <div className="text-xl font-display font-bold text-cyan-tech">+124%</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase">Conversão</div>
                          <div className="text-xl font-display font-bold text-purple-400">Ativa</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-24 bg-black/50 relative section-grid">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Diagnóstico de Mercado" align="center">
              Seu negócio existe — mas ninguém encontra?
            </SectionTitle>

            <ProblemCarousel />

            <div id="form-diagnostico" className="mt-16 p-8 border border-white/10 bg-graphite/20 flex flex-col items-center text-center gap-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-display font-bold mb-4">O próximo nível do seu negócio começa aqui.</h3>
                <p className="text-white/60 mb-6">Imagine ter uma presença digital que trabalha para você 24h por dia. Com estratégias de conversão inteligentes, conectamos seu negócio aos clientes ideais, transformando visibilidade em faturamento real e constante.</p>
                <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-cyan-tech uppercase tracking-widest">
                  <div className="w-2 h-2 bg-cyan-tech rounded-full animate-pulse" />
                  Preencha para receber um diagnóstico
                </div>
              </div>
              <div className="w-full">
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-24 section-grid">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionTitle subtitle="A Solução Zaurak">
                  Criamos sua presença digital para gerar resultado de verdade
                </SectionTitle>

                <p className="text-lg text-white/60 mb-10 leading-relaxed">
                  A ZAURAK WEB foi criada para ajudar empresas a saírem do zero ou destravarem suas vendas online. Nada de termos complicados ou promessas vazias.
                </p>

                <div className="space-y-6">
                  {[
                    { title: "Um site rápido e profissional", icon: <Zap className="text-cyan-tech" /> },
                    { title: "Estratégias para aparecer no Google", icon: <Search className="text-cyan-tech" /> },
                    { title: "Estrutura pensada para gerar contatos", icon: <Target className="text-cyan-tech" /> }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-cyan-tech/30 transition-all"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-cyan-tech/10 text-cyan-tech">
                        {item.icon}
                      </div>
                      <span className="font-display font-bold text-lg">{item.title}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-cyan-tech font-mono text-sm uppercase tracking-widest mb-4">
                    👉 Tudo focado em uma coisa: fazer você vender mais
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-tech/5 blur-3xl rounded-full" />
                <TechCard className="relative z-10 p-0 overflow-hidden border-cyan-tech/30">
                  <img
                    src={officeWorkersImg}
                    alt="Interface de site sendo criado"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-cyan-tech">STATUS_IMPLANTAÇÃO</span>
                      <span className="text-[10px] font-mono text-green-400">SUCESSO</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="h-full bg-cyan-tech"
                      />
                    </div>
                  </div>
                </TechCard>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-graphite/30 section-grid">
          <div className="container mx-auto px-6">
            <SectionTitle subtitle="Performance Pura" align="center">
              Você não precisa entender de internet — só precisa ver resultado
            </SectionTitle>

            <div className="grid md:grid-cols-3 gap-8">
              <TechCard label="CONVERSÃO" title="Mais leads qualificados" className="flex flex-col h-full">
                <p className="text-white/50 text-sm mb-8 flex-grow">Criamos páginas e estratégias que captam informações valiosas de quem realmente quer comprar.</p>
                <div className="bg-black/40 p-4 border border-white/5 rounded mt-auto">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-tighter">TRÁFEGO_AO_VIVO</span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-2 bg-white/5 rounded-full w-full overflow-hidden">
                        <motion.div
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className="h-full w-1/3 bg-cyan-tech/40"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TechCard>

              <TechCard label="VISIBILIDADE" title="Seu negócio no Google" className="flex flex-col h-full">
                <p className="text-white/50 text-sm mb-8 flex-grow">Com SEO e estrutura certa, você deixa de ser invisível e aparece para quem já está procurando.</p>
                <div className="flex items-center justify-center p-4 bg-black/40 border border-white/5 rounded h-32 mt-auto">
                  <div className="relative">
                    <Search size={48} className="text-cyan-tech/20 animate-pulse" />
                    <div className="absolute -bottom-2 -right-2 text-[8px] font-mono text-cyan-tech/40 uppercase tracking-widest">INDEXADO</div>
                  </div>
                </div>
              </TechCard>

              <TechCard label="AUTORIDADE" title="Presença profissional" className="flex flex-col h-full">
                <p className="text-white/50 text-sm mb-8 flex-grow">Seu cliente confia mais e escolhe você ao invés do concorrente amador.</p>
                <div className="flex items-center gap-3 bg-black/40 p-4 border border-white/5 rounded mt-auto">
                  <ShieldCheck className="text-green-400" size={20} />
                  <span className="text-[10px] font-mono uppercase tracking-widest">NEGÓCIO_VERIFICADO_SSL</span>
                </div>
              </TechCard>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6">
              <SectionTitle subtitle="Portfólio" className="mb-0">
                Quem já confiou
              </SectionTitle>
              <div className="text-center md:text-right font-mono text-[10px] text-white/30 uppercase tracking-widest leading-relaxed">
                <span className="text-cyan-tech">TOTAL_PROJETOS_ENTREGUES:</span> 42<br />
                <span className="text-cyan-tech">SATISFAÇÃO_CLIENTE:</span> 99.8%
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  url: 'macleodbeer.com', 
                  type: 'E-commerce / Cervejaria',
                  image: macleodBeerImg,
                  href: 'https://www.macleodbeer.com'
                },
                { 
                  url: 'operamarketingproduction.com', 
                  type: 'Agência de Marketing',
                  image: operaMarketingImg,
                  href: 'https://www.operamarketingproduction.com'
                }
              ].map((site, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative max-w-[340px] mx-auto md:max-w-none w-full"
                >
                  <a href={site.href} target="_blank" rel="noopener noreferrer" className={site.href ? "cursor-pointer" : "pointer-events-none"}>
                    <div className="absolute -inset-0.5 bg-cyan-tech/20 blur opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative bg-graphite border border-white/10 p-1">
                      <div className="aspect-video bg-black/40 overflow-hidden relative">
                        <img
                          src={site.image || `https://picsum.photos/seed/${site.url}/800/450`}
                          alt={site.url}
                          className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <TechButton variant="outline" className="bg-black/80">Ver Projeto</TechButton>
                        </div>
                      </div>
                      <div className="p-4 flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="text-base md:text-lg font-display font-bold break-all leading-tight mb-1">{site.url}</div>
                          <div className="text-[9px] md:text-[10px] font-mono text-white/40 uppercase tracking-tighter md:tracking-normal">{site.type}</div>
                        </div>
                        <ArrowRight className="text-cyan-tech group-hover:translate-x-2 transition-transform shrink-0 mt-1" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center max-w-2xl mx-auto">
              <p className="text-2xl font-display font-bold italic mb-8">
                “Quero profissionalizar meu negócio e preciso de algo que realmente traga resultado”
              </p>
              <div className="h-[1px] w-24 bg-cyan-tech/30 mx-auto mb-8" />
              <p className="text-cyan-tech font-mono text-sm uppercase tracking-widest">
                👉 É exatamente isso que entregamos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-24 bg-cyan-tech text-black overflow-hidden relative">
          <div className="absolute inset-0 tech-grid opacity-10" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 leading-none italic">
                Comece agora e veja resultado rápido
              </h2>
              <p className="text-xl font-medium mb-12 opacity-80">
                Atendimento próximo, entrega rápida e preço acessível. Sem complicação. Você não precisa esperar meses para começar a vender mais.
              </p>

              <div className="bg-black p-8 shadow-2xl border border-white/10 text-left">
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-display font-black text-white uppercase italic mb-2">Solicitar Orçamento</h3>
                  <div className="h-1 w-20 bg-cyan-tech mx-auto" />
                </div>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <SectionTitle subtitle="Dúvidas">
                  Perguntas Frequentes
                </SectionTitle>
                <p className="text-white/50">Tudo o que você precisa saber para dar o próximo passo com segurança.</p>
              </div>
              <div className="lg:col-span-2">
                <FAQItem
                  question="Preciso já ter um site ou redes sociais?"
                  answer="Não. Podemos começar do zero e estruturar tudo para você, desde a compra do domínio até a estratégia de captação de clientes."
                />
                <FAQItem
                  question="Em quanto tempo fica pronto?"
                  answer="Depende do projeto, mas a proposta é sempre entregar o mais rápido possível sem perder qualidade. Projetos padrão costumam ser entregues em até 15 dias úteis."
                />
                <FAQItem
                  question="Vocês dão suporte depois?"
                  answer="Sim. Você terá suporte técnico e ajustes garantidos para assegurar que sua solução de vendas continue operando em alta performance."
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2">
              <img src={footerLogo} alt="ZAURAKWEB Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-display font-black tracking-tighter uppercase">
                Zaurak<span className="text-cyan-tech">Web</span>
              </span>
            </div>

            <div className="flex flex-col items-center gap-3 w-full text-center">
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/zaurakweb.sp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-cyan-tech hover:border-cyan-tech/50 transition-colors rounded-sm"
                >
                  <InstagramIcon size={16} />
                </a>
<a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors rounded-sm"
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>
              <div className="text-[10px] font-mono text-white/40 tracking-widest flex flex-wrap justify-center items-center gap-4">
                <span className="uppercase">{address}</span>
                <span className="w-1 h-1 bg-cyan-tech rounded-full" />
                <span className="lowercase">{email}</span>
              </div>
              <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] text-center">
                © 2026 ZAURAK WEB // SOLUÇÕES_DIGITAIS_DE_ALTA_PERFORMANCE
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
