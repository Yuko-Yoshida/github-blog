<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <PostCard
          v-for='post in posts'
          :post="post"
        />
      </div>
      <div class="column">
        <TagList
          :tags="tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard'
import TagList from '~/components/TagList'

export default {
  layout: 'main',

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
            url: `/tag/${label.name}`
          }
        }),
        content: issue.body,
        post: {
          url: `/post/${issue.number}`
        }
      }
    })
    const labels = await $axios.$get(`/labels`)
    const tags = labels.map((label) => {
      return { name: label.name, url: `/tag/${label.name}` }
    })
    return {
      issues,
      posts,
      tags
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    PostCard,
    TagList
  }
}
</script>
