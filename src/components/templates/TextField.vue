<template>
  <div id="TextField">
    <h1 class="Title" v-if="title">
      <strong>{{ title }}</strong>
    </h1>
    <div id="Container"></div>
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: ["title", "filepath"],
};
</script>

<style>
#TextField {
  width: 100vmax;
  height: fit-content;
  margin: 0px 50px 0px 50px;
  border-radius: 10px;
  background-color: rgba(55, 56, 71);
}

.Title {
  padding: 5px 5px 5px 15px;
  margin: 15px;
  border-radius: 10px;
  background-color: rgb(44, 44, 56);
}

.Content {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: rgb(44, 44, 56);
}
</style>
