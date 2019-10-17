<template>
  <div class="container" id="pagination">
    <b-pagination
      :total="$store.state.main.totalPosts"
      :current="current"
      order="is-centered"
      range-before="1"
      range-after="1"
      :rounded="true"
      per-page="20"
      aria-page-label="Page"
      aria-current-label="Current page">

      <b-pagination-button
          slot-scope="props"
          :page="props.page"
          :id="`page${props.page.number}`"
          tag="nuxt-link"
          :to="{ path: `${base}`, query: { page: `${props.page.number}` } }">
      </b-pagination-button>

      <div v-if="current > 1">
        <b-pagination-button
            slot="previous"
            slot-scope="props"
            :page="props.page"
            tag="nuxt-link"
            :to="{ path: `${base}`, query: { page: `${props.page.number}` } }">
            Previous
        </b-pagination-button>
      </div>

      <div v-if="$store.state.main.totalPosts / 20 > 1 && $store.state.main.totalPosts > current">
        <b-pagination-button
            slot="next"
            slot-scope="props"
            :page="props.page"
            tag="nuxt-link"
            :to="{ path: `${base}`, query: { page: `${props.page.number}` } }">
            Next
        </b-pagination-button>
      </div>
    </b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: this.$route.query.page,
      base: this.$route.path
    }
  },

  computed: {
    current: function() {
      return (this.page == true) ? this.page : 1
    }
  }
}
</script>
<style>
#pagination {
  padding: 2rem;
}
</style>
