export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {

  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },

  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  shopify: {
    name: "Shopify",
    iconName: "shopify2",
  },
  liquid: {
    name: "Liquid",
    iconName: "liquid",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },

  figma: {
    name: "Figma",
    iconName: "figma",
  },

  php: {
    name: "PHP",
    iconName: "php",
  },


  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },

  python: {
    name: "Python",
    iconName: "python",
  },
  slack: {
    name: "Slack",
    iconName: "slack",
  },
  notion: {
    name: "Notion",
    iconName: "notion",
  },
  meta: {
    name: "Meta",
    iconName: "meta",
  },
  gempages: {
    name: "Gempages",
    iconName: "gempages",
  }
};

export const getLanguage = (lang: string): Language => {
  const key = (lang ?? "").toLowerCase().trim();
  return languages[key] || languages.html;
};