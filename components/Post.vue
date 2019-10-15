<template>
  <div class="container">
    <section class="section">
      <div class="card article">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <p class="title article-title">{{ post.title }}</p>
              <b-taglist class="level-item">
                <b-tag
                  v-for="(tag, index) in post.tags"
                  type="is-info"
                  :id="`tag-${index+1}`"
                >
                  <a :href="tag.url">{{ tag.name }}</a>
                </b-tag>
              </b-taglist>
            </div>
          </div>
          <div class="content article-body" v-html="$md.render(post.content)"></div>
        </div>
      </div>
    </section>
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
      }
    }
  },
}
</script>
