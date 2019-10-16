<template>
  <section class="section">
    <div class="card article" id="profile">
      <a :href="$store.state.main.profile.html_url">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                <img class="is-rounded" :src="$store.state.main.profile.avatar_url" alt="Avatar image">
              </figure>
            </div>
            <div class="media-content" id="name">
              <p class="title is-4">{{ $store.state.main.profile.name }}</p>
              <p class="subtitle is-6">@{{ $store.state.main.profile.login }}</p>
            </div>
          </div>

          <div class="content">
            <p class="has-text-black is-5">{{ $store.state.main.profile.bio }}</p>
          </div>
        </div>

        <footer class="card-footer">
          <figure class="image">
            <img id="grass" :src="`https://grass-graph.moshimo.works/images/${$store.state.main.profile.login}.png`">
          </figure>
        </footer>
      </a>
    </div>
  </section>
</template>

<style>
#profile {
  transition: box-shadow 0.3s;
}
#profile:hover {
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.5);
}
#name {
  margin: auto;
}
</style>
