// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import mediaLog from "@/store/modules/media-log";
import experienceStore from "@/store/modules/experience-store";
import { State } from "@/types";

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  modules: {
    mediaLog,
    experienceStore,
  },
});
