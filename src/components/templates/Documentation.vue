<template>
  <div id="PageTemplate">
    <SideBar />
    <TextField />
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
  methods: {
    insertData: (props) => {
      return props;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.insertData(this.props);
    });
  },
};
</script>

<style scoped>
#PageTemplate {
  display: flex;
  margin-bottom: 20px;
  grid-template-columns: 300px auto;
  grid-template-rows: auto;
}
</style>