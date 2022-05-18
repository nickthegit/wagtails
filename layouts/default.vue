<template>
  <div>
    <elements-header :booking-url="data[0].bookingUrl" />
    <Nuxt keep-alive />
    <elements-navigation />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // async asyncData({ $sanity }) {
  //   const req = await $sanity.fetch(`*[_type == "settings"]`)
  //   return { data: req[0] }
  // },
  data() {
    return {
      data: {},
    }
  },
  async fetch() {
    this.data = await this.$sanity.fetch(`*[_type == "settings"]`)
  },
  head() {
    return {
      title: this.data[0].title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data[0].description,
        },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: this.data[0].title },
        {
          hid: 'og-desc',
          property: 'og:description',
          content: this.data[0].description,
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.$imgUrl(this.data[0].image).width(1200).url(),
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://wagtailslet.co.uk',
        },
        {
          hid: 'og-site-name',
          property: 'og:site_name',
          content: this.data[0].title,
        },
        { hid: 'og-locale', property: 'og:locale', content: 'en_US' },
        { hid: 'og-locale', property: 'og:locale', content: 'en_US' },
        { hid: 'twitter-card', name: 'twitter:card', content: 'summary' },
        {
          hid: 'twitter-title',
          name: 'twitter:title',
          content: this.data[0].title,
        },
        {
          hid: 'twitter-description',
          name: 'twitter:description',
          content: this.data[0].description,
        },
        {
          hid: 'twitter-image',
          name: 'twitter:image',
          content: this.$imgUrl(this.data[0].image).width(1200).url(),
        },
        {
          hid: 'twitter-url',
          name: 'twitter:url',
          content: 'https://wagtailslet.co.uk',
        },
        { hid: 'twitter-locale', name: 'twitter:locale', content: 'en_GB' },
        { hid: 'twitter-locale', name: 'twitter:locale', content: 'en_GB' },
      ],
    }
  },
  mounted() {
    console.log('mounted', this.data[0])
  },
}
</script>

<style lang="scss" scoped></style>
