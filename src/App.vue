<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Casa</router-link> |
      <router-link to="/login">About</router-link>
    </div>
    <router-view  />
  </div>
</template>
<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchEvents");
  },
  
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
