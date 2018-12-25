<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false" v-for="post in posts" :key="post.id">
            <p @click="goArticle(post.id)" slot="title">{{post.title}}</p>
            <p>{{post.body}}</p>
        </Card>
        <br/>
        <router-view></router-view>
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
    goArticle(postId) {
        this.$router.push({ name: 'Article', params: { postId }})
    }
    },
  computed: {
    ...mapGetters([
      'posts' 
    ])
  }
}
</script>
<style>
.ivu-card {
    margin-bottom: 10px;
}
</style>
