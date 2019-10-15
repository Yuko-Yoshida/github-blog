import axios from 'axios'

export const state = () => ({
	tags: null,
  profile: null
})

export const mutations = {
	SET_TAGS: function(state, tags) {
		state.tags = tags
	},
  SET_PROFILE: function(state, profile) {
    state.profile = profile
  },
}

export const actions = {
  init: async function({ commit }) {
    const $axios = axios.create({
      baseURL: process.env.repoUrl,
      headers: {'Authorization': 'token '+process.env.token}
    })

    const issues = await $axios.get(`/issues`)
    const owner = issues.data[0].user
    const profile = await $axios.get(owner.url)
    commit('SET_PROFILE', profile.data)

    const labels = await $axios.get(`/labels`)
    const tags = labels.data.map((label) => {
      return { name: label.name, url: encodeURI(`/tag/${label.name}`) }
    })
    commit('SET_TAGS', tags)
  }
}
