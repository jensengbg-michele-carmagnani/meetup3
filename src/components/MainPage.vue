<template>
  <section id="main-page">
    <h2 class="title">Eventpage</h2>
    <section class="search-section">
      <input type="text" class="css-input" v-model="search" @input="filter" />
    </section>
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
  mounted() {
    this.filter();
  },
  name: "MainPage",
  data() {
    return {
      search: "",
      filterArray: Array,
    };
  },
  components: {
    Event,
  },

  methods: {
   
    filter() {
      let events = this.getEvents;
      if (
        this.search === undefined ||
        this.search === null ||
        this.search == ""
      ) {
        this.filterArray = events;
        console.log("events filter ", this.filterArray);
      } else {
        this.filterArray = events.filter((event) => {
          let titleName = event.name
            .toLowerCase()
            .includes(this.search.toLowerCase);
          console.log("titleName", titleName);
          console.log();
          return titleName;
        });
      }
    },
  },
  computed: {
    getEvents() {
      return this.$store.getters.events;
    },
  },
};
</script>

<style scoped></style>
