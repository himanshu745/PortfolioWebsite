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

      <div class="header-link" id="collapsibleNavbar">
        <ul class="ml-auto">
          <li>
            <a
              href="https://www.behance.net/himanshurajpal"
              class="yt_link col-md-3"
              ><i class="fab fa-behance-square icon"></i
            ></a>
            <a href="" class="yt_link col-md-3"
              ><i class="fab fa-github-square"></i>
            </a>

            <a href="" class="yt_link col-md-3">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  nav: "Nav",
  data() {
    return {
      active: "i",
      inactive: "",
    };
  },
  methods: {
    setActive(value) {
      this.active = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style/_variables.scss";

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}

.bg-light {
  background-color: #f7f7f7 !important;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.logo {
  width: 4rem;
  border-radius: 25px;
}

.header-link {
  display: flex;
}

.ml-auto {
  color: #0000;
}
ul {
  text-decoration: none;
}

li {
  list-style: none;
}

.header-link {
  margin-bottom: 2rem;
}

.fab,
.far {
  font-weight: 500;
  color: #797979;
  margin-left: 18.5px;
  font-size: 20px;

  &:active {
    color: #000;
    opacity: 1 !important;
  }

  &:hover {
    opacity: 0.3;
    color: rgb(19, 19, 19);
  }
}

.navbar-expand-md .navbar-nav {
  margin-top: 3rem;
  margin-left: -7rem;
  margin-right: 1rem;
}

.navbar-expand-md .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 3.5rem;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgb(0 0 0 / 64%);
}
</style>