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
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.b-tag {
  margin: 5px;
}
</style>
