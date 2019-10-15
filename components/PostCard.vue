<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey" id="title">
        {{ post.title }}
      </p>
    </header>
    <div class="card-content">
      <div id="displayContent" v-html="$md.render(contentForDisplay)"></div>
      <a id="linkForPost" :href="post.post.url">Read More...</a>
    </div>
    <footer class="card-footer">
      <b-taglist>
        <b-tag
          v-for="(tag, index) in post.tags"
          type="is-info"
          :id="`tag-${index+1}`"
        >
          <a :href="tag.url">{{ tag.name }}</a>
        </b-tag>
      </b-taglist>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      title: {
        type: String,
        required: true
      },
      tags: {
        type: Array,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      post: {
        type: Object,
        required: true
      }
    }
  },
  computed: {
    contentForDisplay: function() {
      return (this.post.content.length < 40) ? this.post.content : this.post.content.slice(0, 40)+'...'
    }
  }
}
</script>
