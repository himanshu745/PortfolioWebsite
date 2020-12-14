<template>
  <div>
    <div class="container-fluid">
      <h2 class="intro">
        Hi! I am Himanshu, a Designer based in of New Zealand and I <br />
        design beautiful & functional websites and mobile applications
      </h2>

      <h4 class="sub-heading">See my work below,</h4>
    </div>
    <div class="container-fluid text-center bg-grey">
      <div class="row text-center">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="@/assets/coffee.jpg" alt="" />

            <div class="overlayOne">
              <a
                class="btn-view"
                href="https://www.behance.net/gallery/85109645/Coffee-packaging"
                >View More</a
              >
              <h3 class="coffee-paking">Coffee Packaging</h3>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img class="img-view" src="@/assets/gls.jpg" alt="" />

            <div class="overlay">
              <a
                class="btn-view"
                href="https://www.behance.net/gallery/109419633/Web-Design"
                >View More</a
              >
              <h3 class="heading">Glass deliver websites</h3>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="@/assets/mobile.png" alt="" />

            <div class="overlay-three">
              <a
                class="btn-view"
                href="https://www.behance.net/gallery/85988883/Earthbudi-App-Design"
                >View More</a
              >
              <h3 class="heading-three">Earthbudi App Design</h3>
            </div>
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
    return {};
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

.thumbnail {
  position: relative;
  .btn-view {
    position: absolute;
    top: 80%;
    left: 60%;
    display: none;
    font-size: 1rem;
  }

  &:hover .btn-view {
    display: block;
    width: 120px;
    height: 40px;
    color: #e2e2e2;
    background: #b8b8b8da;
    border-radius: 11px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 47px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
  }

  .coffee-paking {
    position: absolute;
    width: 100%;
    top: 50%;
    display: none;
    font-size: 1rem;
  }

  &:hover .coffee-paking {
    display: block;
    text-align: center;
    color: #e2e2e2;
    font-size: 35px;
    text-transform: uppercase;
  }

  .heading {
    position: absolute;
    width: 100%;
    top: 50%;
    display: none;
    font-size: 1rem;
  }

  &:hover .heading {
    display: block;
    text-align: center;
    color: #e2e2e2;
    font-size: 35px;
    text-transform: uppercase;
  }

  .heading-three {
    position: absolute;
    width: 100%;
    top: 50%;
    display: none;
    font-size: 1rem;
  }

  &:hover .heading-three {
    display: block;
    text-align: center;
    color: #e2e2e2;
    font-size: 35px;
    text-transform: uppercase;
  }
}

.overlayOne {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #1f1f1f94;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.thumbnail:hover .overlayOne {
  bottom: 0;
  height: 100%;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #008bbab7;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.thumbnail:hover .overlay {
  bottom: 0;
  height: 100%;
}

.overlay-three {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: #3d5c00de;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.thumbnail:hover .overlay-three {
  bottom: 0;
  height: 100%;
}
</style>