<template>
  <div class="container">
    <Post
      :post="post"
    />
    <CommentCard
      v-for="comment in comments"
      :comment="comment"
    />
    <div class="container">
      <section class="section">
        <div class="card">
          <div class="card-content has-text-centered">
            <Strong>
              <a :href="issue.html_url">Leave Comments!</a>
            </Strong>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Post from '~/components/Post'
import CommentCard from '~/components/CommentCard'


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
    const comments = await $axios.$get(`/issues/${params.id}/comments`)
    return {
      issue,
      post: {
        title: issue.title,
        tags: postTags,
        content: issue.body
      },
      comments
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  components: {
    Post,
    CommentCard
  }
}
</script>
