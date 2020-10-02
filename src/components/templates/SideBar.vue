<template>
  <div id="SideBar">
    <h1 id="Title">Navigation</h1>
    <div id="Content"></div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ["title", "content"],
  methods: {
    resize: () => {
      const bar = document.getElementById("SideBar");
      const content = document.getElementById("Content");
      if (!(bar || content)) return;

      bar.style.height = window.innerHeight - 60 + "px";
      content.style.height = window.innerHeight - 150 + "px";
      return;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.resize();
      window.addEventListener("resize", () => this.resize());
    });
  },
};
</script>

<style scoped>
#SideBar {
  position: sticky;
  top: 30px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: 80px 90vh;
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(105, 105, 211);
}

#Title {
  width: 315px;
  height: 35px;
  padding: 5px 5px 5px 15px;
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(77, 77, 155);
}

#Content {
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: rgb(114, 114, 197);
}

#Content div {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: rgb(77, 77, 155);
  transition: 250ms;
}

#Content div:hover {
  background-color: rgba(0, 0, 0, 0.445);
  transition: 250ms;
}
</style>