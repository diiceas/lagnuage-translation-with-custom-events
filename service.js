const keys = {
    langauge: "language"
}

class Service {
    language = {
        set: (value) => {
            localStorage.setItem(keys.langauge, value)
        },
        get: () => {
            return localStorage.getItem(keys.langauge)
        }
    }
}

export { Service };