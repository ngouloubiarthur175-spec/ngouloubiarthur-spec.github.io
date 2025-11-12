const translations = {
    fr: {
        welcome: {
            title: "Bonjour, je m’appelle Arthur Ngouloubi 👋",
            subtitle: "Étudiant en cybersécurité (Montréal) — sécurité des réseaux, analyse des menaces & intégration de l’IA.",
            paragraph: "Je construis un profil solide en cybersécurité : sécurité réseau, cryptographie, détection d’intrusions et automatisation par IA. Mon objectif : délivrer des solutions claires, fiables et documentées."
        },
        articles: {
            title: "Mes Articles"
        },
        education: {
            title: "Éducation"
        },
        whoiam: {
            title: "Qui Je Suis"
        },
        experience: {
            title: "Expérience Professionnelle"
        },
        contact: {
            title: "Contact"
        }
    },
    en: {
        welcome: {
            title: "Hi, I’m Arthur Ngouloubi 👋",
            subtitle: "Cybersecurity student (Montréal) — network security, threat analysis & AI integration.",
            paragraph: "I’m building a solid cybersecurity profile: network security, cryptography, intrusion detection and AI-driven automation. My goal: clear, reliable and well-documented solutions."
        },
        articles: {
            title: "My Articles"
        },
        education: {
            title: "Education"
        },
        whoiam: {
            title: "Who I Am"
        },
        experience: {
            title: "Work Experience"
        },
        contact: {
            title: "Contact"
        }
    }
};

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
}

function loadTranslations(lang) {
    fetch(`assets/js/translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(el => {
                const key = el.getAttribute('data-translate');
                const keys = key.split('.');
                let translation = translations;
                keys.forEach(k => {
                    translation = translation[k];
                });
                if (translation) {
                    el.textContent = translation;
                } else {
                    console.warn(`Translation missing for key: ${key}`);
                }
            });
        })
        .catch(error => console.error('Error loading translations:', error));
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'fr';
    loadTranslations(savedLang);

    document.getElementById('lang-fr').addEventListener('click', () => {
        localStorage.setItem('lang', 'fr');
        loadTranslations('fr');
    });

    document.getElementById('lang-en').addEventListener('click', () => {
        localStorage.setItem('lang', 'en');
        loadTranslations('en');
    });
});
