import { ExperienceState, MediaLogState, State, TrelloApi } from "@/types";
import { ActionContext } from "vuex";
import MediaLogService from "@/api/mediaLogService";
import experienceData from "@/assets/static-data/experience-data";

const state: ExperienceState = experienceData;

type Context = ActionContext<MediaLogState, State>;

const getters = {
  getExperiences(state: ExperienceState) {
    return state.experiences;
  },
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
