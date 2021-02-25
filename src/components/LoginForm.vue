<template>
  <section id="login-form">
    <section v-if="!isLoggedIn" class="login">
      <div class="main">
        <p class="sign" align="center">Sign in</p>
        <form class="form1">
          <input
            v-model="login.username"
            class="username"
            type="text"
            align="center"
            placeholder="Username"
            :class="{ 'fail-username': this.isFailed }"
          />
          <input
            v-model="login.pass"
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
            :class="{ 'fail-password': this.isFailed }"
          />

          <button @click="getLogin" class="submit">Sign in</button>

          <p class="forgot" align="center"></p>
        </form>
      </div>
    </section>

     <section v-else class="login">
      <div class="main">
        <p class="sign" align="center">Logout</p>
        <form class="form1">
          
         

          <button @click="logout" class="submit">Logout</button>

          <p class="forgot" align="center"></p>
        </form>
      </div>
    </section>
  
   
  </section>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      login: {
        username: "",
        pass: "",
      },
      
      isFailed: false,
    };
  },
  methods: {
    async getLogin() {
      let userLogin = { username: this.login.username, pass: this.login.pass };

      await this.$store.dispatch("login", userLogin);
      if (this.isLoggedIn) {
        this.login.username = "";
        this.login.pass = "";
        this.$router.push("/");
      } else {
        this.isFailed = !this.isFailed;
        this.login.username = "";
        this.login.pass = "";
      }
    },
    async logout() {
      await this.$store.commit("logoutUser");
      this.loggedIn = false;
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.user.username;
    },
  },
};
</script>

<style scoped></style>
