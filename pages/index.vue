<template>
  <div>
    <div v-for='post in posts'>
      <PostCard
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'

export default {
  async asyncData({ $axios, query, redirect }) {
    $axios.setToken('token '+process.env.token)
    const issues = await $axios.$get(`/issues?page=${query.page}`)
    if (issues.length < 1) return redirect(404, '/404')
    const posts = issues.map((issue) => {
      return {
        title: issue.title,
        tags: issue.labels.map((label) => {
          return {
            name: label.name,
            url: label.id
          }
        }),
        content: issue.body,
        post: {
          url: issue.id
        }
      }
    })
    return {
      issues,
      posts
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    PostCard
  }
}
</script>
