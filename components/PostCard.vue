<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey" id="title">
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <p id="displayContent">{{ contentForDisplay }}</p>
      <a id="linkForPost" :href="post.url">Read More...</a>
    </div>
    <footer class="card-footer">
      <b-taglist>
        <b-tag
          v-for="(tag, index) in tags"
          type="is-info"
          :href="tag.url"
          :id="`tag-${index+1}`"
        >
        {{ tag.name }}
        </b-tag>
      </b-taglist>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    contentForDisplay: function() {
      return (this.content.length < 40) ? this.content : this.content.slice(0, 40)+'...'
    }
  }
}
</script>
