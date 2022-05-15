<template>
  <main>
    <section class="slider-outer-container">
      <div class="slider-inner-container">
        <Slider>
          <div
            v-for="img in images"
            :key="img"
            class="glide__slide"
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
        </Slider>
      </div>
      <section class="info-strap">
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M1.9 40v-4.7q0-1.75.9-3.175Q3.7 30.7 5.3 30q3.65-1.6 6.575-2.3Q14.8 27 17.9 27q3.1 0 6 .7t6.55 2.3q1.6.7 2.525 2.125.925 1.425.925 3.175V40Zm29.2-13.15q3.45.4 6.5 1.175t4.95 1.775q1.65.95 2.6 2.35.95 1.4.95 3.15V40h-9.2v-4.7q0-3.15-1.6-5.175t-4.2-3.275Zm-13.2-2.9q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1Zm18-7.5q0 3.3-2.1 5.4-2.1 2.1-5.4 2.1-.55 0-1.225-.075T25.95 23.6q1.2-1.25 1.825-3.075.625-1.825.625-4.075t-.625-3.975Q27.15 10.75 25.95 9.3q.55-.15 1.225-.25t1.225-.1q3.3 0 5.4 2.1 2.1 2.1 2.1 5.4ZM4.9 37h26v-1.7q0-.8-.475-1.55T29.25 32.7q-3.6-1.6-6.05-2.15-2.45-.55-5.3-.55-2.85 0-5.325.55T6.5 32.7q-.7.3-1.15 1.05-.45.75-.45 1.55Zm13-16.05q1.95 0 3.225-1.275Q22.4 18.4 22.4 16.45q0-1.95-1.275-3.225Q19.85 11.95 17.9 11.95q-1.95 0-3.225 1.275Q13.4 14.5 13.4 16.45q0 1.95 1.275 3.225Q15.95 20.95 17.9 20.95Zm0-4.5Zm0 13.55Z"
              /></svg
            ><span>4 Guests</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M9 33.9h3.2v-3.15h23.6v3.15H39v-8.8q0-.9-.675-1.925T36.6 21.6v-3.4q0-1.6-.925-2.525-.925-.925-2.525-.925h-6.8q-.8 0-1.4.25-.6.25-1 .75-.4-.5-1-.75t-1.4-.25h-6.7q-1.6 0-2.525.925-.925.925-.925 2.525v3.4q-1.05.55-1.725 1.575T9 25.1Zm16.25-12.25v-4.4h8.85v4.4Zm-11.35 0v-4.4h8.85v4.4Zm-1.7 6.6v-2.1q0-.95.525-1.475.525-.525 1.475-.525h19.6q.95 0 1.475.525.525.525.525 1.475v2.1ZM7 44q-1.2 0-2.1-.9Q4 42.2 4 41V7q0-1.2.9-2.1Q5.8 4 7 4h34q1.2 0 2.1.9.9.9.9 2.1v34q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h34V7H7v34Zm0 0V7v34Z"
              /></svg
            ><span>2 Bedrooms</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M4 38V25.25q0-1.25.5-2.35T6 21.1v-5.8q0-2.25 1.525-3.775T11.3 10h9q1.1 0 2.05.5.95.5 1.65 1.35.7-.85 1.625-1.35.925-.5 2.025-.5h9q2.25 0 3.8 1.525Q42 13.05 42 15.3v5.8q1 .7 1.5 1.8t.5 2.35V38h-3v-4H7v4Zm21.5-17.75H39V15.3q0-1-.675-1.65Q37.65 13 36.65 13H27.5q-.85 0-1.425.7-.575.7-.575 1.6Zm-16.5 0h13.5V15.3q0-.9-.575-1.6-.575-.7-1.425-.7h-9.2q-.95 0-1.625.675T9 15.3ZM7 31h34v-5.75q0-.85-.575-1.425-.575-.575-1.425-.575H9q-.85 0-1.425.575Q7 24.4 7 25.25Zm34 0H7h34Z"
              /></svg
            ><span>3 Beds</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M13.65 18.05q-1.5 0-2.575-1.075Q10 15.9 10 14.4q0-1.5 1.075-2.575 1.075-1.075 2.575-1.075 1.5 0 2.575 1.075Q17.3 12.9 17.3 14.4q0 1.5-1.075 2.575-1.075 1.075-2.575 1.075ZM9.3 44q-.95 0-1.625-.5T7 42q-1.2 0-2.1-.9Q4 40.2 4 39V26h6v-1.4q0-1.75 1.25-3t3-1.25q.95 0 1.8.35.85.35 1.5 1.05l2.6 2.95q.35.4.725.725.375.325.775.575H36V9.3q0-.95-.625-1.625T33.8 7q-.5 0-.95.1-.45.1-.8.45l-2.6 2.6q.25.85.075 1.725-.175.875-.625 1.675L23.8 8.7q.8-.55 1.75-.7.95-.15 1.85.2L30 5.65q.75-.75 1.725-1.2Q32.7 4 33.8 4q2.2 0 3.7 1.55T39 9.3V26h5v13q0 1.2-.925 2.1-.925.9-2.075.9 0 1-.675 1.5t-1.675.5ZM7 39h34V29H7v10Zm34 0H7Z"
              /></svg
            ><span>1.5 Bathrooms</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M15.45 15.5V9.6h3v5.9Zm0 18.05v-9.8h3v9.8ZM11 44q-1.25 0-2.125-.875T8 41V7q0-1.25.875-2.125T11 4h26q1.25 0 2.125.875T40 7v34q0 1.25-.875 2.125T37 44Zm0-3h26V21.1H11V41Zm0-22.9h26V7H11Z"
              /></svg
            ><span>Kitchen</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M11.6 30.15 8.45 27q3.5-3.5 7.325-5.25T24 20q4.4 0 8.225 1.75Q36.05 23.5 39.55 27l-3.15 3.15q-3.05-3.05-6.15-4.35-3.1-1.3-6.25-1.3t-6.25 1.3q-3.1 1.3-6.15 4.35ZM3.15 21.7 0 18.55q4.65-4.75 10.825-7.65Q17 8 24 8q7 0 13.175 2.9Q43.35 13.8 48 18.55l-3.15 3.15q-4.4-4.2-9.625-6.7T24 12.5q-6 0-11.225 2.5T3.15 21.7ZM24 42.55l7.4-7.45q-1.45-1.45-3.325-2.275Q26.2 32 24 32t-4.075.825Q18.05 33.65 16.6 35.1Z"
              /></svg
            ><span>Wifi</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <path
                d="M8.5 23.75q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm9.25-8.5q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm12.5 0q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.9 1.3-3.2 1.3-1.3 3.2-1.3 1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm9.25 8.5q-1.9 0-3.2-1.3-1.3-1.3-1.3-3.2 0-1.75 1.3-3.125t3.2-1.375q1.9 0 3.2 1.3 1.3 1.3 1.3 3.2 0 1.9-1.3 3.2-1.3 1.3-3.2 1.3Zm-26.2 20.5q-2.1 0-3.45-1.575T8.5 38.95q0-2.1 1.275-3.725T12.5 32.1q1.1-1.1 2.05-2.325.95-1.225 1.8-2.525 1.45-2.2 3.25-4.1 1.8-1.9 4.4-1.9 2.6 0 4.425 1.9 1.825 1.9 3.275 4.15.85 1.3 1.775 2.5.925 1.2 2.025 2.3 1.45 1.5 2.725 3.125Q39.5 36.85 39.5 38.95q0 2.15-1.35 3.725-1.35 1.575-3.45 1.575-2.7 0-5.35-.45-2.65-.45-5.35-.45-2.7 0-5.35.45-2.65.45-5.35.45Z"
              /></svg
            ><span>Pets allowed</span>
          </li>
        </ul>
      </section>
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
import Slider from '~/components/Elements/Slider.vue'
export default {
  name: 'AccommodationPage',
  components: { Slider },
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
  padding: calc(var(--edge-spacing) * 5) 0 calc(var(--margin-spacing) * 8) 0;
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
  height: 8rem;
  position: relative;
  margin: -4rem auto 0 auto;
  background: var(--white);
  border-radius: var(--edge-spacing);
  box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.06);
  z-index: 2;
  padding: 1rem;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    li {
      width: 100%;
      height: 100%;
      text-align: center;
      border-right: 1px solid var(--grey);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:last-child {
        border-right: none;
      }
    }
    span {
      width: 100%;
      display: block;
      margin-top: 5px;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    svg {
      width: 100%;
      max-width: 35px;
      height: 100%;
      max-height: 35px;
      fill: var(--grey);
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
}
.glide__slide {
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
