const translations = {
  en: {
    nav_projects: "Projects",
    nav_about: "About",
    nav_skills: "Skills",
    nav_contact: "Contact",

    hero_subtitle: "Canadian developer • Web, Lua & server systems",
    hero_projects: "View Projects",
    hero_contact: "Contact Me",

    chip_canada: "Based in Canada",
    chip_dev: "Full-Stack Developer",
    chip_builder: "System Builder",

    projects_title: "Projects",
    project_stormcore: "Advanced Stormworks server administration addon.",
    project_codaid: "Learning platform for Roblox Studio scripting.",
    project_billing: "Freelance billing, tasks and automation tools.",

    about_title: "About Me",
    about_text: "I build clean systems, optimized servers and modern web interfaces inspired by Apple-style design.",

    skills_title: "Skills",
    contact_title: "Contact",
    contact_text: "Available for collaborations, development and long-term projects."
  },

  fr: {
    nav_projects: "Projets",
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_contact: "Contact",

    hero_subtitle: "Développeur canadien • Web, Lua et systèmes serveur",
    hero_projects: "Voir les projets",
    hero_contact: "Me contacter",

    chip_canada: "Basé au Canada",
    chip_dev: "Développeur full-stack",
    chip_builder: "Créateur de systèmes",

    projects_title: "Projets",
    project_stormcore: "Addon avancé d’administration serveur Stormworks.",
    project_codaid: "Plateforme d’apprentissage pour Roblox Studio.",
    project_billing: "Outils de facturation et automatisation freelance.",

    about_title: "À propos",
    about_text: "Je conçois des systèmes propres, des serveurs optimisés et des interfaces modernes inspirées du design Apple.",

    skills_title: "Compétences",
    contact_title: "Contact",
    contact_text: "Disponible pour collaborations, développement et projets long terme."
  }
};

let currentLang = "en";

function applyLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });
  currentLang = lang;
}

applyLang("en");

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(currentLang === "en" ? "fr" : "en");
});
