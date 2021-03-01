<template>
  <section id="new-event">
    <article class="main">
      <p class="sign" align="center">Create Event</p>
      <section class="form1">
        <input
          v-model="newEvent.name"
          class="name"
          type="text"
          align="center"
          placeholder="Event's name "
          :class="{ 'fail-input': this.isFailed }"
        />
        <input
          v-model="newEvent.location"
          class="name"
          type="text"
          align="center"
          placeholder="Location  "
          :class="{ 'fail-input': this.isFailed }"
        />
        <input
          v-model="newEvent.date"
          class="data"
          type="text"
          align="center"
          placeholder="Date  xx/xx/xx/"
          :class="{ 'fail-input': this.isFailed }"
        />
        <input
          v-model="newEvent.timeIn"
          class="time"
          type="text"
          align="center"
          placeholder="starting time 00:00"
          :class="{ 'fail-input': this.isFailed }"
        />
        <textarea
          rows="6"
          cols="50"
          v-model="newEvent.description"
          class="description "
          type="text"
          align="center"
          placeholder="Description "
          :class="{ 'fail-input': this.isFailed }"
        />

        <button @click="CreateEvent" class="submit">Create Event</button>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  name: "newEvent",
  data() {
    return {
      isFailed: false,
      counter: 9,
      newEvent: {
        name: "",
        location: "",
        date: "",
        starting: "",
        methods: "onLine",
        description: "",
        image: "https://picsum.photos/200/300.webp",
        review: [],
        enrolled: [],
      },
    };
  },
  methods: {
    CreateEvent() {
      if (
        this.name == "" ||
        this.location == "" ||
        this.data == "" ||
        this.starting == "" ||
        this.description == ""
      ) {
        this.isFailed = !this.isFailed;
        this.name == "";
        this.location == "";
        this.data == "";
        this.starting == "";
        this.description == "";
      } else {
        console.log("else in create");

        this.increaseCounter();
        this.$store.dispatch("newEvent", this.newEvent);
        this.name == "";
        this.location == "";
        this.data == "";
        this.starting == "";
        this.description == "";
        this.$router.push("/");
      }
    },
    increaseCounter() {
      this.counter++;
    },
  },
};
</script>

<style></style>
