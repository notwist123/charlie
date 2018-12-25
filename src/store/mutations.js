export default {
    addToFavo(state, postId) {
        console.log(postId)
        state.myFavo = state.myFavo.concat(state.posts.filter(x => x.id == postId))
    }
  }