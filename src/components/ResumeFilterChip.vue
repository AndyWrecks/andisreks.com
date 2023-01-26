<template>
  <v-chip
    :color="chipEnabled ? color : 'grey'"
    class="mr-2 mt-2"
    :variant="selected ? 'elevated' : 'outlined'"
    v-on:click="selectFilter"
  >
    {{ chipValue }}
  </v-chip>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "ResumeFilterChip",
  props: {
    color: {},
    chipValue: String,
  },
  computed: {
    chipEnabled() {
      const store = useStore();

      return store.getters["experienceStore/getFilterEnabledStatus"](
        this.chipValue
      );
    },
    selected() {
      const store = useStore();

      return store.getters["experienceStore/getFilterActiveStatus"](
        this.chipValue
      );
    },
  },
  methods: {
    selectFilter() {
      if (!this.chipEnabled) {
        return;
      }

      const store = this.$store;
      this.selected = !this.selected;

      store.dispatch("experienceStore/handleFilter", this.chipValue);
    },
  },
});
</script>
