<template>
  <section id="eventInfo">
    <h2>event info</h2>
    <p>{{ event.name }}</p>
    <p>{{ event.date }}</p>
    <p>{{ event.price }}</p>
    <p>{{ event.location }}</p>
    <section v-if="this.$store.state.showLogin" class="review">
      <input type="text" v-model="review" />
      <button @click="setReview">review</button>
    </section>
    <h3>Comments</h3>
    <Comments v-for="item in event.review" :key="item" :item="item" />
  </section>
</template>

<script>
import Comments from "@/components/Comments.vue";
export default {
  name: "InfoPage",
  components: {
    Comments,
  },

  data() {
    return {
      review: "",
      events: this.$store.state.events,
    };
  },
  methods: {
    setReview() {
      let data = {
        reviewText: this.review,
        eventName: this.event.name,
      };
      console.log("EVENT OBJ TO DISPATCH");
      this.$store.dispatch("setReview", data);
    },
  },
  computed: {
    event() {
      return this.events.find((event) => event.name == this.$route.params.name);
    },
  },
};
</script>

<style></style>
