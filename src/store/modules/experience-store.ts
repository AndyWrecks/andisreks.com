import { Experience, ExperienceState, MediaLogState, State } from "@/types";
import { ActionContext } from "vuex";
import experienceData from "@/assets/static-data/experience-data";

const state: ExperienceState = {
  ...experienceData,
  ui: {
    activeFilters: [],
    frameworks: [],
    design: [],
    projectMgmt: [],
  },
};

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
  getAvailableFrameworks(state: ExperienceState) {
    return state.ui.frameworks;
  },
  getAvailableDesign(state: ExperienceState) {
    return state.ui.design;
  },
  getAvailableMgmt(state: ExperienceState) {
    return state.ui.projectMgmt;
  },
};

const actions = {
  setAvailableFilters(context: Context) {
    const experienceData = context.state.experiences;
    const frameworks: string[] = [];
    const design: string[] = [];
    const projectMgmt: string[] = [];

    experienceData.forEach((experience) => {
      const skills = experience.skills;

      skills.frameworks.forEach((entry) => {
        if (frameworks.includes(entry)) {
          return;
        }

        frameworks.push(entry);
      });
      skills.design.forEach((entry) => {
        if (design.includes(entry)) {
          return;
        }

        design.push(entry);
      });
      skills.projectMgmt.forEach((entry) => {
        if (projectMgmt.includes(entry)) {
          return;
        }

        projectMgmt.push(entry);
      });
    });

    context.commit("setAvailableFilters", { frameworks, design, projectMgmt });
  },
};

const mutations = {
  setAvailableFilters(
    state: ExperienceState,
    data: { frameworks: string[]; design: string[]; projectMgmt: string[] }
  ) {
    state.ui.frameworks = data.frameworks;
    state.ui.design = data.design;
    state.ui.projectMgmt = data.projectMgmt;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
