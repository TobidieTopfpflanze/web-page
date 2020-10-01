<template>
  <div id="app">
    <Background />
    <div id="PageContent">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Background from "@/components/Background.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Background,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #cacaca;
}

#PageContent {
  min-height: 100vh;
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
