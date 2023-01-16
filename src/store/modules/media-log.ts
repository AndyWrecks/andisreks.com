import { MediaLogState, State, TrelloApi, TrelloList } from "@/types";
import { ActionContext } from "vuex";
import MediaLogService from "@/api/mediaLogService";

const state: MediaLogState = {
  lists: [],
  items: [],
  ui: {
    filters: [],
  },
};

type Context = ActionContext<MediaLogState, State>;

const getters = {
  getLists(state: MediaLogState) {
    return state.lists;
  },

  getListStatus(state: MediaLogState) {
    return (listCategory: string) => {
      if (state.ui.filters.length === 0) {
        return true;
      }

      return state.ui.filters.includes(listCategory);
    };
  },

  getListItems(state: MediaLogState) {
    return (listId: string) => {
      return state.items
        .filter((item) => item.idList === listId)
        .sort((a, b) => {
          if (a.pos < b.pos) {
            return -1;
          }
          return 0;
        });
    };
  },
};

const actions = {
  setListsAndItems(context: Context) {
    const listData = MediaLogService.getMediaLogData();

    listData.then((data: any) => {
      context.commit("setListsAndItems", data);
    });
  },
  handleFilter(context: Context, filter: string) {
    if (context.state.ui.filters.includes(filter)) {
      context.commit("removeFilter", filter);
      return;
    }

    context.commit("setFilter", filter);
  },
};

const mutations = {
  setListsAndItems(state: MediaLogState, data: TrelloApi) {
    state.lists = data.lists;
    state.items = data.items;
  },
  setFilter(state: MediaLogState, filter: string) {
    state.ui.filters.push(filter);
  },
  removeFilter(state: MediaLogState, filter: string) {
    state.ui.filters = state.ui.filters.filter((f) => f !== filter);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
