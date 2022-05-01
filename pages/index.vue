<template>
  <main>
    <h1>
      <span>Beautiful</span> 2 Bedroom, Detached Country Holiday Let in
      <span>Stunning</span> Dorset
    </h1>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100vh;
  position: relative;
  padding: var(--edge-spacing);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
h1 {
  width: 100%;
  max-width: 990px;
  display: block;
  font-size: var(--h1-sizing);
  span {
    color: var(--color-primary);
  }
}
</style>
