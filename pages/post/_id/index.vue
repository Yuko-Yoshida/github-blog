<template>
  <div class="container">
    <Post
      :post="post"
    />
  </div>
</template>

<script>
import Post from '~/components/Post'


export default {
  layout: 'main',

  async fetch ({ store, params }) {
    await store.dispatch('main/init');
  },

  async asyncData({ $axios, params, redirect }) {
    $axios.setToken('token '+process.env.token)
    const issue = await $axios.$get(`/issues/${params.id}`)
    const postTags = issue.labels.map((label) => {
      return {
        name: label.name,
        url: encodeURI(`/tag/${label.name}`)
      }
    })
    return {
      issue,
      post: {
        title: issue.title,
        tags: postTags,
        content: issue.body
      },
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    Post,
  }
}
</script>
