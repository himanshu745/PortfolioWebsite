<template>
  <div>
    <Nav />

    <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <router-view> </router-view>
    </transition>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" >
@import "components/style/_variables.scss";
</style>
