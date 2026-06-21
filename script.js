const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = document.querySelectorAll(".main-nav a");
const revealItems = document.querySelectorAll(".reveal");
const langButtons = document.querySelectorAll("[data-lang]");
const albumGrid = document.querySelector("[data-album-grid]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrev = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
const metaDescription = document.querySelector('meta[name="description"]');

const albumBasePath = "assets/Portfolio-web";

const albumPhotos = [
  "20260522_103321.jpg",
  "20260401_111029.jpg",
  "20260521_113036.jpg",
  "20260410_084400.jpg",
  "20260426_181147.jpg",
  "20260606_135555.jpg",
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
    title: "Florian CARBON | Portfolio CAP Pâtisserie",
    description: "Portfolio de Florian CARBON, apprenant en CAP pâtisserie, à la recherche d'une opportunité auprès d'un employeur américain.",
    photoLabel: (date, fallback) => date ? `Réalisation du ${date}` : `Réalisation ${fallback}`,
    viewPhoto: (label) => `Voir ${label.toLowerCase()}`,
    text: {
      '.main-nav a[href="#creations"]': "Savoir-faire",
      '.main-nav a[href="#album"]': "Album",
      '.main-nav a[href="#atelier"]': "Atelier",
      '.main-nav a[href="#services"]': "Parcours",
      '.main-nav a[href="#contact"]': "Contact",
      ".hero .eyebrow": "CAP pâtisserie en cours",
      ".hero-copy": "Apprenant motivé, sérieux et appliqué, je construis mes bases en pâtisserie avec l'objectif de rejoindre une équipe professionnelle, en priorité auprès d'un employeur américain.",
      ".hero-actions .button-primary": "Voir l'album",
      ".hero-actions .button-secondary": "Me contacter",
      ".intro-copy .eyebrow": "Profil",
      ".intro-copy h2": "Un futur pâtissier en construction, avec l'envie de progresser.",
      ".intro-copy p:last-child": "Ce portfolio rassemble mes réalisations de formation CAP, mes essais personnels et les gestes que je travaille au quotidien. Mon objectif est d'intégrer une équipe, idéalement aux États-Unis ou auprès d'un employeur américain, pour gagner en régularité, en rapidité et en exigence professionnelle.",
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
      ".album-section .section-heading p:last-child": "Une sélection de mes réalisations actuelles, issues de la formation CAP, classée pour montrer ma progression et la diversité des gestes travaillés.",
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
      ".services h2": "Formation CAP, stage et projet professionnel vers les États-Unis.",
      ".service-item:nth-of-type(1) span": "Formation",
      ".service-item:nth-of-type(1) h3": "CAP pâtisserie en cours",
      ".service-item:nth-of-type(1) p": "Apprentissage des bases: pâtes, crèmes, entremets, pâte à choux, viennoiserie, hygiène et organisation.",
      ".service-item:nth-of-type(2) span": "Expérience",
      ".service-item:nth-of-type(2) h3": "Un stage en pâtisserie",
      ".service-item:nth-of-type(2) p": "Première immersion professionnelle: rythme de laboratoire, observation des méthodes, aide à la production et respect des consignes.",
      ".service-item:nth-of-type(3) span": "Objectif",
      ".service-item:nth-of-type(3) h3": "Rejoindre un employeur américain",
      ".service-item:nth-of-type(3) p": "Je recherche une structure où m'investir, progresser avec régularité et devenir rapidement utile à l'équipe, avec une attention particulière pour les opportunités aux États-Unis.",
      ".contact-copy .eyebrow": "Candidature",
      ".contact-copy h2": "Disponible pour échanger avec un employeur américain.",
      ".contact-copy p": "Je suis en formation CAP pâtisserie et je souhaite rejoindre une équipe, en particulier aux États-Unis, qui valorise le sérieux, la curiosité et l'envie d'apprendre.",
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
      ".profile-card img": { "alt": "Florian Carbon en tenue de pâtissier à l'École Ducasse." },
      ".album-grid": { "aria-label": "Album photo des réalisations" },
      ".lightbox-close": { "aria-label": "Fermer l'image" },
      ".lightbox-prev": { "aria-label": "Photo précédente" },
      ".lightbox-next": { "aria-label": "Photo suivante" }
    }
  },
  en: {
    htmlLang: "en",
    title: "Florian CARBON | CAP Pastry Portfolio",
    description: "Portfolio of Florian CARBON, CAP pastry student seeking an opportunity with an American employer.",
    photoLabel: (date, fallback) => date ? `Work from ${date}` : `Work ${fallback}`,
    viewPhoto: (label) => `View ${label.toLowerCase()}`,
    text: {
      '.main-nav a[href="#creations"]': "Skills",
      '.main-nav a[href="#album"]': "Gallery",
      '.main-nav a[href="#atelier"]': "Method",
      '.main-nav a[href="#services"]': "Path",
      '.main-nav a[href="#contact"]': "Contact",
      ".hero .eyebrow": "CAP pastry training in progress",
      ".hero-copy": "Motivated, serious and hands-on, I am building my pastry foundations with the goal of joining a professional team, preferably with an American employer.",
      ".hero-actions .button-primary": "View gallery",
      ".hero-actions .button-secondary": "Contact me",
      ".intro-copy .eyebrow": "Profile",
      ".intro-copy h2": "A future pastry chef in training, eager to progress.",
      ".intro-copy p:last-child": "This portfolio brings together my CAP training work, personal trials and the techniques I practise every day. My goal is to join a team, ideally in the United States or with an American employer, where I can gain consistency, speed and professional standards.",
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
      ".album-section .section-heading p:last-child": "A selection of my current work from CAP training, arranged to show my progress and the variety of techniques I am learning.",
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
      ".services h2": "CAP training, internship and a professional project toward the United States.",
      ".service-item:nth-of-type(1) span": "Training",
      ".service-item:nth-of-type(1) h3": "CAP pastry training in progress",
      ".service-item:nth-of-type(1) p": "Learning the foundations: doughs, creams, entremets, choux pastry, viennoiserie, hygiene and organisation.",
      ".service-item:nth-of-type(2) span": "Experience",
      ".service-item:nth-of-type(2) h3": "One pastry internship",
      ".service-item:nth-of-type(2) p": "First professional immersion: pastry lab pace, observing methods, helping with production and following instructions.",
      ".service-item:nth-of-type(3) span": "Goal",
      ".service-item:nth-of-type(3) h3": "Join an American employer",
      ".service-item:nth-of-type(3) p": "I am looking for a place where I can commit myself, progress steadily and quickly become useful to the team, with a special interest in opportunities in the United States.",
      ".contact-copy .eyebrow": "Application",
      ".contact-copy h2": "Available to speak with an American employer.",
      ".contact-copy p": "I am currently training for a CAP in pastry and would like to join a team, especially in the United States, that values seriousness, curiosity and the desire to learn.",
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
      ".profile-card img": { "alt": "Florian Carbon wearing a pastry chef jacket at École Ducasse." },
      ".album-grid": { "aria-label": "Photo gallery of pastry work" },
      ".lightbox-close": { "aria-label": "Close image" },
      ".lightbox-prev": { "aria-label": "Previous photo" },
      ".lightbox-next": { "aria-label": "Next photo" }
    }
  }
};

const featuredPhotoCount = 8;
const widePhotoIndexes = new Set([0, 1, 6, 44, 54, 64]);

let activePhotoIndex = 0;
let currentLanguage = i18n[localStorage.getItem("portfolioLanguage")] ? localStorage.getItem("portfolioLanguage") : "fr";

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
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
    applyLanguage(button.dataset.lang);
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
    if (index < featuredPhotoCount) {
      button.classList.add("is-featured");
    }
    if (widePhotoIndexes.has(index)) {
      button.classList.add("is-wide");
    }
    button.type = "button";
    button.setAttribute("aria-label", content.viewPhoto(label));
    button.dataset.photoIndex = String(index);

    image.src = `${albumBasePath}/${fileName}`;
    image.alt = label;
    image.loading = "lazy";
    image.draggable = false;

    button.appendChild(image);
    fragment.appendChild(button);
  });

  albumGrid.appendChild(fragment);
}

function updateLightbox(index) {
  activePhotoIndex = (index + albumPhotos.length) % albumPhotos.length;
  const fileName = albumPhotos[activePhotoIndex];
  const label = photoLabel(fileName, activePhotoIndex);

  lightboxImage.src = `${albumBasePath}/${fileName}`;
  lightboxImage.alt = label;
  lightboxCaption.textContent = `${label} · ${activePhotoIndex + 1}/${albumPhotos.length}`;
}

function openLightbox(index) {
  if (!lightbox || !lightboxImage) {
    return;
  }

  updateLightbox(index);
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

applyLanguage(currentLanguage);

albumGrid?.addEventListener("click", (event) => {
  const item = event.target.closest("[data-photo-index]");

  if (item) {
    openLightbox(Number(item.dataset.photoIndex));
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

revealItems.forEach((item) => revealObserver.observe(item));

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

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
