<template>
  <main>
    <section class="slider-outer-container">
      <div class="slider-inner-container">
        <elements-slider>
          <div
            v-for="img in images"
            :key="img"
            class="swiper-slide"
            :style="{
              backgroundImage: `url(https://res.cloudinary.com/jonserness/image/upload/c_fill,f_auto,g_auto,q_10,w_160,h_70,e_blur:800/v1651939482/wagtails/${img})`,
            }"
          >
            <picture>
              <source
                :srcset="`
                  https://res.cloudinary.com/jonserness/image/upload/w_800,h_600,c_fill,dpr_auto,f_auto,g_auto,q_auto/v1651939482/wagtails/${img}
                `"
                media="(max-width: 768px)"
              />
              <source
                :srcset="`
                  https://res.cloudinary.com/jonserness/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto,w_1600,h_700/v1651939482/wagtails/${img}
                `"
                media="(min-width: 769px)"
              />

              <img
                :src="`https://res.cloudinary.com/jonserness/image/upload/c_fill,dpr_auto,f_auto,g_auto,q_auto,w_1600,h_700/v1651939482/wagtails/${img}`"
                alt="A description of the image."
                width="1600"
                height="700"
                decoding="async"
              />
            </picture>
          </div>
        </elements-slider>
      </div>
      <section class="info-strap"></section>
    </section>
    <article>
      <h1>Accommodation</h1>
      <p>
        Wagtails is located in Sandford Orcas in a quiet location close to the
        market town of Sherborne it is a detached 2 bedroom county cottage/Lodge
        that has recently been lovingly renovated and decorated through with all
        mod Cons. fully central heated, Country Walks in all directions, you can
        sit and listen to the wildlife hear the dawn chorus, I have been
        watching the deer and the owls in the field opposite recently,
      </p>
      <h2>The Space</h2>
      <p>
        Wagtails is located on the Somerset- Dorset boarder in a quiet location
        close to the market town of Sherborne it is a detached 2 bedroom county
        cottage/Lodge that has recently been lovingly renovated and decorated
        through with all mod Cons. There is open plan living with oak flooring
        through out the ground floor, The lounge area has 1 x 3 seater and 1 x2
        seater fully reclining leather settees, Smart tv and a chunky 6 seater
        farmhouse table and chairs, with bifold doors leading to the private
        garden and patio area equipped with bbq, out door dining table and
        chairs to enjoy the great country views of Corton Ridge and Cadbury
        Castle . it has a new fitted kitchen complete with American fridge
        Freezer, integrated dishwasher, induction cooker, washing machine and
        tumble dryer.
      </p>
      <h2>Upstairs</h2>
      <p>
        Upstairs has a master bedroom with a lovely original king size Victorian
        Brass bed, new comfortable pocket sprung mattress , and stunning Views
        and on clear days Glastonbury Tor can be seen, The second bedroom has
        new zip and link beds which can be either a king size bed or 2 x 2ft 6
        single full pocket sprung mattresses, and again stunning views, Modern
        Bathroom has a large walk in mira shower, heater towel rail ,fluffy
        Towels it has a shaver point, loo and sink.
      </p>
      <h2>Outside Parking</h2>
      <p>
        Outside there are 2 allocated private parking spaces in front of the
        property, the property has the added security of a electric gate which
        can be controlled by guest, The property is family friendly, 2 couples
        or just a couple looking for a peaceful break, The guests have entire
        access to the cottage and garden, no smoking any where inside the
        property, 2 well behaved dogs, as I have a dog myself, no pets upstairs
        or on the furniture
      </p>
      <h2>Guest Access</h2>
      <p>
        There are 2 parking spaces in front of the cottage, There are many
        footpaths, tracks for Walking, Cycling,
      </p>
      <p>
        Other things to note We sometimes have Sheep in the paddock adjacent to
        the garden area, and the Free range Tamworth Pigs across the other side
        of the lane, which you can see in some of the pictures
      </p>
      <a
        href="https://www.airbnb.co.uk/rooms/51009780"
        target="_blank"
        rel="noopener noreferrer"
        class="btn"
        >Find Out More</a
      >
    </article>
  </main>
</template>

<script>
export default {
  name: 'AccommodationPage',
  data() {
    return {
      images: [
        'Wagtails_11',
        'Wagtails_1',
        'Wagtails_2',
        'Wagtails_3',
        'Wagtails_4',
        'Wagtails_5',
        'Wagtails_6',
        'Wagtails_7',
        'Wagtails_8',
        'Wagtails_9',
        'Wagtails_10',
        'Wagtails_12',
        'Wagtails_13',
        'Wagtails_14',
        'Wagtails_15',
        'Wagtails_16',
        'Wagtails_17',
      ],
    }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: calc(var(--edge-spacing) * 3) 0 calc(var(--margin-spacing) * 8) 0;
}
.slider-outer-container {
  width: 100%;
  max-width: var(--big-container);
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
.swiper-slide {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
article {
  width: 100%;
  max-width: var(--small-container);
  padding: var(--edge-spacing);
  margin: 0 auto;
  h1 {
    font-size: var(--h1-sizing);
    color: var(--color-primary);
  }
  h2 {
    font-size: var(--h2-sizing);
  }
  p,
  h1 {
    margin-bottom: var(--margin-spacing);
  }
  a {
    margin-top: calc(var(--margin-spacing) * 2);
  }
  p {
    &:nth-child(2) {
      font-size: var(--h4-sizing);
      line-height: calc(var(--h4-sizing) * 1.1);
    }
  }
}
</style>
