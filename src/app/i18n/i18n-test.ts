import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translations: {},
      "auth-form": {
        "auth-form-send-btn": "Send",
        "auth-form-login": "Login",
        "auth-form-placeholder-name": "Name",
        "auth-form-placeholder-password": "Password",
      },
    },
  },
});

export default i18n;
