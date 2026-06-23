const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll(".main-nav a");
const revealItems = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll("[data-lang]");
const albumGrid = document.querySelector("[data-album-grid]");
const albumSection = document.querySelector("#album");
const albumShortcuts = document.querySelector("[data-album-shortcuts]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const metaDescription = document.querySelector('meta[name="description"]');
const scrollProgress = document.querySelector("[data-scroll-progress]");
const hero = document.querySelector(".hero");
const motionMedia = document.querySelectorAll(".profile-card, .school-card");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const albumBasePath = "assets/Portfolio-web";
const albumAssetVersion = "20260623-portfolio";

const albumPhotos = [
  "20260623_115158.jpg",
  "20260522_103321.jpg",
  "20260401_111029.jpg",
  "20260521_113036.jpg",
  "20260410_084400.jpg",
  "20260426_181147.jpg",
  "20260606_135423.jpg",
  "20260306_112831.jpg",
  "20260609_172814.jpg",
  "IMG_20260218_180434.jpg",
  "20260414_110610.jpg",
  "20260403_091911.jpg",
  "20260613_213722.jpg",
  "20260306_113107.jpg",
  "20260617_175702.jpg",
  "20260414_111136.jpg",
  "20260529_131649.jpg",
  "20260403_112107.jpg",
  "20260225_182725.jpg",
  "20260225_183527.jpg",
  "20260522_123531.jpg",
  "20260419_144803.jpg",
  "20260410_211815.jpg",
  "20260521_112237.jpg",
  "20260521_112316.jpg",
  "20260401_111015.jpg",
  "20260603_132142.jpg",
  "20260522_090103.jpg",
  "20260225_173322.jpg",
  "20260617_174035.jpg",
  "20260617_174730.jpg",
  "20260619_193634.jpg",
  "20260224_163416.jpg",
  "20260403_194510.jpg",
  "20260404_211351.jpg",
  "20260403_194500.jpg",
  "20260614_185415.jpg",
  "20260614_185540.jpg",
  "20260410_105941.jpg",
  "20260410_105944.jpg",
  "20260411_124337.jpg",
  "20260312_121324.jpg",
  "20260314_152811.jpg",
  "20260314_152849.jpg",
  "20260529_100713.jpg",
  "20260522_090052.jpg",
  "20260610_145250.jpg",
  "20260610_145300.jpg",
  "20260608_180427.jpg",
  "20260528_221513.jpg",
  "20260528_221702.jpg",
  "20260529_100655.jpg",
  "20260408_091111.jpg",
  "IMG_20260219_161659.jpg",
  "20260410_103421.jpg",
  "IMG_20260211_190902.jpg",
  "IMG_20260212_183035.jpg",
  "IMG_20260213_180132.jpg",
  "20260610_145211.jpg",
  "20260612_160629.jpg",
  "20260612_160635.jpg",
  "20260612_160654.jpg",
  "20260304_185348.jpg",
  "20260304_185400.jpg",
  "20260331_185121.jpg",
  "20260331_185426.jpg",
  "20260408_112444.jpg",
  "20260410_105959.jpg",
  "20260504_180315.jpg",
  "20260504_185247.jpg",
  "20260523_125040.jpg",
  "20260530_145014.jpg",
  "IMG_20260219_182824.jpg",
  "IMG_20260206_201717.jpg",
  "20260302_174004.jpg",
  "20260603_080533.jpg",
  "20260603_110333.jpg",
  "20260522_115701.jpg"
];

const i18n = {
  fr: {
    htmlLang: "fr",
    title: "Florian CARBON | CAP Pâtisserie à l'École Ducasse",
    description: "Portfolio de Florian CARBON, en CAP pâtisserie à l'École Ducasse – École Nationale Supérieure de Pâtisserie, à la recherche d'une opportunité professionnelle.",
    photoLabel: (date, fallback) => date ? `Réalisation du ${date}` : `Réalisation ${fallback}`,
    viewPhoto: (label) => `Voir ${label.toLowerCase()}`,
    text: {
      '.main-nav a[href="#profil"]': "Profil",
      '.main-nav a[href="#creations"]': "Savoir-faire",
      '.main-nav a[href="#album"]': "Album",
      '.main-nav a[href="#atelier"]': "Méthode",
      '.main-nav a[href="#services"]': "Parcours",
      '.main-nav a[href="#contact"]': "Contact",
      ".hero .eyebrow": "CAP pâtisserie · École Ducasse – ENSP",
      ".hero-copy": "Apprenant motivé, sérieux et appliqué, je construis mes bases en pâtisserie avec l'objectif de rejoindre une équipe professionnelle, en priorité auprès d'un employeur américain.",
      ".hero-actions .button-primary": "Voir l'album",
      ".hero-actions .button-secondary": "Me contacter",
      ".intro-copy .eyebrow": "Profil",
      ".school-intro .eyebrow": "Formation à l'École Ducasse",
      ".summary-block .journey-kicker": "Résumé de mon parcours",
      ".summary-title": "De la finance à la pâtisserie française",
      ".summary-text-1": "Mon parcours a d'abord pris racine dans la finance, avec un Master Grande École spécialisé en finance, une formation sélective comparable à un graduate degree en business ou finance aux États-Unis.",
      ".summary-text-2": "Cette formation m'a apporté une méthode de travail structurée, une grande rigueur d'analyse, une attention constante aux coûts, aux marges, à l'organisation et à la prise de décision.",
      ".summary-text-3": "Après avoir exploré le secteur financier, j'ai choisi de réorienter mon avenir professionnel vers une passion plus concrète, plus artisanale et profondément liée à la culture française : la pâtisserie.",
      ".summary-text-4": "Je prépare aujourd'hui mon CAP pâtisserie à l'École Ducasse, au sein de l'École Nationale Supérieure de Pâtisserie à Yssingeaux, une institution de référence reconnue internationalement pour l'excellence de son enseignement et la transmission du savoir-faire pâtissier français.",
      ".summary-text-5": "La pâtisserie me permet d'appliquer autrement les qualités acquises en finance : rigueur, organisation, précision et attention aux coûts. Je veux maintenant progresser dans ce métier avec sérieux et exigence.",
      ".portfolio-purpose .journey-kicker": "Objectif de mon portfolio",
      ".purpose-title": "Un futur pâtissier en construction, formé à l'exigence française.",
      ".purpose-text-1": "Ce portfolio rassemble mes réalisations de CAP pâtisserie à l'École Ducasse – École Nationale Supérieure de Pâtisserie, mes essais personnels et les gestes techniques que je travaille au quotidien.",
      ".purpose-text-2": "L'École Ducasse fait partie des institutions culinaires et pâtissières françaises les plus reconnues à l'international. Elle est associée à l'excellence gastronomique, à la précision du geste et à la transmission du savoir-faire français.",
      ".purpose-text-3": "Mon objectif est d'intégrer une équipe, idéalement aux États-Unis ou auprès d'un employeur américain, afin de gagner en régularité, en rapidité et en exigence professionnelle.",
      ".purpose-text-4": "Je souhaite continuer à apprendre au contact de professionnels expérimentés, contribuer avec sérieux au travail d'un laboratoire ou d'une brigade, et développer progressivement une maîtrise solide de la pâtisserie française.",
      ".school-card figcaption": "École Nationale Supérieure de Pâtisserie · Yssingeaux",
      ".profile-card figcaption": "Florian Carbon",
      "#creations .eyebrow": "Compétences travaillées",
      "#creations h2": "Les bases que je développe.",
      ".creation-card:nth-of-type(1) .creation-body p": "Entremets",
      ".creation-card:nth-of-type(1) h3": "Montages et finitions",
      ".creation-card:nth-of-type(1) span": "Mousses, inserts, glaçages et décors travaillés en formation.",
      ".creation-card:nth-of-type(2) .creation-body p": "Tartes",
      ".creation-card:nth-of-type(2) h3": "Fonçage, cuisson, garniture",
      ".creation-card:nth-of-type(2) span": "Pâtes, crèmes, fruits et finitions nettes pour une lecture claire.",
      ".creation-card:nth-of-type(3) .creation-body p": "Pâte à choux",
      ".creation-card:nth-of-type(3) h3": "Choux, éclairs, religieuses",
      ".creation-card:nth-of-type(3) span": "Régularité, dressage, cuisson, garniture et glaçage.",
      ".creation-card:nth-of-type(4) .creation-body p": "Chocolat",
      ".creation-card:nth-of-type(4) h3": "Goût, brillance, précision",
      ".creation-card:nth-of-type(4) span": "Travail des textures, décors simples et finitions propres.",
      ".creation-card:nth-of-type(5) .creation-body p": "Viennoiserie",
      ".creation-card:nth-of-type(5) h3": "Feuilletage et régularité",
      ".creation-card:nth-of-type(5) span": "Gestes techniques, cuisson, dorure et présentation.",
      ".creation-card:nth-of-type(6) .creation-body p": "Production",
      ".creation-card:nth-of-type(6) h3": "Séries et organisation",
      ".creation-card:nth-of-type(6) span": "Alignement, répétition des gestes et soin apporté aux détails.",
      ".album-section .eyebrow": "Album formation",
      ".album-section h2": "Réalisations en images",
      ".album-section .section-heading p:last-child": "Une sélection de mes réalisations issues du CAP pâtisserie à l'École Ducasse – ENSP, classée pour montrer ma progression et la diversité des gestes travaillés.",
      ".atelier-copy .eyebrow": "Méthode",
      ".atelier-copy h2": "Apprendre les bons gestes, les répéter, les rendre plus réguliers.",
      ".atelier-copy p:last-child": "En formation, je travaille surtout la précision, l'organisation du poste, la propreté, le respect des étapes et la régularité. Chaque réalisation est une occasion de mieux comprendre les textures, les cuissons et les finitions attendues en laboratoire.",
      ".timeline div:nth-of-type(1) h3": "Comprendre",
      ".timeline div:nth-of-type(1) p": "Lire une fiche technique, préparer le poste et anticiper les étapes.",
      ".timeline div:nth-of-type(2) h3": "Répéter",
      ".timeline div:nth-of-type(2) p": "Travailler les gestes jusqu'à gagner en précision et en régularité.",
      ".timeline div:nth-of-type(3) h3": "Progresser",
      ".timeline div:nth-of-type(3) p": "Observer, corriger, accepter les retours et améliorer le rendu final.",
      ".services .eyebrow": "Parcours",
      ".services h2": "CAP pâtisserie à l'École Ducasse, expérience et projet professionnel vers les États-Unis.",
      ".service-item:nth-of-type(1) span": "Formation",
      ".service-item:nth-of-type(1) h3": "CAP pâtisserie à l'École Ducasse – ENSP",
      ".service-item:nth-of-type(1) p": "Une formation au sein d'une institution française de renommée internationale : pâtes, crèmes, entremets, pâte à choux, viennoiserie, hygiène et organisation.",
      ".service-item:nth-of-type(2) span": "Expérience",
      ".service-item:nth-of-type(2) h3": "Un stage en pâtisserie",
      ".service-item:nth-of-type(2) p": "Première immersion professionnelle: rythme de laboratoire, observation des méthodes, aide à la production et respect des consignes.",
      ".service-item:nth-of-type(3) span": "Objectif",
      ".service-item:nth-of-type(3) h3": "Rejoindre un employeur américain",
      ".service-item:nth-of-type(3) p": "Je recherche une structure où m'investir, progresser avec régularité et devenir rapidement utile à l'équipe, avec une attention particulière pour les opportunités aux États-Unis.",
      ".contact-copy .eyebrow": "Contact",
      ".contact-copy h2": "Disponible pour échanger avec un employeur américain.",
      ".contact-copy .contact-text": "Je prépare mon CAP pâtisserie à l'École Ducasse – ENSP et souhaite rejoindre une équipe, en particulier aux États-Unis, qui valorise le sérieux, la curiosité et l'envie d'apprendre.",
      ".site-footer p": "© 2026 Florian CARBON. Portfolio pâtisserie.",
      '.site-footer a[href="#accueil"]': "Retour en haut"
    },
    attrs: {
      ".brand": { "aria-label": "Retour à l'accueil" },
      ".nav-toggle": { "aria-label": "Ouvrir le menu" },
      ".language-switch": { "aria-label": "Choisir la langue" },
      ".hero": { "aria-label": "Accueil" },
      ".hero-image": { "alt": "Sélection élégante de pâtisseries artisanales sur un plan de travail." },
      ".scroll-cue": { "aria-label": "Aller aux créations" },
      ".intro": { "aria-label": "Présentation" },
      ".school-intro": { "aria-label": "Formation à l'École Ducasse" },
      ".summary-block": { "aria-label": "Résumé du parcours" },
      ".portfolio-purpose": { "aria-label": "Objectif de mon portfolio" },
      ".profile-card img": { "alt": "Florian Carbon en tenue de pâtissier à l'École Ducasse." },
      ".school-card img": { "alt": "École Nationale Supérieure de Pâtisserie à Yssingeaux." },
      ".album-grid": { "aria-label": "Album photo des réalisations" },
      ".album-shortcuts": { "aria-label": "Navigation dans l'album" },
      ".album-jump-top": { "aria-label": "Aller au début de l'album" },
      ".album-step-up": { "aria-label": "Monter de 2 lignes" },
      ".album-step-down": { "aria-label": "Descendre de 2 lignes" },
      ".album-jump-end": { "aria-label": "Aller à la fin de l'album" },
      ".lightbox-close": { "aria-label": "Fermer l'image" },
      ".lightbox-prev": { "aria-label": "Photo précédente" },
      ".lightbox-next": { "aria-label": "Photo suivante" }
    }
  },
  en: {
    htmlLang: "en",
    title: "Florian CARBON | CAP Pastry at École Ducasse",
    description: "Portfolio of Florian CARBON, completing French CAP pastry training at École Ducasse – École Nationale Supérieure de Pâtisserie and seeking a professional opportunity.",
    photoLabel: (date, fallback) => date ? `Work from ${date}` : `Work ${fallback}`,
    viewPhoto: (label) => `View ${label.toLowerCase()}`,
    text: {
      '.main-nav a[href="#profil"]': "Profile",
      '.main-nav a[href="#creations"]': "Skills",
      '.main-nav a[href="#album"]': "Gallery",
      '.main-nav a[href="#atelier"]': "Method",
      '.main-nav a[href="#services"]': "Path",
      '.main-nav a[href="#contact"]': "Contact",
      ".hero .eyebrow": "French CAP pastry · École Ducasse – ENSP",
      ".hero-copy": "Motivated, serious and hands-on, I am building my pastry foundations with the goal of joining a professional team, preferably with an American employer.",
      ".hero-actions .button-primary": "View gallery",
      ".hero-actions .button-secondary": "Contact me",
      ".intro-copy .eyebrow": "Profile",
      ".school-intro .eyebrow": "Training at École Ducasse",
      ".summary-block .journey-kicker": "Career overview",
      ".summary-title": "From Finance to French Pastry",
      ".summary-text-1": "My journey first took root in finance, with a Master Grande École specializing in Finance, a selective degree comparable to a graduate degree in business or finance in the United States.",
      ".summary-text-2": "This background gave me a structured way of working, strong analytical discipline, and constant attention to costs, margins, organization and decision-making.",
      ".summary-text-3": "After exploring the finance sector, I chose to redirect my professional future toward a passion that is more concrete, more artisanal and deeply connected to French culture: pastry.",
      ".summary-text-4": "I am currently completing my French CAP pastry training at École Ducasse, within the École Nationale Supérieure de Pâtisserie in Yssingeaux, an internationally recognized institution renowned for the excellence of its teaching and the transmission of French pastry craftsmanship.",
      ".summary-text-5": "Pastry allows me to apply the qualities I developed in finance in a different way: rigor, organization, precision and attention to costs. I now want to progress in this craft with seriousness and high standards.",
      ".portfolio-purpose .journey-kicker": "Purpose of my portfolio",
      ".purpose-title": "A future pastry chef in training, shaped by French standards.",
      ".purpose-text-1": "This portfolio brings together work from my French CAP pastry training at École Ducasse – École Nationale Supérieure de Pâtisserie, my personal trials and the technical skills I practise every day.",
      ".purpose-text-2": "École Ducasse is one of the most internationally recognized French culinary and pastry institutions. It is associated with gastronomic excellence, precision of craft and the transmission of French savoir-faire.",
      ".purpose-text-3": "My goal is to join a team, ideally in the United States or with an American employer, in order to gain consistency, speed and professional standards.",
      ".purpose-text-4": "I want to keep learning alongside experienced professionals, contribute seriously to the work of a pastry lab or brigade, and gradually develop a strong command of French pastry.",
      ".school-card figcaption": "École Nationale Supérieure de Pâtisserie · Yssingeaux",
      ".profile-card figcaption": "Florian Carbon",
      "#creations .eyebrow": "Skills in progress",
      "#creations h2": "The foundations I am developing.",
      ".creation-card:nth-of-type(1) .creation-body p": "Entremets",
      ".creation-card:nth-of-type(1) h3": "Assembly and finishing",
      ".creation-card:nth-of-type(1) span": "Mousses, inserts, glazes and decorations practised during training.",
      ".creation-card:nth-of-type(2) .creation-body p": "Tarts",
      ".creation-card:nth-of-type(2) h3": "Lining, baking, filling",
      ".creation-card:nth-of-type(2) span": "Doughs, creams, fruit and clean finishes for a clear presentation.",
      ".creation-card:nth-of-type(3) .creation-body p": "Choux pastry",
      ".creation-card:nth-of-type(3) h3": "Choux, éclairs, religieuses",
      ".creation-card:nth-of-type(3) span": "Consistency, piping, baking, filling and glazing.",
      ".creation-card:nth-of-type(4) .creation-body p": "Chocolate",
      ".creation-card:nth-of-type(4) h3": "Taste, shine, precision",
      ".creation-card:nth-of-type(4) span": "Texture work, simple decoration and clean finishing.",
      ".creation-card:nth-of-type(5) .creation-body p": "Viennoiserie",
      ".creation-card:nth-of-type(5) h3": "Lamination and consistency",
      ".creation-card:nth-of-type(5) span": "Technical gestures, baking, egg wash and presentation.",
      ".creation-card:nth-of-type(6) .creation-body p": "Production",
      ".creation-card:nth-of-type(6) h3": "Batches and organisation",
      ".creation-card:nth-of-type(6) span": "Alignment, repetition of gestures and attention to detail.",
      ".album-section .eyebrow": "Training gallery",
      ".album-section h2": "Work in pictures",
      ".album-section .section-heading p:last-child": "A selection of work from my French CAP pastry training at École Ducasse – ENSP, arranged to show my progress and the variety of techniques I am learning.",
      ".atelier-copy .eyebrow": "Method",
      ".atelier-copy h2": "Learning the right gestures, repeating them, making them more consistent.",
      ".atelier-copy p:last-child": "During training, I focus on precision, workstation organisation, cleanliness, following each step and consistency. Every piece helps me better understand textures, baking and the finishes expected in a pastry lab.",
      ".timeline div:nth-of-type(1) h3": "Understand",
      ".timeline div:nth-of-type(1) p": "Read a technical sheet, prepare the workstation and anticipate the steps.",
      ".timeline div:nth-of-type(2) h3": "Repeat",
      ".timeline div:nth-of-type(2) p": "Practise the gestures until they become more precise and consistent.",
      ".timeline div:nth-of-type(3) h3": "Improve",
      ".timeline div:nth-of-type(3) p": "Observe, correct, accept feedback and improve the final result.",
      ".services .eyebrow": "Path",
      ".services h2": "French CAP pastry training at École Ducasse, experience and a professional project toward the United States.",
      ".service-item:nth-of-type(1) span": "Training",
      ".service-item:nth-of-type(1) h3": "French CAP pastry at École Ducasse – ENSP",
      ".service-item:nth-of-type(1) p": "Training within an internationally renowned French institution: doughs, creams, entremets, choux pastry, viennoiserie, hygiene and organisation.",
      ".service-item:nth-of-type(2) span": "Experience",
      ".service-item:nth-of-type(2) h3": "One pastry internship",
      ".service-item:nth-of-type(2) p": "First professional immersion: pastry lab pace, observing methods, helping with production and following instructions.",
      ".service-item:nth-of-type(3) span": "Goal",
      ".service-item:nth-of-type(3) h3": "Join an American employer",
      ".service-item:nth-of-type(3) p": "I am looking for a place where I can commit myself, progress steadily and quickly become useful to the team, with a special interest in opportunities in the United States.",
      ".contact-copy .eyebrow": "Contact",
      ".contact-copy h2": "Available to speak with an American employer.",
      ".contact-copy .contact-text": "I am completing my French CAP pastry training at École Ducasse – ENSP and would like to join a team, especially in the United States, that values reliability, curiosity and a strong desire to learn.",
      ".site-footer p": "© 2026 Florian CARBON. Pastry portfolio.",
      '.site-footer a[href="#accueil"]': "Back to top"
    },
    attrs: {
      ".brand": { "aria-label": "Back to top" },
      ".nav-toggle": { "aria-label": "Open menu" },
      ".language-switch": { "aria-label": "Choose language" },
      ".hero": { "aria-label": "Home" },
      ".hero-image": { "alt": "Elegant selection of handmade pastries on a worktop." },
      ".scroll-cue": { "aria-label": "Go to skills" },
      ".intro": { "aria-label": "Profile" },
      ".school-intro": { "aria-label": "Training at École Ducasse" },
      ".summary-block": { "aria-label": "Career overview" },
      ".portfolio-purpose": { "aria-label": "Purpose of my portfolio" },
      ".profile-card img": { "alt": "Florian Carbon wearing a pastry chef jacket at École Ducasse." },
      ".school-card img": { "alt": "École Nationale Supérieure de Pâtisserie in Yssingeaux, France." },
      ".album-grid": { "aria-label": "Photo gallery of pastry work" },
      ".album-shortcuts": { "aria-label": "Gallery navigation" },
      ".album-jump-top": { "aria-label": "Go to the top of the gallery" },
      ".album-step-up": { "aria-label": "Move up 2 rows" },
      ".album-step-down": { "aria-label": "Move down 2 rows" },
      ".album-jump-end": { "aria-label": "Go to the end of the gallery" },
      ".lightbox-close": { "aria-label": "Close image" },
      ".lightbox-prev": { "aria-label": "Previous photo" },
      ".lightbox-next": { "aria-label": "Next photo" }
    }
  }
};

let activePhotoIndex = 0;
let currentLanguage = i18n[localStorage.getItem("portfolioLanguage")] ? localStorage.getItem("portfolioLanguage") : "fr";
let lightboxCloseTimer = 0;

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function updateScrollMotion() {
  const scrollTop = window.scrollY;
  const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

  if (scrollProgress) {
    scrollProgress.style.setProperty("--scroll-progress", String(Math.min(1, scrollTop / scrollRange)));
  }

  if (reducedMotion.matches) {
    return;
  }

  if (hero) {
    const heroProgress = Math.min(1, scrollTop / Math.max(1, hero.offsetHeight));
    hero.style.setProperty("--hero-shift", `${heroProgress * 28}px`);
  }

  motionMedia.forEach((media) => {
    const rect = media.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const mediaCenter = rect.top + rect.height / 2;
    const shift = Math.max(-12, Math.min(12, (viewportCenter - mediaCenter) * 0.025));
    media.style.setProperty("--media-shift", `${shift}px`);
  });
}

function closeMenu() {
  nav.classList.remove("is-open");
  header.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
  }
}

function setAttributes(selector, attrs) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  Object.entries(attrs).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
}

function applyLanguage(language) {
  const content = i18n[language] || i18n.fr;
  currentLanguage = language;
  localStorage.setItem("portfolioLanguage", language);
  document.documentElement.lang = content.htmlLang;
  document.title = content.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", content.description);
  }

  Object.entries(content.text).forEach(([selector, value]) => setText(selector, value));
  Object.entries(content.attrs).forEach(([selector, attrs]) => setAttributes(selector, attrs));

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderAlbum();

  if (lightbox && !lightbox.hidden) {
    updateLightbox(activePhotoIndex);
  }
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.add("is-navigating");
    applyLanguage(button.dataset.lang);
    window.setTimeout(() => document.body.classList.remove("is-navigating"), 420);
  });
});

function photoLabel(fileName, index) {
  const dateMatch = fileName.match(/(?:IMG_)?(\d{4})(\d{2})(\d{2})/);
  const content = i18n[currentLanguage] || i18n.fr;

  if (!dateMatch) {
    return content.photoLabel(null, index + 1);
  }

  const date = currentLanguage === "en"
    ? `${dateMatch[2]}/${dateMatch[3]}/${dateMatch[1]}`
    : `${dateMatch[3]}/${dateMatch[2]}/${dateMatch[1]}`;

  return content.photoLabel(date, index + 1);
}

function renderAlbum() {
  if (!albumGrid) {
    return;
  }

  albumGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();
  const content = i18n[currentLanguage] || i18n.fr;

  albumPhotos.forEach((fileName, index) => {
    const button = document.createElement("button");
    const image = document.createElement("img");
    const label = photoLabel(fileName, index);

    button.className = "album-item";
    button.type = "button";
    button.setAttribute("aria-label", content.viewPhoto(label));
    button.dataset.photoIndex = String(index);
    button.style.setProperty("--album-delay", `${(index % 6) * 55}ms`);

    image.alt = label;
    image.loading = "lazy";
    image.draggable = false;
    image.addEventListener("load", () => image.classList.add("is-loaded"), { once: true });
    image.src = `${albumBasePath}/${fileName}?v=${albumAssetVersion}`;

    if (image.complete) {
      image.classList.add("is-loaded");
    }

    button.appendChild(image);
    fragment.appendChild(button);
  });

  albumGrid.appendChild(fragment);
  observeAlbumItems();
}

function albumScrollOffset() {
  return window.innerWidth <= 640 ? 126 : 140;
}

function albumRowTops() {
  if (!albumGrid) {
    return [];
  }

  const rowTops = [];
  const items = Array.from(albumGrid.querySelectorAll(".album-item"));

  items.forEach((item) => {
    const top = Math.round(item.getBoundingClientRect().top + window.scrollY);
    const lastTop = rowTops[rowTops.length - 1];

    if (lastTop === undefined || Math.abs(top - lastTop) > 8) {
      rowTops.push(top);
    }
  });

  return rowTops.sort((a, b) => a - b);
}

function scrollAlbumRows(direction) {
  const rowTops = albumRowTops();
  if (!rowTops.length) {
    return;
  }

  const offset = albumScrollOffset();
  const currentTop = window.scrollY + offset + 4;
  const currentIndex = rowTops.reduce((activeIndex, top, index) => (
    top <= currentTop ? index : activeIndex
  ), 0);
  const targetIndex = Math.max(0, Math.min(rowTops.length - 1, currentIndex + direction * 2));

  window.scrollTo({
    top: rowTops[targetIndex] - offset,
    behavior: "smooth"
  });
}

function scrollAlbumTo(position) {
  if (position === "end" && albumGrid && albumSection) {
    const gridBottom = albumGrid.getBoundingClientRect().bottom + window.scrollY;
    const sectionBottom = albumSection.getBoundingClientRect().bottom + window.scrollY;
    const bottomBreathingRoom = window.innerWidth <= 640 ? 18 : 34;
    const targetTop = Math.max(0, Math.min(
      gridBottom - window.innerHeight + bottomBreathingRoom,
      sectionBottom - window.innerHeight - 2
    ));

    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });
    return;
  }

  const target = albumSection;

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function updateAlbumShortcuts() {
  if (!albumSection || !albumShortcuts) {
    return;
  }

  const rect = albumSection.getBoundingClientRect();
  const isInAlbum = rect.top < window.innerHeight * 0.74 && rect.bottom > window.innerHeight * 0.28;
  albumShortcuts.classList.toggle("is-visible", isInAlbum);
}

function updateLightbox(index) {
  activePhotoIndex = (index + albumPhotos.length) % albumPhotos.length;
  const fileName = albumPhotos[activePhotoIndex];
  const label = photoLabel(fileName, activePhotoIndex);

  lightboxImage.src = `${albumBasePath}/${fileName}?v=${albumAssetVersion}`;
  lightboxImage.alt = label;
  lightboxCaption.textContent = `${label} · ${activePhotoIndex + 1}/${albumPhotos.length}`;
}

function openLightbox(index) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  window.clearTimeout(lightboxCloseTimer);
  updateLightbox(index);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => lightbox.classList.add("is-open"));
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightboxCloseTimer = window.setTimeout(() => {
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }, reducedMotion.matches ? 0 : 240);
}

albumGrid?.addEventListener("click", (event) => {
  const item = event.target.closest("[data-photo-index]");

  if (item) {
    openLightbox(Number(item.dataset.photoIndex));
  }
});

albumShortcuts?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-album-scroll]");

  if (!button) {
    return;
  }

  const action = button.dataset.albumScroll;
  button.classList.remove("is-pressed");
  requestAnimationFrame(() => button.classList.add("is-pressed"));
  window.setTimeout(() => button.classList.remove("is-pressed"), 260);

  if (action === "top" || action === "end") {
    scrollAlbumTo(action);
    return;
  }

  if (action === "up") {
    scrollAlbumRows(-1);
  }

  if (action === "down") {
    scrollAlbumRows(1);
  }
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => updateLightbox(activePhotoIndex - 1));
lightboxNext?.addEventListener("click", () => updateLightbox(activePhotoIndex + 1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("contextmenu", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav?.classList.contains("is-open")) {
    closeMenu();
  }

  if (!lightbox || lightbox.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    updateLightbox(activePhotoIndex - 1);
  }

  if (event.key === "ArrowRight") {
    updateLightbox(activePhotoIndex + 1);
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.14
});

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 85}ms`);
  revealObserver.observe(item);
});

const albumObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      albumObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: "0px 0px -5% 0px"
});

function observeAlbumItems() {
  if (!albumGrid) {
    return;
  }

  albumGrid.querySelectorAll(".album-item").forEach((item) => albumObserver.observe(item));
}

applyLanguage(currentLanguage);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    const activeLink = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
    navLinks.forEach((link) => link.classList.remove("is-active"));

    if (activeLink) {
      activeLink.classList.add("is-active");
    }
  });
}, {
  rootMargin: "-44% 0px -48% 0px"
});

document.querySelectorAll("section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

let scrollFrame = 0;

function handleViewportChange() {
  if (scrollFrame) {
    return;
  }

  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;

    if (window.innerWidth > 900 && nav?.classList.contains("is-open")) {
      closeMenu();
    }

    updateScrollMotion();
    updateHeader();
    updateAlbumShortcuts();
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.add("is-navigating");
    window.setTimeout(() => document.body.classList.remove("is-navigating"), 420);
  });
});

document.addEventListener("click", (event) => {
  if (
    nav?.classList.contains("is-open")
    && !nav.contains(event.target)
    && !navToggle.contains(event.target)
  ) {
    closeMenu();
  }
});

window.addEventListener("scroll", handleViewportChange, { passive: true });
window.addEventListener("resize", handleViewportChange);
reducedMotion.addEventListener("change", handleViewportChange);
updateScrollMotion();
updateHeader();
updateAlbumShortcuts();
