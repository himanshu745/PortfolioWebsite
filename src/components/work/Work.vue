<template>
  <div>
    <div class="container-fluid">
      <h2 class="intro">
        Hi! I am Himanshu, a Designer based in of New Zealand and I <br />
        design beautiful & functional websites and mobile applications
      </h2>

      <h4 class="sub-heading">See my works below,</h4>
    </div>
    <div class="container-fluid text-center bg-grey">
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="@/assets/coffee.jpg/" alt="img" />

            <p><strong></strong></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="@/assets/logo-one.jpg" alt="" />
            <p><strong></strong></p>
            <p></p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="sanfran.jpg" alt="" />
            <p><strong></strong></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "/",
  components: {},
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
.intro {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: oblique;
  font-weight: 300;
  font-size: 36px;
  line-height: 47px;
  align-items: center;
  color: #535353;
}
.sub-heading {
  width: 80%;
  margin-top: 1rem;
  font-family: inherit;
  font-style: oblique;
  font-weight: 200;
  font-size: 30px;
  line-height: 47px;
  align-items: center;
  color: #535353;
}

.thumbnail[data-v-fed9ffe2] {
  padding: 0 0 0px 0;
  border: none;
  border-radius: 0;
  margin-top: 5rem;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}
</style>