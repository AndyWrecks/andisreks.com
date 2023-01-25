import { Experience, ExperienceState, MediaLogState, State } from "@/types";
import { ActionContext } from "vuex";
import experienceData from "@/assets/static-data/experience-data";

const state: ExperienceState = experienceData;

type Context = ActionContext<ExperienceState, State>;

const getters = {
  getExperiences(state: ExperienceState): Experience[] {
    return state.experiences;
  },
  getSkills(state: ExperienceState) {
    return state.skills;
  },
  getFrameworks(state: ExperienceState) {
    return state.frameworks;
  },
  getDesign(state: ExperienceState) {
    return state.design;
  },
  getProjectMgmt(state: ExperienceState) {
    return state.projectMgmt;
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
