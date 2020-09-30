<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view />
      <hr />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #aaaaaa;
}

body {
  margin: 0px;
}
</style>
