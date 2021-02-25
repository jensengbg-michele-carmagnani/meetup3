<template>
  <section id="eventInfo">
    <article class="message">
      <p v-if="enrollmentState !== undefined">Enrolled</p>
      <p v-else>not enrolled</p>
    </article>

    <article class="card-info">
      <h2>event info</h2>
      <!-- <img class="event-img" :src="event.image" alt=""> -->
      <p>{{ event.name }}</p>
      <p>{{ event.date }}</p>
      <p>{{ event.method }}</p>
      <p>{{ event.location }}</p>
    </article>

    <article class="description">{{ event.description }}</article>
    <article v-if="!checkUser" class="review-input-area">
      <label class="add-review" for="">Add your review</label>
      <input
        @keypress.enter="setReview"
        class="input-text"
        type="text"
        v-model="review"
      />
    </article>
    <article class="enrollment" v-if="!checkUser">
      <button class="btn-enroll" @click="enrollUser">Enroll the event</button>
    </article>
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
    };
  },
  methods: {
    enrollUser() {
      let eventId = this.event.idEvent;

      this.$store.dispatch("enrollUser", eventId);
    },
    setReview() {
      let data = {
        reviewText: this.review,
        eventName: this.event.name,
      };

      this.$store.dispatch("setReview", data);
    },
  },

  computed: {
    event() {
      let idEvent = this.$route.params.id;
      this.$store.dispatch("findEvent", idEvent);
      return this.$store.getters.event;

      // return this.$store.getters.events.find(
      //   (event) => event.idEvent == this.$route.params.id
      // );
    },
    enrollmentState() {
      let idUser = this.$store.state.user.id;
      return this.$store.getters.event.enrolled.find(
        (event) => event === idUser
      );
    },
    checkUser() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style lang="sass" scoped></style>
