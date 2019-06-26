<template>
  <b-row>
    <slot />
  </b-row>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  components: {
    "app-nav": Nav
  }
};
</script>
