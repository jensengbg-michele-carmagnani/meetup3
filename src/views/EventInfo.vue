<template>
  <section id="eventInfo">
    <h2>event info</h2>
    <p>{{ event.name }}</p>
    <p>{{ event.name }}</p>
    <p>{{ event.name }}</p>
    <p>{{ event.name }}</p>
    <section v-if="this.$store.state.showLogin" class="review">
      <input type="text" v-model="review" />
      <button @click="setReview">review</button>
    </section>
    <Comments
      v-for="review in event.review"
      :key="review.review"
      :review="review"
    />
  </section>
</template>

<script>
import Comments from "@/components/Comments.vue";
export default {
  name: "EventInfo",
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
      let newEvent = this.event
      console.log('newevent', newEvent)
     let newRev = newEvent.review.push(this.review)
      console.log("newreview", newRev);
     // this.$store.dispatch("setReview", newReview);
    },
  },
  computed: {
    event() {
      return this.events.filter(
        (event) => event.name == this.$route.params.name
      )[0];
    },
  },
};
</script>

<style></style>
