import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F7FAF9",
    surface: "#F7FAF9",
    primary: "#345054",
    "primary-darken-1": "#345054",
    secondary: "#7D8BA5",
    "secondary-darken-1": "#7D8BA5",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myCustomLightTheme",
    themes: {
      myCustomLightTheme,
    },
  },

  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faEnvelope, faLinkedin, faLocationDot);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .mount("#app");
