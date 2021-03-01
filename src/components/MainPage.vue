<template>
  <section id="main-page">
    <h2 class="title">Eventpage</h2>
    <section class="search-section">
      <input @input="filter" type="text" class="css-input" v-model="search" />
    </section>
    <Event
      class="events-section"
      v-for="(event, index) in filterArray"
      :key="index"
      :event="event"
    />
    
  </section>
</template>

<script>
import Event from "@/components/Event.vue";
export default {
  mounted() {
    setTimeout(() => {
      this.filter();
    }, 700);
    
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
      console.log('Filter fucntion ')
      let events = this.getEvents;
      if (
        this.search === undefined ||
        this.search === null ||
        this.search == ""
      ) {
        this.filterArray = events;
      } else {
        this.filterArray = events.filter((event) => {
          let titleName = event.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
          console.log("titleName", this.filterArray);
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
