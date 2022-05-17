<template>
  <section>
    <div class="imgae-grid-wrap">
      <slot></slot>
    </div>
  </section>
  <!-- /0000ff -->
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.25;
  // overflow: scroll;
}
.imgae-grid-wrap {
  width: 420rem;
  height: 111.7rem;
  position: absolute;
  top: 0;
  left: 0;
}
img {
  object-fit: cover;
  &:nth-child(1) {
    position: absolute;
    width: 58.8rem;
    height: 39.3rem;
    left: 5.4rem;
    top: 4.9rem;
  }

  &:nth-child(2) {
    position: absolute;
    width: 36.9rem;
    height: 27.7rem;
    left: 10.9rem;
    top: 50.9rem;
  }

  &:nth-child(3) {
    position: absolute;
    width: 32.5rem;
    height: 24.4rem;
    left: 132.5rem;
    top: 49.5rem;
  }

  &:nth-child(4) {
    position: absolute;
    width: 33.4rem;
    height: 22.3rem;
    left: 0rem;
    top: 84.8rem;
  }

  &:nth-child(5) {
    position: absolute;
    width: 40.9rem;
    height: 29.9rem;
    left: 128.3rem;
    top: 81.8rem;
  }

  &:nth-child(6) {
    position: absolute;
    width: 63.6rem;
    height: 42.3rem;
    left: 55.9rem;
    top: 64.5rem;
  }

  &:nth-child(7) {
    position: absolute;
    width: 36.8rem;
    height: 36.7rem;
    left: 75.1rem;
    top: 19.1rem;
  }

  &:nth-child(8) {
    position: absolute;
    width: 60.5rem;
    height: 40.3rem;
    left: 209.3rem;
    top: 9.2rem;
  }

  &:nth-child(9) {
    position: absolute;
    width: 48.9rem;
    height: 36.2rem;
    left: 176.6rem;
    top: 59.8rem;
  }
  &:nth-child(10) {
    position: absolute;
    width: 70.3rem;
    height: 42.1rem;
    left: 125.9rem;
    top: 0rem;
  }

  &:nth-child(11) {
    position: absolute;
    width: 28.4rem;
    height: 21.3rem;
    left: 233rem;
    top: 80.7rem;
  }

  &:nth-child(12) {
    position: absolute;
    width: 49.6rem;
    height: 37.2rem;
    left: 275.9rem;
    top: 74.5rem;
  }

  &:nth-child(13) {
    position: absolute;
    width: 50.9rem;
    height: 38.1rem;
    left: 289rem;
    top: 21.7rem;
  }

  &:nth-child(14) {
    position: absolute;
    width: 67.4rem;
    height: 42.5rem;
    left: 352.6rem;
    top: 10rem;
  }

  &:nth-child(15) {
    position: absolute;
    width: 49.6rem;
    height: 33rem;
    left: 339.9rem;
    top: 69.2rem;
  }
}
</style>
