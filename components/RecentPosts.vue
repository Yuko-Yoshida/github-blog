<template>
  <div class="container">
    <section class="section">
      <div class="card article">
        <header class="card-header">
          <p class="card-header-title" id="title">
            Recent Posts
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li v-for="post in $store.state.main.posts">
                <nuxt-link :to="post.url">{{ post.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
