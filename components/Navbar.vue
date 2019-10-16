<template>
  <nav class="navbar has-background-grey-lighter">
    <div class="container">
      <div class="navbar-start">
        <a href="/">
          <h1 class="navbar-item title">
            {{ $store.state.main.blogName }}
          </h1>
        </a>
      </div>
    </div>
  </nav>
</template>

<style>
  .navbar {
    padding: 10px;
  }
</style>
