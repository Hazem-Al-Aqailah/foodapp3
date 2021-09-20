<template>
  <!-- made with hero generator https://hero-generator.netlify.app/ -->
  <div>
    <section class="masthead" role="img" aria-label="Image Description">
      <h1>Tasty Foods</h1>
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.masthead {
  padding: 40px;
  width: 100%;
  height: 80vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 59%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(~/assets/headerimg.jpg) no-repeat center center scroll;
}
h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 110px;
}
</style>


    