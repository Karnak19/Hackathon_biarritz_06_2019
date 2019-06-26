<template>
  <div>
    <v-container fluid>
      <v-layout row wrap>
        <app-nav />
        <slot />
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    "app-nav": Nav
  }
};
</script>
