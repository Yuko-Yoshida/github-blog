import axios from 'axios'
import config from '~/nuxt.config.js'

export const state = () => ({
	tags: null,
  profile: null,
	posts: null,
	blogName: null,
	totalPosts: null
})

export const mutations = {
	SET_TAGS: function(state, tags) {
		state.tags = tags
	},
  SET_PROFILE: function(state, profile) {
    state.profile = profile
  },
	SET_POSTS: function(state, posts) {
		state.posts = posts
	},
	SET_BLOGNAME: function(state, blogName) {
		state.blogName = blogName
	},
	SET_TOTALPOSTS: function(state, totalPosts) {
		state.totalPosts = totalPosts
	},
}

export const actions = {
  init: async function({ commit }) {
    const $axios = axios.create({
      baseURL: process.env.repoUrl,
      headers: {'Authorization': 'token '+process.env.token}
    })

    const repo = await $axios.get()
    const owner = repo.data.owner
    const profile = await $axios.get(owner.url)
    commit('SET_PROFILE', profile.data)

    const labels = await $axios.get(`/labels`)
    const tags = labels.data.map((label) => {
      return {
				name: label.name,
				url: encodeURI(`/tag/${label.name}`),
				color: label.color
			}
    })
    commit('SET_TAGS', tags)

		const issues = await $axios.get(`/issues?filter=created&state=open`)
		const recentIssues = issues.data.slice(0, 5)
		const recentPosts = recentIssues.map((issue) => {
			return { title: issue.title, url: encodeURI(`/post/${issue.number}`) }
		})
		commit('SET_POSTS', recentPosts)

    commit('SET_BLOGNAME', config.head.title)

		if (issues.data.length > 0) commit('SET_TOTALPOSTS', issues.data[0].number)
		else commit('SET_TOTALPOSTS', 0)
  }
}
