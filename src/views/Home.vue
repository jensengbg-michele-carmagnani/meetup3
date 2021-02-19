<template>
  <div id="home">
    <header class="header">
      <h1>Meetup page</h1>
      <nav>
        <section class="search-section">
          <input type="text" class="css-input" />
          <button class="btn-search">search</button>
        </section>
        <section class="choises">
          <button class="btn-choises">Happening today</button>
          <button class="btn-choises">OnLine</button>
          <button class="btn-choises">Meditation</button>
        </section>
      </nav>
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
