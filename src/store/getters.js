export default {
  myFavo: state => state.myFavo,
  count: state => state.count,
  users: state => state.users,
  posts: state => state.posts,
  showAddBtn: (state) => (postId) => {
    return state.myFavo.every(x => x.id != postId)
  },
  showDelBtn: (state) => (postId) => {
    return state.myFavo.some(x => x.id == postId)
  },
  getUserById: (state) => (userId) => {
    return state.users.filter(x => x.id == userId)
  },
  getPostsById: (state) => (userId) => {
    if (userId) {
      return state.posts.filter(x => x.userId == userId)
    }
    return state.posts
  }
}