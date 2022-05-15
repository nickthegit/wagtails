<template>
  <main>
    <article>
      <section id="contact">
        <h1>Contact</h1>
        <address>
          <p>
            Wagtails, <br />
            {{ address.street }}, <br />
            {{ address.city }}, <br />
            {{ address.state }}<br />
            {{ address.zip }}
          </p>
          <a :href="`mailto:${email}`">{{ email }}</a>
          <a :href="`tel:${phone}`">{{ phone }}</a>
        </address>
        <section>
          <h2>Directions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo a
            tempore sunt fugit nisi sequi, nihil ab, quam aperiam et culpa
            inventore impedit quis corrupti sed fuga provident nostrum
            similique.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            labore, consectetur repellendus deleniti fugit nisi unde doloremque
            repellat maiores sint obcaecati maxime? Ex assumenda deserunt,
            minima aliquid labore illo itaque?
          </p>
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
export default {
  name: 'ContactPage',
  data() {
    return {
      address: {
        street: 'Penmore Rd',
        city: 'Sherborne',
        state: 'Dorset',
        zip: 'DT9 4SE',
      },
      email: 'barb@wagtails.com',
      phone: '07867654665',
      map: {
        lat: 51.454545,
        lng: -2.585278,
      },
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
