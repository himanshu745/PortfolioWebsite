<template>
  <div>
    <div class="heading-box">
      <h2 class="intro">
        Hi! I am Himanshu, a Designer based in New Zealand and I <br />
        design beautiful & functional websites and mobile applications
      </h2>

      <h4 class="sub-heading">See my work below,</h4>
    </div>
    <div class="container text-center bg-grey">
      <div class="row text-center">
        <div class="col-sm-12 col-md-4 p-0">
          <div class="thumbnail" data-toggle="modal" data-target="#myModal">
            <img src="@/assets/coffee.jpg" alt="" />
            <img src="@/assets/coffee.jpg" hidden />
            <div @click="showImage" class="overlayOne">
              <h3 class="coffee-paking">Coffee Packaging</h3>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 p-0">
          <div class="thumbnail">
            <img class="img-view" src="@/assets/earthapp.jpg" alt="" />

            <div class="overlay">
              <a href="https://www.behance.net/gallery/109419633/Web-Design">
                <h3 class="heading">Earthbudi App Design</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 p-0">
          <div class="thumbnail">
            <img src="@/assets/rcslogo.jpg" alt="" />

            <div class="overlay-three">
              <a
                href="https://www.behance.net/gallery/85988883/Earthbudi-App-Design"
              >
                <h3 class="heading-three">Logo Design</h3>
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 p-0">
          <div class="thumbnail gutter-0">
            <img src="@/assets/glassDelivery.jpg" alt="" />

            <div class="overlay-four">
              <a
                href="https://www.behance.net/gallery/85988883/Earthbudi-App-Design"
              >
                <h3 class="heading-three">GLASS DELIVERY</h3>
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 p-0">
          <div class="thumbnail gutter-0">
            <img src="@/assets/digiEvent.jpg" alt="" />

            <div class="overlay-four">
              <a
                href="https://www.behance.net/gallery/85988883/Earthbudi-App-Design"
              >
                <h3 class="heading-three">DIGI EVENT</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <img id="image" src="@/assets/coffee.jpg" alt="" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
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
  methods(showImage) {},
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";

.heading-box {
  position: relative;
  display: block;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  padding: 70px 0% 50px 0%;
  margin: 0 auto;
}

.intro {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  display: flex;
  font-size: 400 40px;
  font-family: "Playfair Display", "Open Sans", "Arial", sans-serif;
  color: #222222;
  line-height: 60px;
  letter-spacing: 0px;
  text-transform: none;
  align-items: center;
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
  margin-left: 9rem;
  margin-bottom: 3rem;
}

.thumbnail[data-v-fed9ffe2] {
  padding: 0 0 0px 0;
  border: none;
  border-radius: 0;
}

.thumbnail img {
  width: 100%;
  height: 100%;
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