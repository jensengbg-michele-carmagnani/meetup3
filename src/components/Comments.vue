<template>
  <section id="comments">
    <h3>Comments</h3>
    <p class="comment">{{review.davide}}</p>
  </section>
</template>

<script>
export default {
  name: "Comments",
  props:{
    review:{}
  }
};
</script>

<style></style>
