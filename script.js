document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        fr: {
            "title-text": "Mon Portfolio",
            "welcome-text": "Bienvenue sur mon portfolio",
            "about-title": "À propos de moi",
            "about-intro": "Un parcours entre deux cultures, une quête d'innovation",
            "about-intro-text1": "Je suis né à Ho Chi Minh, au Vietnam, le 10 février 1987...",
            "about-intro-text2": "Cette double culture m’a très vite appris l’adaptabilité...",
            "about-impact": "Entreprendre pour impacter : de la prévention sociale à la technologie",
            "about-impact-text1": "En 2015, animé par la volonté d’agir pour la jeunesse...",
            "about-resilience": "Un tournant personnel : entre résilience et technologie",
            "about-resilience-text1": "Mon parcours a été marqué par le décès de mon père...",
            "about-code": "Découverte du code : un nouvel horizon",
            "about-code-text1": "J’ai décidé d’intégrer l’école 42...",
            "about-future": "L'IA, la cybersécurité et l’innovation au service de demain",
            "about-future-text1": "Je suis convaincu que l’Intelligence Artificielle...",
            "about-skills": "💡 Mes compétences incluent :",
            "about-skills1": "💻 Création d’applications en JavaScript avec React Native",
            "about-skills2": "🔐 Développement de solutions informatiques...",
            "about-skills3": "🔍 Cybersécurité et protection des données",
            "about-skills4": "📊 Analyse et conception de projets technologiques",
            "about-teaching": "Transmettre pour préparer le monde de demain",
            "about-teaching-text1": "Au-delà de ma propre évolution...",
            "about-teaching1": "👨‍🎓 Les adolescents et collégiens...",
            "about-teaching2": "👨‍🏫 Les adultes et professionnels en reconversion...",
            "about-conclusion": "Nous vivons dans un monde où l’intelligence collective...",
            "contact-title": "Me Contacter",
            "contact-github": "GitHub",
            "contact-linkedin": "LinkedIn",
            "contact-email": "Email",
            "footer-text": "© 2024 - Mon Portfolio"
        },
        en: {
            "title-text": "My Portfolio",
            "welcome-text": "Welcome to my portfolio",
            "about-title": "About Me",
            "about-intro": "A journey between two cultures, a quest for innovation",
            "about-intro-text1": "I was born in Ho Chi Minh, Vietnam...",
            "about-intro-text2": "This dual culture quickly taught me adaptability...",
            "about-impact": "Entrepreneurship for Impact: From Social Prevention to Technology",
            "about-impact-text1": "In 2015, driven by the will to act for youth...",
            "about-resilience": "A Personal Turning Point: Between Resilience and Technology",
            "about-resilience-text1": "My journey was marked by the death of my father...",
            "about-code": "Discovering Coding: A New Horizon",
            "about-code-text1": "I decided to join 42 school...",
            "about-future": "AI, Cybersecurity, and Innovation for the Future",
            "about-future-text1": "I am convinced that Artificial Intelligence...",
            "about-skills": "💡 My skills include:",
            "about-skills1": "💻 Developing JavaScript applications with React Native",
            "about-skills2": "🔐 Developing IT solutions...",
            "about-skills3": "🔍 Cybersecurity and data protection",
            "about-skills4": "📊 Analysis and design of technology projects",
            "about-teaching": "Teaching to Prepare the World of Tomorrow",
            "about-teaching-text1": "Beyond my own growth...",
            "about-teaching1": "👨‍🎓 Teenagers and middle school students...",
            "about-teaching2": "👨‍🏫 Adults and professionals in retraining...",
            "about-conclusion": "We live in a world where collective intelligence...",
            "contact-title": "Contact Me",
            "contact-github": "GitHub",
            "contact-linkedin": "LinkedIn",
            "contact-email": "Email",
            "footer-text": "© 2024 - My Portfolio"
        },
        th: {
            "title-text": "พอร์ตโฟลิโอของฉัน",
            "welcome-text": "ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน",
            "about-title": "เกี่ยวกับฉัน",
            "about-intro": "การเดินทางระหว่างสองวัฒนธรรม ภารกิจแห่งนวัตกรรม",
            "about-intro-text1": "ฉันเกิดที่โฮจิมินห์, เวียดนาม...",
            "about-intro-text2": "วัฒนธรรมที่สองสอนฉันเกี่ยวกับ...",
            "about-impact": "การเป็นผู้ประกอบการเพื่อสร้างผลกระทบ: จากการป้องกันทางสังคมไปสู่เทคโนโลยี",
            "about-impact-text1": "ในปี 2015, ด้วยแรงจูงใจในการช่วยเหลือเยาวชน...",
            "about-resilience": "จุดเปลี่ยนส่วนตัว: ระหว่างความยืดหยุ่นและเทคโนโลยี",
            "about-resilience-text1": "เส้นทางของฉันได้รับผลกระทบจากการเสียชีวิตของพ่อฉัน...",
            "contact-title": "ติดต่อฉัน",
            "footer-text": "© 2024 - พอร์ตโฟลิโอของฉัน"
        }
    };

    document.getElementById("language-select").addEventListener("change", function () {
        const lang = this.value;
        Object.keys(translations[lang]).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = translations[lang][id];
            }
        });
    });
});
