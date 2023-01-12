import { MediaLogState, State, TrelloList } from "@/types";
import { ActionContext } from "vuex";
import MediaLogService from "@/api/mediaLogService";

const state: MediaLogState = {
  lists: [],
};

type Context = ActionContext<MediaLogState, State>;

const getters = {
  getLists(state: MediaLogState) {
    return state.lists;
  },
};

const actions = {
  setLists(context: Context) {
    const listData = MediaLogService.getMediaLogData();

    listData.then((data: any) => {
      context.commit("setLists", data.lists);
    });
  },
};

const mutations = {
  setLists(state: MediaLogState, data: TrelloList[]) {
    state.lists = data;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
