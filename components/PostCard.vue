<template>
  <div class="section">
    <div class="card" id="postCard">
      <div class="card-content">
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-256x256">
              <svg width="100%" height="100%" :data-jdenticon-value="contentForDisplay"></svg>
            </figure>
          </div>

          <div class="column" id="content">
            <b-taglist>
              <div v-for="(tag, index) in post.tags">
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

            <p class="title" id="title">
              {{ post.title }}
            </p>

            <div id="displayContent" class="has-text-grey is-size-5" v-html="contentForDisplay"></div>

            <a :href="post.post.url"　id="toPost">
              <p class="has-text-right">Read More...</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
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
        return (this.post.content.length < 90) ? this.post.content : this.post.content.slice(0, 90)+'...'
      }
    }
  }
</script>

<style>
  #postCard {
    transition: box-shadow 0.3s;
  }
  #postCard:hover {
    box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
  }
  #content {
    position: relative;
  }
  #toPost {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
