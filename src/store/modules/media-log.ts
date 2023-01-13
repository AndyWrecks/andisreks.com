import { MediaLogState, State, TrelloApi, TrelloList } from "@/types";
import { ActionContext } from "vuex";
import MediaLogService from "@/api/mediaLogService";

const state: MediaLogState = {
  lists: [],
  items: [],
};

type Context = ActionContext<MediaLogState, State>;

const getters = {
  getLists(state: MediaLogState) {
    return state.lists;
  },

  getListItems(state: MediaLogState) {
    return (listId: string) => {
      console.log({ listId });
      return state.items.filter((item) => item.idList === listId);
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
};

const mutations = {
  setListsAndItems(state: MediaLogState, data: TrelloApi) {
    state.lists = data.lists;
    state.items = data.items;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
