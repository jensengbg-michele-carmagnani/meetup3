<template>
  <section id="eventInfo">
    <article class="message">
      You are:
      <p v-if="enrollmentState !== undefined">enrolled</p>
      <p v-else>not enrolled</p>
    </article>

    <section class="card-info">
      <h2>event info</h2>
      <p>{{ event.name }}</p>
      <p>{{ event.date }}</p>
      <p>{{ event.method }}</p>
      <p>{{ event.location }}</p>
      <section class="description">event.description</section>
    </section>
    <section v-if="this.$store.state.showLogin" class="review-input-area">
      <input type="text" v-model="review" />
      <button @click="setReview">review</button>
    </section>
    <section class="enrollment" v-if="!checkUser">
      <button class="btn-enroll" @click="enrollUser">Enroll the event</button>
    </section>
    <section class="comments-are">
      <h3>Comments</h3>
      <Comments v-for="item in event.review" :key="item" :item="item" />
    </section>
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
    enrollUser() {
      let eventId = this.event.idEvent;
      console.log("eventId in InfoPage", eventId);
      this.$store.dispatch("enrollUser", eventId);
    },
    setReview() {
      let data = {
        reviewText: this.review,
        eventName: this.event.name,
      };
      console.log("EVENT OBJ TO DISPATCH",data);
      this.$store.dispatch("setReview", data);
    },
  },

  computed: {
    event() {
      return this.events.find(
        (event) => event.idEvent == this.$route.params.id
      );
    },
    enrollmentState() {
      let idUser = this.$store.state.user.id;
      console.log("id User", idUser);
      let enrolled = this.event.enrolled;
      console.log("Corrent", enrolled);

      return this.event.enrolled.find((event) => event === idUser);
    },
    checkUser() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style></style>
