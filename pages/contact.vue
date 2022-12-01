<template>
  <main>
    <article>
      <section id="contact">
        <h1>Contact</h1>
        <address>
          <SanityContent :blocks="data.address" />
          <a :href="`mailto:${data.email}`">{{ data.email }}</a>
          <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
        </address>
        <section>
          <h2>Directions</h2>
          <SanityContent :blocks="data.directions" />
        </section>
      </section>
      <aside keep-alive>
        <iframe
          src="https://snazzymaps.com/embed/394089"
          width="100%"
          height="600px"
          style="border: none"
        ></iframe>
      </aside>
    </article>
  </main>
</template>

<script>
const query = `*[_type == 'contact']`
export default {
  name: 'ContactPage',
  async asyncData({ $sanity }) {
    const req = await $sanity.fetch(query)
    return { data: req[0] }
  },
  data() {},
  mounted() {
    // console.log(this.data)
  },
  head() {
    return {
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCMUBQALWGVEAYpBS3ESgWn78abnkKE9C8&callback=initMap"',
          type: 'text/javascript',
          async: true,
          defer: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: calc(var(--edge-spacing) * 5) 0 calc(var(--margin-spacing) * 8) 0;
}
article {
  width: 100%;
  max-width: var(--big-container);
  padding: var(--edge-spacing);
  margin: 0 auto;
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  gap: var(--edge-spacing);
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
    margin-top: calc(var(--margin-spacing));
  }
}
#contact {
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  address {
    background: var(--white);
    padding: var(--edge-spacing);
    border-radius: var(--edge-spacing);
    a {
      color: var(--color-primary);
      text-decoration: none;
      font-size: var(--p-sizing);
      display: block;
    }
    p {
      margin-bottom: 0;
    }
  }
  section {
    padding: var(--edge-spacing) 0;
  }
}
aside {
  width: 100%;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  height: 600px;
}
@media screen and (max-width: 1024px) {
  article {
    grid-template: auto / 100%;
  }
  aside {
    // width: 100%;
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }
}
</style>
