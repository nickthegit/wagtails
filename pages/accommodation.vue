<template>
  <main>
    <section class="slider-outer-container">
      <div class="slider-inner-container">
        <elements-slider />
      </div>
      <section class="info-strap"></section>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AccommodationPage',
  mounted() {},
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding-top: calc(var(--edge-spacing) * 3);
}
.slider-outer-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: var(--edge-spacing);
  position: relative;
}
.slider-inner-container {
  width: 100%;
  height: 0;
  position: relative;
  top: 0;
  left: 0;
  padding-top: (7 / 16) * 100%;
  z-index: 1;
  border-radius: calc(var(--edge-spacing) * 2);
  background: salmon;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-top: (3 / 4) * 100%;
  }
}
.info-strap {
  width: 80%;
  height: 12rem;
  position: relative;
  margin: -4rem auto 0 auto;
  background: var(--white);
  border-radius: var(--edge-spacing);
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.06);
  z-index: 2;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
}
</style>
