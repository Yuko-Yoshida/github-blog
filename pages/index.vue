<template>
  <div class="container">
    <PostCard
      v-for='post in posts'
      :post="post"
    />
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  layout: 'main',

  async fetch ({ store, params }) {
    await store.dispatch('main/init');
  },

  async asyncData({ $axios, query, redirect }) {
    $axios.setToken('token '+process.env.token)
    const issues = await $axios.$get(`/issues?page=${query.page}&filter=created`)
    if (issues.length < 1) return redirect(404, '/404')
    const posts = issues.map((issue) => {
      return {
        title: issue.title,
        tags: issue.labels.map((label) => {
          return {
            name: label.name,
            url: encodeURI(`/tag/${label.name}`)
          }
        }),
        content: issue.body,
        post: {
          url: `/post/${issue.number}`
        }
      }
    })
    return {
      issues,
      posts,
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    PostCard,
  }
}
</script>
