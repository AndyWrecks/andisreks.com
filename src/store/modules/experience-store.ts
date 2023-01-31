import { Experience, ExperienceState, State } from "@/types";
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
  getExperiences(state: ExperienceState) {
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
  getActiveFilters(state: ExperienceState) {
    return state.ui.activeFilters;
  },
  getFilteredExperiences(state: ExperienceState, getters: any) {
    const activeFilters = getters["getActiveFilters"];
    const experiences = getters["getExperiences"];

    if (activeFilters.length === 0) {
      return experiences;
    }

    return experiences.filter((experience: Experience) => {
      return activeFilters.every((entry: string) =>
        experience.skills.all?.includes(entry)
      );
    });
  },
  getFilterEnabledStatus(state: ExperienceState, getters: any) {
    return (filterId: string) => {
      const activeExperiences = getters["getFilteredExperiences"];
      const availableExperienceFilters: string[] = [];

      activeExperiences.forEach((experience: Experience) => {
        experience.skills.all?.forEach((skill) => {
          if (!availableExperienceFilters.includes(skill)) {
            availableExperienceFilters.push(skill);
          }
        });
      });

      return availableExperienceFilters.includes(filterId);
    };
  },
  getFilterActiveStatus(state: ExperienceState, getters: any) {
    return (filterId: string) => {
      const activeFilters = getters["getActiveFilters"];

      if (activeFilters.length === 0) {
        return false;
      }

      return activeFilters.includes(filterId);
    };
  },
  getExperienceSkillsByTime(state: ExperienceState) {
    const experiences = state.experiences;
    return (time: string) => {
      return experiences.find(
        (experience: Experience) => experience.time === time
      )?.skills;
    };
  },
};

const actions = {
  handleFilter(context: Context, filter: string) {
    if (state.ui.activeFilters.includes(filter)) {
      context.commit("removeActiveFilter", filter);
      return;
    }

    context.commit("addActiveFilter", filter);
  },
  setAvailableFilters(context: Context) {
    const experienceData = context.state.experiences;
    const frameworks: string[] = [];
    const design: string[] = [];
    const projectMgmt: string[] = [];

    experienceData.forEach((experience, experienceIndex) => {
      const skills = experience.skills;
      const allSkills: string[] = [];

      // Todo make helper for this to reduce code
      skills.frameworks.forEach((entry) => {
        if (!allSkills.includes(entry)) {
          allSkills.push(entry);
        }

        if (frameworks.includes(entry)) {
          return;
        }
        frameworks.push(entry);
      });
      skills.design.forEach((entry) => {
        if (!allSkills.includes(entry)) {
          allSkills.push(entry);
        }

        if (design.includes(entry)) {
          return;
        }

        design.push(entry);
      });
      skills.projectMgmt.forEach((entry) => {
        if (!allSkills.includes(entry)) {
          allSkills.push(entry);
        }
        if (projectMgmt.includes(entry)) {
          return;
        }

        projectMgmt.push(entry);
      });
      context.commit("createAllSkillsForExperience", {
        experienceIndex: experienceIndex,
        skills: allSkills,
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
  createAllSkillsForExperience(
    state: ExperienceState,
    data: { experienceIndex: number; skills: string[] }
  ) {
    state.experiences[data.experienceIndex].skills.all = data.skills;
  },
  removeActiveFilter(state: ExperienceState, filterId: string) {
    state.ui.activeFilters = state.ui.activeFilters.filter((filter) => {
      return filterId !== filter;
    });
  },
  addActiveFilter(state: ExperienceState, filterId: string) {
    state.ui.activeFilters.push(filterId);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
