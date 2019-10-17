<template>
  <div class="container">
    <div class="section">
      <div class="card">
        <div class="card-content">
          <p class="title" id="title">
            {{ tagName }}
          </p>
        </div>
      </div>
    </div>
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

  async asyncData({ $axios, params, query, redirect }) {
    const issues = await $axios.$get(encodeURI(`/issues?page=${query.page}&labels=${params.name}&filter=created`))
    if (issues.length < 1) return redirect(404, '/404')
    const posts = issues.map((issue) => {
      return {
        title: issue.title,
        tags: issue.labels.map((label) => {
          return {
            name: label.name,
            url: encodeURI(`/tag/${label.name}`),
            color: label.color
          }
        }),
        content: issue.body,
        post: {
          url: `/post/${issue.number}`,
          createdAt: issue.created_at,
          updatedAt: issue.updated_at,
        }
      }
    })
    return {
      issues,
      posts,
      tagName: params.name
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
