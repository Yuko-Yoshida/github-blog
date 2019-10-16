<template>
  <section class="section">
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-256x256">
              <svg width="256" height="256" :data-jdenticon-value="post.content"></svg>
            </figure>
          </div>
          <div class="column">
            <b-taglist>
              <b-tag
                v-for="(tag, index) in post.tags"
                type="is-info"
                :id="`tag-${index+1}`"
              >
                <a :href="tag.url">{{ tag.name }}</a>
              </b-tag>
            </b-taglist>

            <p class="title" id="title">
              {{ post.title }}
            </p>

            <div id="displayContent" class="has-text-grey" v-html="contentForDisplay"></div>
            <a id="linkForPost" :href="post.post.url">Read More...</a>
          </div>
        </div>
      </div>
    </div>
  </section>
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
        return (this.post.content.length < 90) ? this.post.content : this.post.content.slice(0, 90)+'...'
      }
    }
  }
</script>
