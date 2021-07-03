import { Translation } from './translation.js';
import { Menu } from './menu.js';
import { Service } from './service.js';
import { languages } from './constants.js'

(new Translation({
    defaultLanguage: languages.russian,
    service: new Service()
})).init();

Menu.init();