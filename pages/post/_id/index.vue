<template>
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <Post
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
import Post from '~/components/Post'
import TagList from '~/components/TagList'

export default {
  layout: 'main',

  async asyncData({ $axios, params, redirect }) {
    $axios.setToken('token '+process.env.token)
    const issue = await $axios.$get(`/issues/${params.id}`)
    const tags = issue.labels.map((label) => {
      return {
        name: label.name,
        url: encodeURI(`/tag/${label.name}`)
      }
    })
    return {
      issue,
      post: {
        title: issue.title,
        tags: tags,
        content: issue.body
      },
      tags
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    Post,
    TagList
  }
}
</script>
