import { customEvents, languages } from './constants.js'

const getLanguageElement = ({ language }) => {
    const languageElement = document.createElement("a");
    languageElement.innerHTML = languageElement.dataset.language = language;
    languageElement.href = "#";
    languageElement.style.marginRight = "5px";
    languageElement.addEventListener('click', function (evt) {
        evt.preventDefault();
        const event = new CustomEvent(customEvents.passTranslation, { detail: this.dataset["language"] });
        window.dispatchEvent(event);
    });
    return languageElement;
}


class Menu {
    static init() {
        const languageTogglerElement = document.querySelector(".languageToggler");
        Object.values(languages).forEach(language => {
            languageTogglerElement.appendChild(getLanguageElement({ language }))
        });
    }
}

export { Menu };