<template>
  <v-container>
    <v-row class="bg-red" justify="space-around">
      <v-col cols="12">
        <v-card v-for="(list, index) in lists" :key="`list-${index}`">
          <v-card-title> {{ list.name }} </v-card-title>

          <MediaLogList :list-id="list.id" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import MediaLogList from "@/components/MediaLogList.vue";

export default defineComponent({
  name: "MediaLog",
  components: { MediaLogList },
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
});
</script>
