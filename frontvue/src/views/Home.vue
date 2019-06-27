<template>
  <app-layout>
    <template v-slot:main>
      <b-col lg="12">
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </b-col>
    </template>
    <template v-slot:feed>
      <app-feed />
    </template>
  </app-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutVue from "@/Layout.vue";
import NewsFeedVue from "@/components/NewsFeed.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    "app-layout": LayoutVue,
    "app-feed": NewsFeedVue
  }
};
</script>
