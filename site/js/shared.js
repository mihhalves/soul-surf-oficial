// Shared JavaScript for navbar, footer, and modals

// Resolve URLs from this script location so it works in Vite and plain static servers.
const siteBase = new URL('../', import.meta.url)
const siteUrl = (path) => new URL(path, siteBase).toString()
const logoUrl = new URL('fotos/491803886_10233882011684977_8940823745485622745_n.jpg', siteBase).href
const homeUrl = siteUrl('index.html')
const homePathname = new URL(homeUrl).pathname
const currentPathname = window.location.pathname
const isHomePage = currentPathname === homePathname || currentPathname === `${homePathname.replace(/index\.html$/, '')}`

const urls = {
  home: homeUrl,
  about: siteUrl('sobre.html'),
  initiatives: siteUrl('iniciativas.html'),
  support: siteUrl('apoie-o-soul-surf.html'),
  transparency: siteUrl('transparencia.html'),
  contact: siteUrl('contato.html'),
  gallery: isHomePage ? '#gallery' : `${homeUrl}#gallery`,
  blog: isHomePage ? '#blog' : `${homeUrl}#blog`,
  mvv: `${siteUrl('sobre.html')}#mvv`,
  water: isHomePage ? '#water' : `${homeUrl}#water`,
  sponsors: isHomePage ? '#sponsors' : `${homeUrl}#sponsors`,
  terms: siteUrl('termos-de-uso.html'),
  privacy: siteUrl('politica-de-privacidade.html'),
  cookies: siteUrl('politica-cookies.html'),
  logo: logoUrl,
}

// Load shared header
function loadSharedHeader() {
  const headerHTML = `
    <nav id="navbar" role="navigation" aria-label="Navegação principal">
      <div class="container">
        <div class="nav-inner">
          <a href="${urls.home}" class="nav-logo" aria-label="Projeto Soul Surf — início">
            <div class="nav-logo-icon" aria-hidden="true">
              <img src="${urls.logo}" alt="Crianças do Projeto Soul Surf" />
            </div>
            <div class="nav-logo-text">
              <strong>Soul Surf</strong>
              <span>Projeto Social</span>
            </div>
          </a>

          <ul class="nav-links">
            <li><a href="${urls.home}">Início</a></li>
            <li><a href="${urls.about}">Sobre</a></li>
            <li><a href="${urls.initiatives}">Iniciativas</a></li>
            <li><a href="${urls.support}">Apoie</a></li>
            <li><a href="${urls.gallery}">Galeria</a></li>
            <li><a href="${urls.transparency}">Transparência</a></li>
            <li><a href="${urls.contact}">Contato</a></li>
          </ul>

          <a href="https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy" target="_blank" rel="noopener noreferrer" class="nav-cta btn btn-primary">
            Ajude a transformar vidas
          </a>

          <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Menu mobile">
      <a href="${urls.home}" onclick="closeMobileMenu()">Início</a>
      <a href="${urls.about}" onclick="closeMobileMenu()">Sobre</a>
      <a href="${urls.initiatives}" onclick="closeMobileMenu()">Iniciativas</a>
      <a href="${urls.support}" onclick="closeMobileMenu()">Apoie</a>
      <a href="${urls.gallery}" onclick="closeMobileMenu()">Galeria</a>
      <a href="${urls.transparency}" onclick="closeMobileMenu()">Transparência</a>
      <a href="${urls.contact}" onclick="closeMobileMenu()">Contato</a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Load shared footer
function loadSharedFooter() {
  const footerHTML = `
    <footer id="footer" aria-label="Rodapé">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="${urls.home}" style="display:inline-flex;align-items:center;gap:12px;color:#fff;" aria-label="Soul Surf — voltar ao início">
              <div class="nav-logo-icon" aria-hidden="true">
                <img src="${urls.logo}" alt="Crianças do Projeto Soul Surf" />
              </div>
              <div class="nav-logo-text">
                <strong>Soul Surf</strong>
                <span>Do Mar Pra Vida</span>
              </div>
            </a>
            <p>Projeto social que usa o surf como ferramenta de inclusão, educação e transformação de vidas em Itanhaém/SP desde 2021.</p>
          </div>

          <div class="footer-col">
            <h4>Projeto</h4>
            <ul>
              <li><a href="${urls.about}">O Projeto</a></li>
              <li><a href="${urls.initiatives}">Iniciativas</a></li>
              <li><a href="${urls.support}">Apoie o Soul Surf</a></li>
              <li><a href="${urls.gallery}">Galeria</a></li>
              <li><a href="${urls.blog}">Blog</a></li>
              <li><a href="${urls.mvv}">Missão, Visão e Valores</a></li>
              <li><a href="${urls.water}">Campanha Água</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Transparência</h4>
            <ul>
              <li><a href="${urls.transparency}">Portal</a></li>
              <li><a href="${urls.transparency}">Relatórios</a></li>
              <li><a href="${urls.sponsors}">Parceiros</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Doe</h4>
            <ul>
              <li><a href="https://benfeitoria.com/projeto/projeto-social-soul-surf-10zy" target="_blank" rel="noopener noreferrer">Via Benfeitoria</a></li>
              <li><a href="${urls.support}">Outras formas</a></li>
            </ul>
            <h4 style="margin-top: 28px;">Redes Sociais</h4>
            <div class="footer-social" style="margin-top: 12px;">
              <a href="https://www.facebook.com/projetosoulsurf" target="_blank" rel="noopener noreferrer" aria-label="Facebook do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/projetosoulsurf/" target="_blank" rel="noopener noreferrer" aria-label="Instagram do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@projetosoulsurf" target="_blank" rel="noopener noreferrer" aria-label="YouTube do Projeto Soul Surf">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-legal">
            <button onclick="openLegalModal('${urls.terms}', 'Termos de Uso')">Termos de Uso</button>
            <span class="footer-legal-sep">·</span>
            <button onclick="openLegalModal('${urls.privacy}', 'Política de Privacidade')">Política de Privacidade</button>
            <span class="footer-legal-sep">·</span>
            <button onclick="openLegalModal('${urls.cookies}', 'Política de Cookies')">Política de Cookies</button>
          </div>
          <p>© 2026 Projeto Soul Surf — Ass. de Surf Cibratel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <div class="legal-modal-overlay" id="legalModalOverlay">
      <div class="legal-modal">
        <div class="legal-modal-header">
          <h3 id="legalModalTitle">Documento</h3>
          <button class="legal-modal-close" onclick="closeLegalModal()" aria-label="Fechar">X</button>
        </div>
        <iframe id="legalModalIframe" src="" title="Documento legal"></iframe>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

// Setup navbar functionality
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelector('#navbar .nav-links');
  const navCta = document.querySelector('#navbar .nav-cta');

  // Defensive mobile fallback: guarantees correct navbar rendering even with stale CSS cache.
  function syncResponsiveNavbar() {
    const isMobile = window.matchMedia('(max-width: 1280px)').matches;

    if (isMobile) {
      if (navLinks) navLinks.style.setProperty('display', 'none', 'important');
      if (navCta) navCta.style.setProperty('display', 'none', 'important');
      hamburger.style.setProperty('display', 'flex', 'important');
      hamburger.style.width = '42px';
      hamburger.style.height = '42px';
      hamburger.style.padding = '8px';
      hamburger.style.flexShrink = '0';
      mobileMenu.style.flexDirection = 'column';
      mobileMenu.style.top = '72px';
      if (!hamburger.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.style.setProperty('display', 'none', 'important');
        hamburger.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.style.setProperty('display', 'flex', 'important');
      }
    } else {
      if (navLinks) navLinks.style.removeProperty('display');
      if (navCta) navCta.style.removeProperty('display');
      hamburger.style.removeProperty('display');
      hamburger.style.width = '';
      hamburger.style.height = '';
      hamburger.style.padding = '';
      hamburger.style.flexShrink = '';
      mobileMenu.style.removeProperty('display');
      mobileMenu.style.removeProperty('flex-direction');
      mobileMenu.style.removeProperty('top');
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  syncResponsiveNavbar();
  window.addEventListener('resize', syncResponsiveNavbar);

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    mobileMenu.style.setProperty('display', mobileMenu.classList.contains('open') ? 'flex' : 'none', 'important');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('open'));
  });
}

// Close mobile menu
function closeMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  mobileMenu.style.setProperty('display', 'none', 'important');
  hamburger.setAttribute('aria-expanded', 'false');
}

// Legal modal functions
function openLegalModal(url, title) {
  const overlay = document.getElementById('legalModalOverlay');
  const iframe = document.getElementById('legalModalIframe');
  const modalTitle = document.getElementById('legalModalTitle');

  modalTitle.textContent = title;
  iframe.src = url;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLegalModal() {
  const overlay = document.getElementById('legalModalOverlay');
  const iframe = document.getElementById('legalModalIframe');

  overlay.classList.remove('open');
  iframe.src = '';
  document.body.style.overflow = '';
}

window.closeMobileMenu = closeMobileMenu;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;

// CTA floating
function setupCtaFloating() {
  const cta = document.querySelector('.cta-floating');
  if (!cta) return;

  let scrolled = false;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300 && !scrolled) {
      cta.classList.add('show');
      scrolled = true;
    } else if (window.scrollY <= 300 && scrolled) {
      cta.classList.remove('show');
      scrolled = false;
    }
  });

  const closeBtn = cta.querySelector('.cta-floating-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      cta.style.display = 'none';
    });
  }
}

// Initialize shared components
document.addEventListener('DOMContentLoaded', () => {
  loadSharedHeader();
  loadSharedFooter();
  setupNavbar();
  setupCtaFloating();
});