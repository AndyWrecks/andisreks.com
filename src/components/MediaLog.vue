<template>
  <div>
    <div v-for="(list, index) in lists" :key="`list-${index}`">
      {{ list.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MediaLog",
  computed: {
    lists() {
      const store = useStore();

      return store.getters["mediaLog/getLists"];
    },
  },
  mounted() {
    const store = this.$store;

    store.dispatch("mediaLog/setLists");
  },
});
</script>

<style scoped></style>
