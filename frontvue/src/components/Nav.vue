<template>
  <b-navbar toggleable="lg" variant="transparent">
    <b-navbar-brand to="/">Wild Code League</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/campus">Campus</b-nav-item>
        <b-nav-item to="/history">Matches history</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "dashboard"
        },
        {
          title: "Campus"
        },
        {
          title: "History"
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
