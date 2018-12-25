export default {
    addToFavo({ commit }, postId) {
        commit('addToFavo', postId)
    },
    deleteFromFavo({ commit }, postId) {
        commit('deleteFromFavo',postId)
    }
  }