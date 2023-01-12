// shims-vuex.d.ts

import { ComponentCustomProperties } from "vue";
import { Store } from "@/store/store";
import { State } from "./src/types";

declare module "@vue/runtime-core" {
  // Declare your own store states.

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
