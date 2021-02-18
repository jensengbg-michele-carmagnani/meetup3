<template>
  <section id="card">
    <img class="event-img" :src="event.image" alt="" />
    <h3 class="location">{{ event.location }}</h3>
    <h3 class="data">{{ event.date }}</h3>
    <h3 class="price">{{ event.price }}</h3>
    <h3 class="name">{{ event.name }}</h3>
  </section>
</template>

<script>
export default {
  name: "Event",
  props: {
    event: Object,
  },
};
</script>

<style></style>
