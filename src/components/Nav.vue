<template>
  <div>
    <!-- Nav bar for web -->
    <nav class="navbar navbar-expand-md bg-light navbar-light">
      <a class="navbar-brand" href="/"
        ><img class="logo" src="@/assets/logo.jpg/" alt="logo"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item bg-drak">
            <router-link class="nav-link" v-bind:to="'/'">Work</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/about'">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav" :to="'/contact'"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  nav: "Nav",
};
</script>

<style lang="scss" scoped>
@import "./style/_variables.scss";
.logo {
  width: 4rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgb(0 0 0 / 64%);
}
</style>