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
  position: absolute;
  overflow: hidden;
  z-index: -1;
}
</style>