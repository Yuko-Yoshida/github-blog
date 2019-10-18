<template>
  <div class="container">
    <Post
      :post="post"
    />
    <div class="container">
      <section class="section">
        <div class="card">
          <div class="card-content has-text-centered">
            <Strong>
              Comments
            </Strong>
          </div>
        </div>
      </section>
    </div>
    <CommentCard
      v-for="comment in comments"
      :comment="comment"
    />
    <div class="container">
      <section class="section">
        <a :href="issue.html_url">
        <div class="card">
          <div class="card-content has-text-centered has-text-primary">
            <Strong>
              Leave Comments!
            </Strong>
          </div>
        </div>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
import Post from '~/components/Post'
import CommentCard from '~/components/CommentCard'


export default {
  layout: 'post',

  async fetch ({ store, params }) {
    await store.dispatch('main/init');
  },

  async asyncData({ $axios, params, redirect }) {
    const issue = await $axios.$get(`/issues/${params.id}`)
    const postTags = issue.labels.map((label) => {
      return {
        name: label.name,
        url: encodeURI(`/tag/${label.name}`),
        color: label.color
      }
    })
    const comments = await $axios.$get(`/issues/${params.id}/comments`)
    return {
      issue,
      post: {
        title: issue.title,
        tags: postTags,
        content: issue.body,
        createdAt: issue.created_at,
        updatedAt: issue.updated_at,
      },
      comments,
    }
  },

  data() {
    return {
      page: this.$route.query.page
    }
  },

  head() {
    return {
      meta: [
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.content.slice(0, 90) },
        { name: 'twitter:image', content: this.$store.state.main.profile.avatar_url },
      ]
    }
  },

  components: {
    Post,
    CommentCard
  }
}
</script>
