<template>
  <main>
    <article>
      <section id="contact">
        <h1>Contact</h1>
        <address>
          <p>adress here</p>
          <a href="mailto:">email@barb.com</a>
          <a href="tel:+44 07867546">073543510658</a>
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
      <aside>map</aside>
    </article>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: calc(var(--edge-spacing) * 3) 0 calc(var(--margin-spacing) * 8) 0;
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
    margin-top: calc(var(--margin-spacing) * 2);
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
  border: solid 2px pink;
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
