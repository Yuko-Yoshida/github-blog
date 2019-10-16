import axios from 'axios'

export const state = () => ({
	tags: null,
  profile: null,
	posts: null
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
}

export const actions = {
  init: async function({ commit }) {
    const $axios = axios.create({
      baseURL: process.env.repoUrl,
      headers: {'Authorization': 'token '+process.env.token}
    })

    const issues = await $axios.get(`/issues?filter=created`)
    const owner = issues.data[0].user
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

		const recentIssues = issues.data.slice(0, 5)
		const recentPosts = recentIssues.map((issue) => {
			return { title: issue.title, url: encodeURI(`/post/${issue.number}`) }
		})
		commit('SET_POSTS', recentPosts)
  }
}
