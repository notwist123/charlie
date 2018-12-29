export default {
    addToFavo({ commit }, postId) {
        commit('addToFavo', postId)
    },
    deleteFromFavo({ commit }, postId) {
        commit('deleteFromFavo', postId)
    },
    updateConditions({ commit }, data) {
        commit('updateConditions', data)
    },
    updateKeyword({ commit }, typing) {
        commit('updateKeyword', typing)
    }
  }