<template>
  <div class="container">
    <section class="section">
      <div class="card article">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <p class="title article-title">{{ post.title }}</p>
              <b-taglist class="level-item">
                <div v-for="(tag, index) in $store.state.main.tags">
                  <a :href="tag.url">
                    <b-tag
                      class="b-tag"
                      type="is-info"
                      :id="`tag-${index+1}`"
                      :style="{ backgroundColor: `#${tag.color}` }"
                    >
                      <p>{{ tag.name }}</p>
                    </b-tag>
                  </a>
                </div>
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
