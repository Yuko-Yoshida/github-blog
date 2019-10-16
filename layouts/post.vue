<template>
  <div id="base" class="has-background-white-ter">
    <Navbar />
    <div class="container" id="main">
      <div class="columns is-1">
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
import Navbar from '~/components/Navbar'
import TagList from '~/components/TagList'
import ProfileCard from '~/components/ProfileCard'
import RecentPosts from '~/components/RecentPosts'

export default {
  components: {
    Navbar,
    TagList,
    ProfileCard,
    RecentPosts,
  }
}
</script>

<style>
  #main {
    width: 80vw;
    padding-top: 50px;
  }

  .section {
    padding: 5px;
  }
</style>
