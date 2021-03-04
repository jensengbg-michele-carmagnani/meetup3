<template>
  <section id="add-event">
    <NewEvent/>
    <Foot/>
  </section>
</template>

<script>
import Foot from "@/components/Foot.vue"
import NewEvent from "@/components/NewEvent.vue"
export default {
name: "AddEvent",
components:{
  NewEvent,
  Foot
},
data() {
  return {
    
  }
},
}
</script>

<style>

</style>