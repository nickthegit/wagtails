<template>
  <main>
    <h1>
      <span>Beautiful</span> 2 Bedroom, Detached Country Holiday Let in
      <span>Stunning</span> Dorset
    </h1>
    <elements-image-grid-layout />
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
  overflow: hidden;
}
h1 {
  text-align: center;
  width: 100%;
  max-width: 990px;
  position: relative;
  display: block;
  font-size: var(--h1-sizing);
  z-index: 2;
  span {
    color: var(--color-primary);
  }
}
</style>
