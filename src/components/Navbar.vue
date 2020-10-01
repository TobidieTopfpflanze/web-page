<template>
  <div id="Navbar">
    <div id="Head">
      <router-link to="home">
        <img src="../assets/logo.png" />
        <h1 id="title">Dash</h1>
      </router-link>
    </div>
    <div id="Border" />
    <div id="Nav">
      <router-link to="home" class="Link">Home</router-link>
      <router-link to="projects" class="Link">Projects</router-link>
      <router-link to="about" class="Link">About</router-link>
      <router-link to="contact" class="Link">Contact</router-link>
      <router-link to="test" class="Link">Test</router-link>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/** Head with icon */
#Head {
  background-color: rgb(44, 44, 56);
  padding: 10px;
}
#Head * {
  font-size: 40px;
  text-decoration: none;
}

#Head img {
  width: 1em;
  height: auto;
  transition: 500ms;
}

#Head img:hover {
  transform: scale(1.2);
  transition: 500ms;
}

#title {
  display: inline;
  color: #aaaaaa;
  margin: 0em 0.5em 0em 0.5em;
}
/** Head-Nav Border */
#Border {
  border-bottom: 15px solid rgb(55, 56, 71);
}

/** Navigation bar */
#Nav {
  display: flex;
  list-style-type: none;
  margin: 0em;
  padding: 0em;
}

.Link {
  background-color: rgb(55, 56, 71);
  color: #aaaaaa;
  text-decoration: none;
  text-align: center;
  width: 90px;
  height: 30px;
  font-size: 18px;
  border-radius: 0px 0px 15px 15px;
  transition: 500ms;
}

.Link:hover {
  color: white;
  width: 125px;
  transition: 500ms;
}
</style>
