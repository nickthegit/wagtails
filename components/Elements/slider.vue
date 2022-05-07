<template>
  <!-- Slider main container -->
  <div class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination
    <div class="swiper-pagination"></div> -->

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar
    <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
export default {
  name: 'SliderComponent',
  mounted() {
    const btnPrev = this.$el.querySelector('.swiper-button-prev')
    const btnNext = this.$el.querySelector('.swiper-button-next')
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(this.$el, {
      modules: [Navigation],
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.swiper-button-prev,
.swiper-button-next {
  color: var(--white);
}
</style>
