export default {
  searchConditions: state => state.searchConditions,
  keyWord: state => state.keyWord,
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
  },
  getUsersByQuery: (state) => () => {
    if (state.searchConditions.length > 0) {
      var tempArray = []
      for (var condictions of state.searchConditions ) {
        switch(condictions) {
          case 'address':
            tempArray = tempArray.concat(
              state.users.filter(
                x => x.address.zipcode.includes(state.keyWord) || 
                x.address.city.includes(state.keyWord) || 
                x.address.street.includes(state.keyWord) || 
                x.address.suite.includes(state.keyWord)).map(m => m.id))
            break;
          case 'companyName':
            tempArray = tempArray.concat(
              state.users.filter(x => x.company.name.includes(state.keyWord)).map(m => m.id))
            break;
          case 'catchPhrase':
            tempArray = tempArray.concat(
              state.users.filter(x => x.company.catchPhrase.includes(state.keyWord)).map(m => m.id))
            break;
          case 'bS':
            tempArray = tempArray.concat(
              state.users.filter(x => x.company.bs.includes(state.keyWord)).map(m => m.id))
            break;
          default:
            tempArray = tempArray.concat(state.users.filter(x => x[condictions].includes(state.keyWord)).map(m => m.id))
        }
      }
      return state.users.filter(x => tempArray.includes(x.id))
    }
    return state.users
  }
}