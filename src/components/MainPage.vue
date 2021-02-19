<template>
  <section id="main-page">
    <h2 class="title">Eventpage</h2>
    <Event
      class="events-section"
      v-for="(event, index) in getEvents"
      :key="index"
      :event="event"
    />
  </section>
</template>

<script>
import Event from "@/components/Event.vue";
export default {
  name: "MainPage",
  data() {
    return {
      events: this.$store.state.events,
    };
  },
  components: {
    Event,
  },

  computed: {
    getEvents() {
      return this.$store.getters.events;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
