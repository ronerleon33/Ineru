export interface PageContent {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    buttonText?: string;
  };
  features?: Array<{
    title: string;
    description: string;
  }>;
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  cta?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface HomePageContent {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    badge: string;
    title: {
      highlight: string;
      rest: string;
    };
    description: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  products: {
    badge: string;
    title: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
  };
}

export interface ContactContent {
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    title: string;
    description: string;
  };
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentText: string;
    submitButton: string;
    successTitle: string;
    successMessage: string;
  };
}
