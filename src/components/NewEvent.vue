<template>
<section id="new-event">

    <article class="main">
      <p class="sign" align="center">Create Event</p>
      <form class="form1">
        <input
        
          v-model="newEvent.name"
          class="name"
          type="text"
          align="center"
          placeholder="Event's name " :class="{ 'fail-username': this.isFailed }"
        />
        <input
          v-model="newEvent.data"
          class="data"
          type="text"
          align="center"
          placeholder=" xx/xx/xx/" :class="{ 'fail-password': this.isFailed }"
        />
        <input
          v-model="newEvent.timeIn"
          class="time"
          type="text"
          align="center"
          placeholder="starting time 00:00" :class="{ 'fail-password': this.isFailed }"
        />
        <textarea
        rows="6"
        cols="50"
          v-model="newEvent.description"
          class="description "
          type="text"
          align="center"
          placeholder="Description " :class="{ 'fail-password': this.isFailed }"
        />

        <button class="submit">Create Event</button>
      </form>
    </article>
  </section>
</template>

<script>
export default {
  name: "newEvent",
  data() {
    return {
      newEvent: {
        idEvent: Math.floor(Math.random() * (10 - 1 + 1)) + 10,
        name: "",
        date: "",
        timeIn: "",
        description: "",
      },
    };
  },
  methods:{
    create(){

      this.$store.dispatch('create', this.newEvent)
    }
  }
};
</script>

<style></style>
