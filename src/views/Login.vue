<template>
  <div class="Login">
    <LoginForm />
  <Foot/>
  </div>
</template>

<script>
import Foot from "@/components/Foot.vue"
import LoginForm from "@/components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
    Foot
  },
};
</script>

<style></style>
