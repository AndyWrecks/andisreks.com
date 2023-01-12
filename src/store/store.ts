// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import mediaLog from "@/store/modules/media-log";

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}

export default createStore<State>({
  modules: {
    mediaLog,
  },
  state: {
    count: 0,
  },
});
