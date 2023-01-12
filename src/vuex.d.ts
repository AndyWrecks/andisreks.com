import { Store } from "@/store/store";
import State from "@/types";

declare module "@vue/runtime-core" {
  // declare your own store states

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
