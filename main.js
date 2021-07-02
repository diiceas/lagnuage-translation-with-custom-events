import { Translation } from './translation.js';
import { Menu } from './menu.js';

const t = new Translation();
t.init();
t.initPassTranslationEventListener();

const menu = new Menu(t);