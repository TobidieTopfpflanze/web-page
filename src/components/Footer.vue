<template>
  <div id="Footer">
    <div class="Info">
      <p>
        Developer:
        <a href="https://github.com/greyliances">Greyliances</a> &
        <a href="https://github.com/tobidietopfpflanze">TobidieTopfpflanze</a>
      </p>
      <p>
        GTMCPE:
        <a href="https://grandtheft.mcpe.me/">Website</a> &
        <a href="https://grandtheft.mcpe.me/discord">Discord</a>
      </p>
      <p>
        GitHub:
        <a href="https://github.com/GTM-BE/dash">Dash</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.Info {
  padding: 30px;
  text-align: center;
  border-top: rgb(55, 56, 71) solid 15px;
  border-radius: 10px;
  background-color: rgb(44, 44, 56);
}

.Info p a {
  text-decoration: none;
  color: rgb(141, 141, 141);
  transition: 500ms;
}

.Info p a:hover {
  color: white;
  transition: 500ms;
}
</style>