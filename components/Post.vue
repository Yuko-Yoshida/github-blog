<template>
  <div class="container">
    <section class="section">
      <div class="card article">
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <p class="title article-title">{{ post.title }}</p>
              <b-taglist class="level-item">
                <div v-for="(tag, index) in post.tags">
                  <nuxt-link :to="tag.url">
                    <b-tag
                      class="b-tag"
                      type="is-info"
                      :id="`tag-${index+1}`"
                      :style="{ backgroundColor: `#${tag.color}` }"
                    >
                      <p>{{ tag.name }}</p>
                    </b-tag>
                  </nuxt-link>
                </div>
              </b-taglist>
              <p class="is-size-6 has-text-grey has-text-centered">
                {{ date }}
              </p>
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

  computed: {
    date: function() {
      if (this.post.createdAt === this.post.updatedAt) {
        const createdDate = new Date(this.post.createdAt)
        return `${createdDate.getFullYear()}/${createdDate.getMonth()+1}/${createdDate.getDate()}`
      }
      else {
        const updatedDate = new Date(this.post.updatedAt)
        return `Updated at: ${updatedDate.getFullYear()}/${updatedDate.getMonth()+1}/${updatedDate.getDate()}`
      }
    }
  }
}
</script>
