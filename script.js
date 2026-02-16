document.addEventListener("DOMContentLoaded", () => {
    // =====================
    //  SWITCH DE TEMA
    // =====================
    const themeBtn = document.getElementById("theme-toggle");
    const root = document.documentElement; // <html>

    if (themeBtn) {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "light") {
            root.classList.add("light-mode");
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }

        themeBtn.addEventListener("click", () => {
            root.classList.toggle("light-mode");
            const isLight = root.classList.contains("light-mode");

            if (isLight) {
                themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
                localStorage.setItem("theme", "light");
            } else {
                themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // =====================
    //  SWITCH DE IDIOMA
    // =====================
    const langBtn = document.getElementById("lang-toggle");

    const navAbout = document.getElementById("nav-about");
    const navExp = document.getElementById("nav-exp");
    const navProj = document.getElementById("nav-proj");
    const navContact = document.getElementById("nav-contact");

    const heroRole = document.getElementById("hero-role");
    const heroDesc = document.getElementById("hero-desc");
    const btnCv = document.getElementById("btn-cv");

    let lang = localStorage.getItem("lang") || "es";

    const texts = {
        es: {
            nav_about: "Sobre mí",
            nav_exp: "Experiencia",
            nav_proj: "Proyectos",
            nav_contact: "Contacto",
            hero_role: "Data Analyst & Software Developer",
            hero_desc: "Transformo datos y tecnología en soluciones prácticas para empresas y personas.",
            btn_cv: "Descargar CV"
        },
        en: {
            nav_about: "About me",
            nav_exp: "Experience",
            nav_proj: "Projects",
            nav_contact: "Contact",
            hero_role: "Data Analyst & Software Developer",
            hero_desc: "I transform data and technology into practical solutions for businesses and people.",
            btn_cv: "Download CV"
        },
        et: {
            nav_about: "Minust",
            nav_exp: "Kogemus",
            nav_proj: "Projektid",
            nav_contact: "Kontakt",
            hero_role: "Andmeanalüütik ja Tarkvaraarendaja",
            hero_desc: "Muudan andmed ja tehnoloogia praktilisteks lahendusteks ettevõtetele ja inimestele.",
            btn_cv: "Laadi alla CV"
        }
    };

    function applyLang() {
        const t = texts[lang];

        if (navAbout) navAbout.textContent = t.nav_about;
        if (navExp) navExp.textContent = t.nav_exp;
        if (navProj) navProj.textContent = t.nav_proj;
        if (navContact) navContact.textContent = t.nav_contact;

        if (heroRole) heroRole.textContent = t.hero_role;
        if (heroDesc) heroDesc.textContent = t.hero_desc;
        if (btnCv) btnCv.textContent = t.btn_cv;
    }

    applyLang();

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            if (lang === "es") lang = "en";
            else if (lang === "en") lang = "et";
            else lang = "es";

            localStorage.setItem("lang", lang);
            applyLang();
        });
    }
});
