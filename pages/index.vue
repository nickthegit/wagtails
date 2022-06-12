<template>
  <main>
    <SanityContent :blocks="data.heading" />
    <elements-image-grid-layout>
      <img
        v-for="asset in data.backgroundImageGallery"
        :key="asset._key"
        :src="$imgUrl(asset).width(500).url()"
        alt="generic image of wagtails"
        loading="lazy"
      />
    </elements-image-grid-layout>
  </main>
</template>

<script>
// const query = `{
//   "settings" : *[_type == "settings"],
//   "contact" : *[_type == 'contact'],
// }`
const query = `*[_type == "home"]`
export default {
  name: 'IndexPage',
  async asyncData({ $sanity }) {
    const req = await $sanity.fetch(query)
    return { data: req[0] }
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  position: fixed;
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
