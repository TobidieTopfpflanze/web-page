<template>
  <div id="about">
    <h1>About</h1>
    <div id="SideBar">
      <h1 id="Title">Dash</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#SideBar {
  right: 200px;
  width: 250px;
  height: 50rem;
  border-right: 20px solid rgb(44, 44, 56);
  border-radius: 0px 15px 15px 0px;
  background-color: rgb(55, 56, 71);
  transition: 500ms;
}

#SideBar:hover {
  right: 0px;
  transition: 500ms;
}

#Title {
  padding: 10px;
  background-color: rgb(44, 44, 56);
}
</style>
