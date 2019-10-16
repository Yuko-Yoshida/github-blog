<template>
  <div class="container">
    <section class="section">
      <div class="card">
        <div class="card-content">
          <article class="media">
            <figure class="image is-64x64 media-left">
              <a :href="comment.user.html_url">
                <img class="is-rounded" :src="comment.user.avatar_url">
              </a>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ comment.user.login }}</strong>
                  <div id="comment-body" v-html="$md.render(comment.body)"></div>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
}
</script>
