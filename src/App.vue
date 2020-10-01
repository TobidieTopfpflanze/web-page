<template>
  <div id="app">
    <Background />
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Background from "@/components/Background.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Background,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #cacaca;
}

/* scroll bar*/
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f15d;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(190, 190, 190);
  border-radius: 10px;
}

/* Handle on hover*/
::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 255, 255);
}

body {
  margin: 0px;
}
</style>
