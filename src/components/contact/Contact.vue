<template>
  <div>
    <!-- <div class="text">
      <h2>Get In Touch</h2>
    </div> -->
    <div class="container">
      <div style="text-align: center"></div>
      <div class="row">
        <div class="column">
          <h2>Get In Touch</h2>
          <p>
            I love to listen and I am eagerly waiting to talk to you regarding
            your project. <br />Get in touch with us if you have any queries and
            I will get back to you as soon as possible.
          </p>
          <form action="/action_page.php">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              ref="fName"
              name="firstname"
              placeholder="Your name.."
            />
            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              ref="lName"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              ref="subject"
              placeholder="Write something.."
              style="height: 170px"
            ></textarea>
            <input type="submit" @click.prevent="prevent" value="Submit" />
          </form>
        </div>
        <div class="column">
          <div class="contactPage">
            <img class="c-image" src="@/assets/contactImage.jpg/" alt="image" />
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
  name: "contact",
  methods: {
    prevent: function (e) {
      // `this` inside methods points to the Vue instance
      e.preventDefault();
      this.$refs["fName"].value = "";
      this.$refs["lName"].value = "";
      this.$refs["subject"].value = "";
      // `event` is the native DOM event
    },
  },
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

/* Style inputs */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #05386b;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
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
  width: 120%;
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

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>