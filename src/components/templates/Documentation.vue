<template>
  <div id="PageTemplate">
    <SideBar />
    <TextField filepath="/docs/" />
  </div>
</template>

<script>
import SideBar from "./SideBar";
import TextField from "./TextField";

export default {
  name: "Documentation",
  components: {
    SideBar,
    TextField,
  },
  props: ["title", "content"],
};
</script>

<style scoped>
#PageTemplate {
  display: flex;
  margin-bottom: 20px;
  grid-template-columns: 300px auto;
}
</style>
