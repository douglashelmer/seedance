import { useState } from 'react'
import './index.css'

const CHECKOUT_URL = 'https://pay.onprofit.com.br/Qcb7KV06?off=7dbIDs'

const FEATURES = [
  {
    icon: '🎯',
    name: '50 Prompts Prontos',
    desc: 'Prompts testados e otimizados para gerar os melhores resultados no Seedance 2.0.',
  },
  {
    icon: '🖼️',
    name: 'Imagem Inicial + Referência',
    desc: 'Cada prompt vem com a imagem de partida e a referência visual usada na geração.',
  },
  {
    icon: '🎓',
    name: '4 Aulas de Como Usar',
    desc: 'Aprenda a extrair o máximo do Seedance 2.0 e adaptar os prompts para suas criações.',
  },
  {
    icon: '⚡',
    name: 'Acesso Imediato',
    desc: 'Assim que o pagamento for confirmado, você recebe tudo na hora.',
  },
]

const CHECKLIST = [
  '50 prompts em português e inglês para Seedance 2.0',
  'Imagem inicial para cada prompt (pronta para usar)',
  'Referência visual de resultado de cada geração',
  'Aula 1 — Como pegar os prompts para Seedance 2.0',
  'Aula 2 — Criar a imagem inicial de referência',
  'Aula 3 — Qual plataforma e como usar o Seedance 2.0',
  'Aula 4 — Configurando o Gerador de Vídeo',
]

const FAQS = [
  {
    q: 'O acesso é realmente vitalício ou tem mensalidade?',
    a: 'Sim, o acesso é 100% VITALÍCIO! Você paga uma única vez e tem acesso para sempre a todos os 21 assistentes, sem nenhuma taxa extra ou mensalidade escondida.',
  },
  {
    q: 'Preciso ter a versão paga do ChatGPT?',
    a: 'Não! Nossos assistentes foram desenvolvidos para funcionar perfeitamente com a versão GRATUITA do ChatGPT. Os assistentes não removem os limites de geração de imagem do ChatGPT gratuito.',
  },
  {
    q: 'Funciona para o meu nicho de mercado?',
    a: 'Com certeza! Os conteúdos da Comunidade IA Viral são versáteis e se adaptam a qualquer nicho, desde médicos e advogados até lojas de ecommerce, coaches, terapeutas, restaurantes e muito mais. Os agentes são inteligentes e personalizam o conteúdo para a sua realidade.',
  },
  {
    q: 'Preciso de conhecimento técnico em marketing ou design?',
    a: 'Absolutamente não! A ferramenta foi criada para ser intuitiva e fácil de usar, mesmo por quem não tem nenhuma experiência. Basta responder perguntas simples e os assistentes fazem todo o trabalho pesado para você.',
  },
  {
    q: 'Como recebo o acesso após a compra?',
    a: 'O acesso é liberado imediatamente após a confirmação do pagamento. Você receberá um Whatsapp, e também e-mail com todas as instruções para acessar a plataforma e começar a usar seus 21 Funcionários do Futuro.',
  },
  {
    q: 'E se eu não gostar ou não tiver resultados?',
    a: 'Seu risco é ZERO! Oferecemos uma garantia estendida de 30 dias. Se não conseguir gerar nenhum conteúdo devolvemos seu dinheiro. E ainda temos a garantia estendida: se aplicar e não tiver resultados, te damos uma consultoria ou um reembolso de 200% do que investiu. Lembrando que seu acesso continua vitalício mesmo assim!',
  },
  {
    q: 'O que é a Comunidade de Alunos?',
    a: 'É um bônus exclusivo onde você terá acesso a aulas ao vivo toda semana, diretamente com o Douglas Helmer e equipe. Além disso, receberá atualizações de prompts. O acesso ao grupo também é vitalício!',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        {q}
        <span className={`faq-chevron${open ? ' open' : ''}`}>▼</span>
      </button>
      <div className={`faq-answer${open ? ' open' : ''}`}>
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  )
}

function CtaBtn() {
  return (
    <a href={CHECKOUT_URL} className="hero-cta">
      <span className="hero-cta-main">🎁 QUERO OS 50 PROMPTS AGORA</span>
      <span className="hero-cta-sub">Acesso imediato - R$9,90</span>
    </a>
  )
}

export default function App() {
  return (
    <>
      {/* ── Sticky bar ── */}
      <div className="sticky-bar">
        🔥 <strong>OFERTA DE LANÇAMENTO</strong> — R$ 9,90 por tempo limitado somente até <strong>15/05/2026</strong>.
      </div>

      {/* ── Hero ── */}
      <section className="hero">
        <img
          className="hero-bg-desk"
          src="/images/fundodeskseedance.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <img
          className="hero-bg-mob"
          src="/images/fundomobiseedance.webp"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            ✦ SEEDANCE 2.0 · LANÇAMENTO
          </div>
          <h1 className="hero-title">
            50 prompts prontos pra você criar vídeos incríveis com IA do jeito certo.
          </h1>
          <p className="hero-sub">
            Com imagem inicial, referência visual e 4 aulas de como usar.{' '}
            <strong>Tudo por R$ 9,90.</strong>
          </p>
          <div className="hero-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/SURqiKo0GZ4?autoplay=0&rel=0&modestbranding=1"
              title="Seedance 2.0 — demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <CtaBtn />
          <p className="hero-trust">🔒 Compra 100% segura · Satisfação garantida</p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section features-section">
        <div className="section-inner">
          <p className="eyebrow">CONTEÚDOS</p>
          <h2 className="section-title">O que está incluso?</h2>
          <div className="features-grid">
            {FEATURES.map(f => (
              <div className="feature-card" key={f.name}>
                <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                <div className="feature-name">{f.name}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="checklist-box">
            <p className="checklist-title">📦 Você leva tudo isso:</p>
            <ul className="checklist">
              {CHECKLIST.map(item => (
                <li key={item}>
                  <span className="check-icon" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mid-cta">
            <CtaBtn />
            <p className="hero-cta-sub">Acesso imediato - R$9,90</p>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="section pricing-section">
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginBottom: 28 }}>
            Aproveite essa oferta!
          </p>
          <div className="pricing-card">
            <div className="pricing-badge">🔥 OFERTA DE LANÇAMENTO</div>
            <p className="pricing-from">De R$ 49,00</p>
            <div className="pricing-price">
              <span className="pricing-currency">R$</span>
              <span className="pricing-amount">9</span>
              <span className="pricing-cents">,90</span>
            </div>
            <p className="pricing-period">Pagamento único · Acesso vitalício</p>
            <a href={CHECKOUT_URL} className="pricing-cta">
              🎁 GARANTIR MEU ACESSO AGORA
            </a>
            <p className="pricing-cta-sub">Acesso imediato após o pagamento</p>
            <p className="pricing-trust">🔒 Compra 100% segura · Satisfação garantida</p>
          </div>
        </div>
      </section>

      {/* ── Instructor ── */}
      <section className="section instructor-section">
        <div className="instructor-inner">
          <p className="instructor-title">Quem vai te ensinar?</p>
          <p className="instructor-bio">
            <strong>Douglas Helmer</strong>, designer a mais de 20 anos, especialista em design de produtos 3D com mais de uma década de experiência.{'\n\n'}
            Pioneiro na integração de IA com workflows 3D no Brasil.{'\n\n'}
            Já treinou milhares de designers e ajudou centenas a transformarem suas carreiras, reduzindo tempo de produção em até 10x e aumentando significativamente seus ganhos.
          </p>
          <a href={CHECKOUT_URL} className="hero-cta">
            <span className="hero-cta-main">Garantir minha vaga agora</span>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section faq-section">
        <div className="section-inner">
          <p className="faq-eyebrow">TIRE SUA DÚVIDA</p>
          <h2 className="section-title">PERGUNTAS FREQUENTES</h2>
          <div className="faq-list">
            {FAQS.map(item => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p className="footer-brand">COMUNIDADE IA VIRAL ® - TODOS OS DIREITOS RESERVADOS</p>
        <p className="footer-legal">
          Nenhuma informação contida neste produto deve ser interpretada como uma afirmação da obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia abordada no conteúdo não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico. Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.
        </p>
      </footer>
    </>
  )
}
