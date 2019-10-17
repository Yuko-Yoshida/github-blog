<template>
  <nav class="navbar has-background-grey-lighter">
    <div class="container">
      <div class="navbar-start">
        <nuxt-link to="/">
          <h1 class="navbar-item title">
            {{ $store.state.main.blogName }}
          </h1>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>
  .navbar {
    padding: 10px;
  }
</style>
