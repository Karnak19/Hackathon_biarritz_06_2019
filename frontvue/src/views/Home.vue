<template>
  <app-layout>
    <template v-slot:main>
      <b-col lg="8" class="mt-5">
        <img src="@/assets/meme.jpg" alt="Responsive image" />
      </b-col>

      <app-feed />
    </template>
    <template v-slot:feed></template>
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
