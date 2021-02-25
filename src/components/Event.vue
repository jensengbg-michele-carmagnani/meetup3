<template>
  <section id="card" @click="goToDetails(event.idEvent)">
    <img class="img-event" :src="event.image" alt="">
    <h3 class="name">{{ event.name }}</h3>
    <h3 class="location">{{ event.location }}</h3>
    <h3 class="data">{{ event.date }}</h3>
    <h3 class="price">{{ event.method }}</h3>
  </section>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
  },
  methods: {
    goToDetails(id) {
      this.$router.push(`/infoPage/${id}`);
    },
  },
};
</script>

<style></style>
