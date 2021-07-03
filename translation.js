import { translations, customEvents } from './constants.js';

const getElementsToTranslate = () => {
    return document.querySelectorAll("[data-key]");
}

const getKeyToTranslate = (element) => {
    return element.dataset["key"]
}

function Translation({ defaultLanguage, service }) {
    this.service = service;
    if (!this.service.language.get()) {
        this.service.language.set(defaultLanguage);
    }
}

Translation.prototype.translateAllElements = function () {
    const elementsToTranslate = getElementsToTranslate();
    const currentLanguageTranslations = translations[this.service.language.get()];
    Array.from(elementsToTranslate).forEach(element => {
        const elementKey = getKeyToTranslate(element);
        element.innerHTML = currentLanguageTranslations[elementKey];
    })
}

Translation.prototype.init = function () {
    window.addEventListener(customEvents.passTranslation, ({ detail: language }) => {
        this.service.language.set(language);
        this.translateAllElements();
    })
    this.translateAllElements();
}

export { Translation };