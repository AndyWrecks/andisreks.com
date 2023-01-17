<template>
  <v-container>
    <v-chip-group>
      <v-chip v-on:click="handleFilter('movies')">All</v-chip>
      <v-chip v-on:click="handleFilter('movies')">Movies</v-chip>
      <v-chip v-on:click="handleFilter('tv')">TV</v-chip>
      <v-chip v-on:click="handleFilter('video-games')">Video Games</v-chip>
    </v-chip-group>

    <div class="grid gird-cols-1 md:grid-cols-2 gap-6">
      <MediaLogListCart
        v-for="(list, index) in lists"
        :key="`list-${index}`"
        :list="list"
      />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MediaLogListCart from "@/components/MediaLogListCard.vue";

export default defineComponent({
  name: "MediaLog",
  components: { MediaLogListCart },
  computed: {
    lists() {
      const store = useStore();

      return store.getters["mediaLog/getLists"];
    },
  },
  mounted() {
    const store = this.$store;

    store.dispatch("mediaLog/setListsAndItems");
  },
  methods: {
    handleFilter(filter: string) {
      const store = this.$store;

      store.dispatch("mediaLog/handleFilter", filter);
    },
  },
});
</script>
