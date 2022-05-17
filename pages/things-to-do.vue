<template>
  <main>
    <article class="intro">
      <h1>{{ data.title }}</h1>
      <SanityContent :blocks="data.intro" />
    </article>
    <section class="card-grid">
      <div class="filter-strap">
        <label for="filter">Filter Type:</label>
        <div class="filter-container">
          <select id="filter" v-model="selectedTag" name="filter">
            <option value="all">All</option>
            <option
              v-for="tag in filteredTags"
              :key="tag._id"
              :value="tag.name"
            >
              {{ tag.name }}
            </option>
          </select>
        </div>
      </div>
      <article v-for="card in filteredAttractions" :key="card._id" class="card">
        <section class="feature-image">
          <img
            :src="$imgUrl(card.image).width(500).url()"
            :alt="`${card.name} imagery`"
          />
        </section>
        <section class="info">
          <h2>{{ card.name }}</h2>
          <h3>{{ card.location }}</h3>
          <div class="tags">
            <span v-for="tag in card.attractionType" :key="tag._id">{{
              tag.name
            }}</span>
          </div>
          <p>{{ card.description }}</p>
          <div v-if="card.website" class="website">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M22.5 34H14q-4.25 0-7.125-2.875T4 24q0-4.25 2.875-7.125T14 14h8.5v3H14q-3 0-5 2t-2 5q0 3 2 5t5 2h8.5Zm-6.25-8.5v-3h15.5v3ZM25.5 34v-3H34q3 0 5-2t2-5q0-3-2-5t-5-2h-8.5v-3H34q4.25 0 7.125 2.875T44 24q0 4.25-2.875 7.125T34 34Z"
                />
              </svg>
            </span>
            <a :href="card.website" target="_blank" rel="noopener noreferrer">{{
              card.website
            }}</a>
          </div>
        </section>
      </article>
    </section>
  </main>
</template>

<script>
const query = `*[_type == 'things-to-do'] {
    _id,
    intro,
    title,
    "attractionType": *[_type == 'attractionType'],
    "attraction": *[_type == 'attraction'] {
      _id,
      _rev,
      "attractionType":attractionType[]->,
      description,
      image,
      location,
      name,
      slug,
      "website": coalesce(website, false)
    }
  }`

export default {
  async asyncData({ $sanity }) {
    const req = await $sanity.fetch(query)
    return { data: req[0] }
  },
  data() {
    return {
      items: 16,
      tags: [
        'food',
        'drinks',
        'shopping',
        'sightseeing',
        'nightlife',
        'culture',
        'nature',
        'outdoors',
        'adventure',
        'art',
        'music',
        'sports',
        'wellbeing',
        'beach',
        'walking',
        'park',
      ],
      selectedTag: 'all',
    }
  },
  computed: {
    attractions() {
      return this.data.attraction.map((attract) => {
        const tags = attract.attractionType
          .map((tag) => tag.name)
          .concat()
          .flat()

        return {
          ...attract,
          tags,
        }
      })
    },
    filteredAttractions() {
      if (this.selectedTag === 'all') {
        return this.attractions
      } else {
        return this.attractions.filter((attraction) => {
          return attraction.tags.includes(this.selectedTag)
        })
      }
    },
    filteredTags() {
      const tagsAll = this.attractions
        .map((attract) => attract.tags)
        .concat()
        .flat()

      return this.data.attractionType.filter((tag) => {
        return tagsAll.includes(tag.name)
      })
    },
  },
  mounted() {
    // console.log(this.attractions)
  },
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  padding: calc(var(--edge-spacing) * 5) 0 calc(var(--margin-spacing) * 8) 0;
}
.intro {
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
    &:nth-child(1) {
      font-size: var(--h4-sizing);
      line-height: calc(var(--h4-sizing) * 1.1);
    }
  }
}
.card-grid {
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
    margin-bottom: 20px;
    .filter-container {
      width: 200px;
      height: 50px;
      background: var(--white);
      border-radius: var(--edge-spacing);
      position: relative;
    }
    select {
      width: 100%;
      height: 100%;
      position: absolute;
      border: 1px solid var(--color-primary);
      padding: calc(var(--edge-spacing) / 2);
      border-radius: var(--edge-spacing);
      font-size: var(--p-sizing);
      -webkit-appearance: none;
      background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
        no-repeat 95% 50%;
    }
    label {
      color: var(--grey);
      margin-right: var(--edge-spacing);
      font-size: var(--h4-sizing);
    }
  }
  .card {
    background: var(--white);
    grid-column: span 1;
    box-shadow: 0px 4px 12px 4px rgba(0, 0, 0, 0.06);
    border-radius: calc(var(--edge-spacing) * 2);
    overflow: hidden;
    .feature-image {
      width: 100%;
      height: 0;
      position: relative;
      overflow: hidden;
      padding-bottom: 56.25%;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
      }
    }
    .info {
      padding: var(--edge-spacing);
      display: flex;
      flex-direction: column;
      gap: calc(var(--edge-spacing) / 2);
      h2 {
        font-size: var(--h2-sizing);
      }
      h3 {
        font-size: var(--h5-sizing);
        color: var(--grey);
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: calc(var(--edge-spacing) / 2);
        span {
          padding: calc(var(--edge-spacing) / 3) calc(var(--edge-spacing) / 2);
          border-radius: var(--edge-spacing);
          display: block;
          // background: var(--color-primary);
          border: 1px solid var(--color-primary);
          color: var(--white);
          color: var(--color-primary);
          font-size: var(--sm-sizing);
          line-height: var(--sm-sizing);
        }
      }
      .website {
        display: block;
        display: flex;
        align-items: center;
        gap: calc(var(--edge-spacing) / 3);
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          // background: indigo;
          svg {
            width: 100%;
            height: 100%;
            fill: var(--color-primary);
          }
        }
        a {
          font-size: var(--sm-sizing);
          color: var(--color-primary);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
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
      // flex-direction: column;
      // align-items: flex-end;
    }
  }
}
</style>
