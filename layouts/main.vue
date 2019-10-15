<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-start">
          <h1 class="navbar-item title">
            <a href="/">Hoge</a>
          </h1>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="columns">
        <div class="column is-two-thirds">
          <nuxt/>
        </div>
        <div class="column">
          <ProfileCard />
          <RecentPosts />
          <TagList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagList from '~/components/TagList'
import ProfileCard from '~/components/ProfileCard'
import RecentPosts from '~/components/RecentPosts'

export default {
  components: {
    TagList,
    ProfileCard,
    RecentPosts
  }
}
</script>
