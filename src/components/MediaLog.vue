<template>
  <v-container>
    <v-chip-group>
      <MediaLogFilterChip :handle-filter="handleFilter('movies')" />
      <v-chip v:model="handleFilter('movies')">Movies</v-chip>
      <v-chip v:model="handleFilter('tv')">TV</v-chip>
      <v-chip v:model="handleFilter('video-games')">Video Games</v-chip>
    </v-chip-group>

    <div class="grid gird-cols-1 md:grid-cols-3 gap-6">
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
import MediaLogFilterChip from "@/components/MediaLogFilterChip.vue";

export default defineComponent({
  name: "MediaLog",
  components: { MediaLogFilterChip, MediaLogListCart },
  computed: {
    lists() {
      const store = useStore();

      return store.getters["mediaLog/getLists"];
    },
    handleFilter: {
      get() {
        return true;
      },
      set(filter: string) {
        const store = this.$store;

        console.log({ filter });

        store.dispatch("mediaLog/handleFilter", filter);
      },
    },
  },
  mounted() {
    const store = this.$store;

    store.dispatch("mediaLog/setListsAndItems");
  },
  methods: {},
});
</script>
