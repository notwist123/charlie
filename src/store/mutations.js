export default {
    addToFavo(state, postId) {
        state.myFavo = state.myFavo.concat(state.posts.filter(x => x.id == postId))
    },
    deleteFromFavo(state, postId) {
        state.myFavo = state.myFavo.filter(x => x.id != postId)
    }
  }