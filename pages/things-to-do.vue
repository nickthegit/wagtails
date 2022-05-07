<template>
  <main>
    <article>
      <h1>Things To Do</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto
        possimus perspiciatis animi totam. Ullam officia, numquam, expedita
        cupiditate voluptatibus dolores esse quidem architecto sed nulla magni
        laudantium facere! Earum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        libero aut aspernatur nemo necessitatibus voluptatibus deserunt
        provident eos esse quis impedit beatae quos, ipsum, eveniet quibusdam ad
        officia perferendis obcaecati.
      </p>
    </article>
    <section>
      <div class="filter-strap">
        <h4>Filter:</h4>
        <div class="filter-container"></div>
      </div>
      <article v-for="card in items" :key="card" class="card"></article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      items: 16,
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: calc(var(--edge-spacing) * 3) 0 calc(var(--margin-spacing) * 8) 0;
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
section {
  width: 100%;
  max-width: var(--big-container);
  position: relative;
  margin: 0 auto;
  display: grid;
  grid-template: auto auto / 1fr 1fr 1fr;
  gap: var(--edge-spacing);
  padding: var(--edge-spacing);
  .filter-strap {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .filter-container {
      width: 300px;
      height: 80px;
      background: var(--white);
      border-radius: var(--edge-spacing);
      margin-bottom: 20px;
    }
    h4 {
      color: var(--grey);
      margin-right: var(--edge-spacing);
      font-size: var(--h4-sizing);
    }
  }
  .card {
    // width: 100%;
    height: 600px;
    background: var(--white);
    grid-column: span 1;
    box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.06);
    border-radius: calc(var(--edge-spacing) * 2);
  }
  @media screen and (max-width: 1024px) {
    grid-template: auto auto / 1fr 1fr;
    .filter-strap {
      grid-column: 1 / 3;
    }
  }
  @media screen and (max-width: 768px) {
    grid-template: auto auto / 100%;
    .filter-strap {
      grid-column: 1 / 2;
    }
    .filter-strap {
      flex-direction: column;
      align-items: flex-end;
    }
  }
}
</style>
