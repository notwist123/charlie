<template>
  <div style="background:#eee;padding: 20px">
        <Card :bordered="false" v-for="post in myFavo" :key="post.id">
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
  name: 'Home',
  methods: {
    goArticle(postId) {
        this.$router.push({ name: 'Article', params: { postId }})
    }
  },
  computed: {
    ...mapGetters([
      'myFavo' 
    ])
  }
}
</script>
