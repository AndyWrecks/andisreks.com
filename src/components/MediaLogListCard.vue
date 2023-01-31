<template>
  <v-card :class="visibilityStatus ? '' : 'hidden'">
    <v-card-title>{{ list.name }}</v-card-title>

    <MediaLogList :list-id="list.id" />
  </v-card>
</template>
<script lang="ts">
import MediaLogList from "@/components/MediaLogList.vue";
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { TrelloList } from "@/types";

export default defineComponent({
  name: "MediaLogListCart",
  components: { MediaLogList },
  computed: {
    visibilityStatus() {
      const store = useStore();

      return store.getters["mediaLog/getListStatus"](this.list?.category);
    },
  },
  props: {
    list: Object as PropType<TrelloList>,
  },
});
</script>
