<template>
  <div class="container">
    <section class="section">
      <div class="card article">
        <header class="card-header">
          <p class="card-header-title has-text-grey" id="title">
            Tags
          </p>
        </header>
        <div class="card-content">
          <div class="media">
            <div class="media-content has-text-centered">
              <b-taglist>
                <b-tag
                  v-for="(tag, index) in tags"
                  type="is-info"
                  :id="`tag-${index+1}`"
                >
                  <a :href="tag.url">{{ tag.name }}</a>
                </b-tag>
              </b-taglist>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
  },
}
</script>
