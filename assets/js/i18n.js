const translations = {
    fr: {
        "meta.title": "Arthur Ngouloubi — Portfolio Cybersécurité",
        "meta.description": "Portfolio de cybersécurité d'Arthur Ngouloubi, étudiant passionné et professionnel en devenir.",
        "nav.welcome": "Accueil",
        "nav.labs": "Laboratoire et Certification",
        "nav.articles": "Mes Articles",
        "nav.education": "Éducation",
        "nav.whoiam": "Qui Je Suis",
        "nav.work": "Expérience Professionnelle",
        "nav.contact": "Contact",
        "nav.language": "🌍 Langue",
        "nav.language.fr": "Français",
        "nav.language.en": "English",
        "welcome.title": "Arthur Ngouloubi — Étudiant en Cybersécurité",
        "welcome.subtitle": "Explorateur passionné du monde de la cybersécurité.",
        "welcome.paragraph": "Je construis un profil solide en cybersécurité : sécurité réseau, cryptographie, détection d’intrusions et automatisation par IA. Mon objectif : délivrer des solutions claires, fiables et documentées.",
        "labs.title": "Laboratoire et Certification",
        "labs.project1": "Projet Principal (en cours)",
        "labs.project2": "Détection, Surveillance et Réponse",
        "labs.project3": "Sécurité Opérationnelle et Infrastructure",
        "labs.ctfWriteups": "Rapports de CTF",
        "articles.title": "Mes Articles",
        "articles.article1": "Article 1",
        "articles.article2": "Article 2",
        "education.title": "Éducation",
        "education.description": "Formation en cybersécurité à [Établissement].",
        "whoiam.title": "Qui Je Suis",
        "whoiam.description": "Je suis Arthur Ngouloubi, un étudiant passionné par la cybersécurité, toujours curieux et prêt à relever de nouveaux défis.",
        "experience.title": "Expérience Professionnelle",
        "experience.description": "(example) Cybersecurity Intern — Example Company",
        "qrcode.title": "Partager ce site",
        "qrcode.description": "Scannez le QR code ci-dessous pour partager ce site :",
        "cybersecurity.title": "Images sur la Cybersécurité",
        "contact.title": "Contact",
        "contact.email": "arthur.ngouloubi@example.com",
        "contact.github": "GitHub",
        "contact.linkedin": "LinkedIn"
    },
    en: {
        "meta.title": "Arthur Ngouloubi — Cybersecurity Portfolio",
        "meta.description": "Cybersecurity portfolio of Arthur Ngouloubi, a passionate student and aspiring professional.",
        "nav.welcome": "Welcome",
        "nav.labs": "Labs and Certification",
        "nav.articles": "My Articles",
        "nav.education": "Education",
        "nav.whoiam": "Who I Am",
        "nav.work": "Work Experience",
        "nav.contact": "Contact",
        "nav.language": "🌍 Language",
        "nav.language.fr": "French",
        "nav.language.en": "English",
        "welcome.title": "Arthur Ngouloubi — Cybersecurity Student",
        "welcome.subtitle": "Passionate explorer of the cybersecurity world.",
        "welcome.paragraph": "I am building a strong cybersecurity profile: network security, cryptography, intrusion detection, and AI automation. My goal: deliver clear, reliable, and well-documented solutions.",
        "labs.title": "Labs and Certification",
        "labs.project1": "Main Project (in progress)",
        "labs.project2": "Detection, Monitoring, and Response",
        "labs.project3": "Operational Security and Infrastructure",
        "labs.ctfWriteups": "CTF Writeups",
        "articles.title": "My Articles",
        "articles.article1": "Article 1",
        "articles.article2": "Article 2",
        "education.title": "Education",
        "education.description": "Cybersecurity training at [Institution].",
        "whoiam.title": "Who I Am",
        "whoiam.description": "I am Arthur Ngouloubi, a cybersecurity enthusiast, always curious and ready to take on new challenges.",
        "experience.title": "Work Experience",
        "experience.description": "(example) Cybersecurity Intern — Example Company",
        "qrcode.title": "Share this site",
        "qrcode.description": "Scan the QR code below to share this site:",
        "cybersecurity.title": "Cybersecurity Images",
        "contact.title": "Contact",
        "contact.email": "arthur.ngouloubi@example.com",
        "contact.github": "GitHub",
        "contact.linkedin": "LinkedIn"
    }
};

function applyTranslation(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    applyTranslation(savedLang);

    document.getElementById('lang-fr').addEventListener('click', () => {
        applyTranslation('fr');
    });

    document.getElementById('lang-en').addEventListener('click', () => {
        applyTranslation('en');
    });
});