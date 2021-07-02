
function Menu() {
    Array.from(document.querySelectorAll("a.languageToggler")).forEach(item => {
        item.addEventListener('click', function (evt) {
            evt.preventDefault();
            const event = new CustomEvent('passTranslation', { detail: this.dataset["languageKey"] });
            window.dispatchEvent(event);
        });
    });
}

export { Menu };