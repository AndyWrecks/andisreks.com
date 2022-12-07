import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faEnvelope, faLinkedin, faLocationPin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
