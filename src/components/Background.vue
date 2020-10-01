<template>
  <div id="Background">
    <canvas />
  </div>
</template>

<script>
export default {
  name: "Background",
};
</script>

<style scoped>
#Background * {
  background-color: rgb(42, 42, 49);
  position: Fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: -1;
}
</style>