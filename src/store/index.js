import { createStore } from 'vuex'

export default createStore({
  state: {
    leagueTable: []
  },

  mutations: {
    setLeagueTable(state, league) {
      state.leagueTable = league
    }
  },

  actions: {
    setLeagueTable({ commit }, league) {
        commit('setLeagueTable', league)
    }

  },

  modules: {
  }
})
