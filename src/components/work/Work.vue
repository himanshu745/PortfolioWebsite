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
          <div class="thumbnail" data-toggle="modal" data-target="#coffeeModal">
            <img src="@/assets/coffee.jpg" alt="" />

            <div class="overlayOne">
              <span>
                <h3 class="coffee-paking">Coffee Packaging</h3>
                <p>Packing · Design</p>
              </span>
            </div>
          </div>
        </div>
        <!-- coffee Modal -->
        <div class="modal fade bg-transparent" id="coffeeModal" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Coffee Packaging</h4>
              </div>
              <div class="modal-body p-0">
                <img
                  :src="require(`@/assets/coffeeOne.jpg`)"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 p-0">
          <div class="thumbnail" data-toggle="modal" data-target="#eathbudi">
            <img class="img-view" src="@/assets/earthapp.jpg" alt="" />

            <div class="overlay">
              <h3 class="heading">Earthbudi App Design</h3>
            </div>
          </div>
        </div>
        <!-- Earthbudi Modal -->
        <div class="modal fade bg-transparent" id="eathbudi" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Earthbudi</h4>
              </div>
              <div class="modal-body p-0">
                <img
                  :src="require(`@/assets/EarthBudy.jpg`)"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-4 p-0">
          <div class="thumbnail" data-toggle="modal" data-target="#logo">
            <img src="@/assets/rcslogo.jpg" alt="" />

            <div class="overlay-three">
              <h3 class="heading-three">Logo Design</h3>
              <p></p>
            </div>
          </div>
        </div>

        <!-- logo design -->
        <div class="modal fade bg-transparent" id="logo" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Logo Design</h4>
              </div>
              <div class="modal-body p-0">
                <img
                  :src="require(`@/assets/rcs.jpg`)"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-lg-6 p-0">
          <div
            class="thumbnail gutter-0"
            data-toggle="modal"
            data-target="#gls"
          >
            <img src="@/assets/glassDelivery.jpg" alt="" />

            <a>
              <div class="overlay-four">
                <h3 class="heading-three">GLASS DELIVERY</h3>
              </div>
            </a>
          </div>
        </div>

        <!-- gls design -->
        <div class="modal fade bg-transparent" id="gls" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">Glass Delivery Specialist</h4>
              </div>
              <div class="modal-body p-0">
                <img
                  :src="require(`@/assets/glsfinal.jpg`)"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-sm-12 col-lg-6 p-0"
          data-toggle="modal"
          data-target="#digi"
        >
          <div
            class="thumbnail gutter-0"
            data-toggle="modal"
            data-target="#digi"
          >
            <img src="@/assets/digieventArtboard-5.png" alt="" />

            <div class="overlay-five">
              <h3 class="heading-three">DIGI EVENT</h3>
            </div>
          </div>
        </div>

        <!-- digiEvent design -->
        <div class="modal fade bg-transparent" id="digi" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 class="modal-title">DIGI EVENT</h4>
              </div>
              <div class="modal-body p-0">
                <img
                  :src="require(`@/assets/DigiEventFull.png`)"
                  class="img-fluid img-thumbnail"
                  alt=""
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <h2 class="footer-text">MADE WITH ❤️ IN NEW ZEALAND CHRISTCHURCH.</h2>
    </footer>
  </div>
</template>

<script>
export default {
  name: "/",
  components: {},
  props: [],

  data: function () {
    return {
      isShow: true,
      isHidden: false,
      images: [
        {
          id: 1,
          name: "coffee Packing",
          imageOne: require("@/assets/rcslogo.jpg"),
          alt: "",
        },
        {
          id: 2,
          imageTwo: require("@/assets/rcslogo.jpg"),
          alt: "",
        },
      ],
    };
  },
  methods: {
    goBack() {
      return this.$router.push({ path: "/" });
    },

    myModal() {},

    toggleModal() {
      this.isHidden = !this.isHidden;
    },
  },
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
  font-size: 400 35px;
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
  background-color: rgba(35, 35, 35, 1);
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
  background-color: rgba(101, 162, 45, 1);
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
  background-color: rgba(205, 207, 202, 1);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.thumbnail:hover .overlay-four {
  bottom: 0;
  height: 100%;
}

.overlay-four {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(176, 206, 214, 1);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}

.thumbnail:hover .overlay-three {
  bottom: 0;
  height: 100%;
}

.overlay-five {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(148, 213, 191, 1);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
}
.thumbnail:hover .overlay-five {
  bottom: 0;
  height: 100%;
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -2rem 35rem -1rem auto;
}

.modal-header .close {
  display: contents;
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
  display: flex;
  justify-items: center;
  margin-right: 1rem;
}

footer {
  background-color: #222222;
  display: flex;
  justify-content: center;
}

.footer-text {
  padding: 3rem;
  font-size: 1rem;
  color: #e2e2e2;
}
</style>