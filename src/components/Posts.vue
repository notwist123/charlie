<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false" v-for="post in posts" :key="post.id">
            <Button @click="addToFavo(post.id)" v-if="$store.getters.showAddBtn(post.id)" type="success" slot="extra">Add to favorites</Button>
            <Button @click="deleteFromFavo(post.id)" v-if="$store.getters.showDelBtn(post.id)" type="error" slot="extra">Delete from favorites</Button>
            <p @click="goArticle(post.id)" slot="title">{{post.title}}</p>
            <p>{{post.body}}</p>
        </Card>
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
        this.$router.push({ name: 'Article', params: { postId }})
    }
  },
  computed: {
    ...mapGetters([
      'posts',
      'myFavo'
    ])
  }
}
</script>
<style>
.ivu-card {
    margin-bottom: 10px;
}
</style>
