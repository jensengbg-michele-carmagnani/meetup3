<template>
  <section id="login-form">
    <section v-if="!loggedIn" class="login">
      <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1">
          <input
            v-model="login.username"
            class="username"
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            v-model="login.pass"
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          />

          <button @click="getLogin" class="submit">Sign in</button>

          <p class="forgot" align="center"></p>
        </form>
      </div>
    </section>

    <button v-else @click="logout" class="btn-logout">Logout</button>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: {
        username: "",
        pass: "",
      },
      loggedIn: false,
    };
  },
  methods: {
    async getLogin() {
      await this.$store.dispatch("login", this.login);
      this.loggedIn = this.$store.state.showLogin;
      this.login.username = "";
      this.login.pass = "";
      this.$router.push("/");
    },
    async logout() {
      await this.$store.commit("logoutUser");
      this.loggedIn = false;
    },
  },
};
</script>

<style scoped></style>
