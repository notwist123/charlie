<template>
    <div style="background:#eee;padding: 30px">
      <Row>
          <Col span="16" style="padding: 10px">
            <Card :bordered="false" v-for="post in getPosts(this.$route.query.userid)" :key="post.id">
            <Button @click="addToFavo(post.id)" v-if="$store.getters.showAddBtn(post.id)" type="success" slot="extra">{{$t('__AddToFavo')}}</Button>
            <Button @click="deleteFromFavo(post.id)" v-if="$store.getters.showDelBtn(post.id)" type="error" slot="extra">{{$t('__DelFromFavo')}}</Button>
            <p @click="goArticle(post.id)" slot="title">{{post.title}}</p>
            <p>{{post.body}}</p>
            </Card>
          </Col>
          <Col span="8" style="padding: 10px">
            <Card >
                <div style="text-align:center">
                    <img src="../assets/user.png" style="width:20%">
                    <h3 v-if="showAllText(this.$route.query.userid)">{{$t('__TextForAll')}}</h3>
                    <div v-else v-for="user in getUser(this.$route.query.userid)" :key="user.id">
                      <h3>{{user.name}}</h3>
                      <p>
                        <Icon type="ios-mail-open" /> {{$t('__Mail')}}: <a :href="'mailto:' + user.email">{{user.email}}</a></p>
                    </div>
                </div>
            </Card>
          </Col>
      </Row>
        <br/>
    </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'Posts',
  methods: {
    ...mapActions([
    'addToFavo',
    'deleteFromFavo'
    ]),
    goArticle(postId) {
      this.$router.push({ name: 'article', params: { postId }})
    },
    showAllText(userId) {
      if (userId) return false
      return true
    },
    getPosts(userId) {
      return this.$store.getters.getPostsById(userId)
    },
    getUser(userId) {
      return this.$store.getters.getUserById(userId)
    }
  }
}
</script>
<style>
.ivu-card {
    margin-bottom: 10px;
}
</style>
