<template>
  <app-layout>
    <template v-slot:main>
      <b-col lg="8" offset-lg="2">
        <h1>L'équipe pédagogique !</h1>
      </b-col>
      <b-col lg="8" offset-lg="2" class="my-10">
        <img src="@/assets/dodo.jpg" alt="Responsive image" />
      </b-col>
    </template>
  </app-layout>
</template>

<script>
import LayoutVue from "@/Layout.vue";
export default {
  name: "About",
  components: {
    "app-layout": LayoutVue
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>
