const translations = {
    en: {
        table: "table"
    },
    ru: {
        table: "стол"
    },
    it: {
        table: "tavolo"
    }
}

function Translation() {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', "RU");
    }
}

Translation.prototype.translate = function (key) {
    const language = localStorage.getItem('language');
    return translations[language.toLowerCase()][key];
}

Translation.prototype.init = function () {
    Array.from(document.querySelectorAll("div[data-key]")).forEach(element => {
        element.innerHTML = this.translate(element.dataset['key']);
    })
}

Translation.prototype.initPassTranslationEventListener = function () {
    window.addEventListener("passTranslation", ({ detail }) => {
        const language = detail;
        localStorage.setItem('language', detail);
        this.init();
    })
}

export { Translation };