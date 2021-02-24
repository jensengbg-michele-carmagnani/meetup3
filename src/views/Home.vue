<template>
  <div id="home">
    <header class="header">
      <h1>Meetup page</h1>
      <nav></nav>
    </header>
    <MainPage />
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from "@/components/MainPage.vue";
import Foot from "@/components/Foot.vue";
export default {
  name: "Home",
  components: {
    MainPage,
    Foot,
  },
 
};
</script>
