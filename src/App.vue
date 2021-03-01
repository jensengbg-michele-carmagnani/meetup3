<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login"> Login</router-link> |
      <router-link to="/addevent">Create event</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  beforeMount() {
    this.$store.dispatch("fetchEvents");
    this.$store.dispatch("checkState");
  },
};
</script>

<style lang="scss">
@import "./scss/main";
</style>
