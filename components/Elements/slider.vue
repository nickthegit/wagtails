<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <slot />
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          style="enable-background: new 0 0 324.6 571.5"
          viewBox="0 0 324.6 571.5"
        >
          <path
            d="M15.2 310.9 260 555.7c14.2 13.4 36 13.4 49.5 0s13.4-35.2 0-49.5L89 285.7 309.4 65.2c13.4-13.4 13.4-36 0-49.5s-35.2-13.4-49.5 0L15.2 261.4c-13.4 13.4-13.4 35.2 0 49.5z"
            style="fill-rule: evenodd; clip-rule: evenodd"
          />
        </svg>
      </button>
      <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          style="enable-background: new 0 0 324.6 571.5"
          viewBox="0 0 324.6 571.5"
        >
          <path
            d="M309.4 260.6 64.7 15.8c-14.3-13.4-36-13.4-49.5 0S1.8 51 15.2 65.2l220.5 220.5L15.2 506.2c-13.4 13.4-13.4 36 0 49.5s35.2 13.4 49.5 0L309.4 310c13.5-13.4 13.5-35.2 0-49.4z"
            style="fill-rule: evenodd; clip-rule: evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
export default {
  name: 'SliderComponent',
  mounted() {
    new Glide('.glide').mount()
    //   const btnPrev = this.$el.querySelector('.swiper-button-prev')
    //   const btnNext = this.$el.querySelector('.swiper-button-next')
    //   // eslint-disable-next-line no-unused-vars
    //   const swiper = new Swiper(this.$el, {
    //     // modules: [Navigation],
    //     navigation: {
    //       nextEl: btnNext,
    //       prevEl: btnPrev,
    //     },
    //   })
  },
}
</script>

<style lang="scss" scoped>
@import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';
.glide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.glide__arrows {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.glide__arrow {
  cursor: pointer;
  width: 50px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  fill: var(--white);
  margin: 0 20px;
  padding: 10px;
}
.swiper-button-prev,
.swiper-button-next {
  color: var(--white);
}
</style>
