<template>
  <b-navbar toggleable="lg" variant="transparent">
    <b-navbar-brand to="/">Wild Code League</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(item, i) in itemsLeft" :key="i" :to="item.path">{{
          item.title
        }}</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="(item, i) in itemsRight" :key="i" :to="item.path">{{
          item.title
        }}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      itemsLeft: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Campus",
          path: "/campus"
        },
        {
          title: "History",
          path: "/history"
        }
      ],
      itemsRight: [
        {
          title: "About",
          path: "/about"
        }
      ]
    };
  }
};
</script>

<style>
a.router-link-exact-active {
  color: rgb(21, 47, 197) !important;
}
</style>
