<template>
  <div>
    <Post
      :post="post"
    />
  </div>
</template>

<script>
import Post from '~/components/Post'

export default {
  async asyncData({ $axios, params, redirect }) {
    $axios.setToken('token '+process.env.token)
    const issue = await $axios.$get(`/issues/${params.id}`)
    return {
      issue,
      post: {
        title: issue.title,
        tags: issue.labels,
        content: issue.body
      }
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    Post
  }
}
</script>
