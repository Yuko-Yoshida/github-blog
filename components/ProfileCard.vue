<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="$store.state.main.profile.avatar_url" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ $store.state.main.profile.name }}</p>
          <p class="subtitle is-6">@{{ $store.state.main.profile.login }}</p>
        </div>
      </div>

      <div class="content">
        {{ $store.state.main.profile.bio }}
      </div>

      <footer class="card-footer">
        <a :href="$store.state.main.profile.html_url" class="card-footer-item">GitHub</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   profile: {
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     login: {
  //       type: String,
  //       required: true
  //     },
  //     bio: {
  //       type: String,
  //       required: true
  //     },
  //     avatar_url: {
  //       type: String,
  //       required: true
  //     },
  //     html_url: {
  //       type: String,
  //       required: true
  //     }
  //   }
  // }
}
</script>
