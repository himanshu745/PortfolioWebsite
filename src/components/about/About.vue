<template>
  <div>
    <div class="container">
      <div style="text-align: center"></div>
      <div class="row">
        <div class="column">
          <div class="myImage">
            <img class="c-image" src="@/assets/contact.jpg/" alt="image" />
          </div>
        </div>

        <div class="column">
          <h2 class="name">Himanshu Rajpal</h2>
          <h4 class="detail">
            A graphic designer based in of New Zealand, who loves to design,
            shoot & travel.
          </h4>
          <p class="about">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";

* {
  box-sizing: border-box;
}

.text {
  width: 70%;
  display: flex;
  justify-self: start;
  margin-left: 1rem;
}

/* Style the container/contact section */
.container {
  padding: 10px;
}

/* Create two columns that float next to eachother */
.column {
  float: left;
  width: 50%;
  margin-top: 6px;
  padding: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.c-image {
  width: 100%;
}

.name {
  display: flex;
  justify-content: flex-start;
  font-size: 2.5rem;
  font-family: "Roboto";
  font-weight: 600;
  font-style: oblique;
  line-height: revert;
}

.detail {
  display: flex;
  justify-content: flex-start;
  font-size: 1.5rem;
  font-family: "Roboto";
  font-weight: 400;
  font-style: revert;
  line-height: 1.4;
}

.about {
  display: flex;
  justify-content: flex-start;
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 200;
  font-style: initial;
  line-height: 1.6;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>