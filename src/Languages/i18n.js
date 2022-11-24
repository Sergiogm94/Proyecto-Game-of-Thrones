import {en} from "./English";
import {es} from "./Spanish";

import i18n from "i18next";
import {initReactI18next} from "react-i18next"


const resources = {
    es: {
        translation: es
    }, 
    en: {
        translation: en
    }
}

i18n.use(initReactI18next).init({
    resources,
    lan: "es",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;