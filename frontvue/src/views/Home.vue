<template>
  <app-layout>
    <b-col>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </b-col>
  </app-layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import LayoutVue from "@/Layout.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    "app-layout": LayoutVue
  }
};
</script>
