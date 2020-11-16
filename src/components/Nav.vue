<template>
  <div>
    <!-- Nav bar for web -->
    <nav class="navbar navbar-expand-md bg-light navbar-dark">
      <a class="navbar-brand" href="#"
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
          <li class="nav-item bg-drak">
            <router-link class="nav-link" :to="'/contact'">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- <div class="container-fluid">
      <div class="raw">
        <div class="col-sm-3">
          <img class="logo" src="@/assets/logo.jpg/" alt="logo" />
        </div>
        <div class="col-sm-8">
          <router-link class="link" v-bind:to="'/'">Work</router-link>
          <router-link class="link" :to="'/about'">About</router-link>
          <router-link class="link" :to="'/contact'">Contact</router-link>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  nav: "Nav",
};
</script>

<style lang="scss" >
@import "./style/_variables.scss";
.logo {
  width: 4rem;
}

.nav-link {
  color: grey;
}
</style>