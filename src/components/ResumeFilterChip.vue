<template>
  <v-chip
    :color="color"
    class="mr-2 mt-2"
    :variant="selected ? 'elevated' : 'outlined'"
    v-on:click="selectFilter"
  >
    {{ chipValue }}
  </v-chip>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResumeFilterChip",
  props: {
    color: {},
    chipValue: String,
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    selectFilter() {
      this.selected = !this.selected;
    },
  },
});
</script>
