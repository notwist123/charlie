<template>
  <div style="background:#eee;padding: 20px">
    <Row>
        <Col :xs="24" :sm="12" :md="8" :lg="6" v-for="post in myFavo" :key="post.id" style="padding: 10px;">
          <Card :bordered="false" style="height: 270px;">
            <p @click="goArticle(post.id)" slot="title" style="cursor:pointer">{{post.title}}</p>
            <p @click="goArticle(post.id)" style="cursor:pointer">{{post.body}}</p>
          </Card>
        </Col>
    </Row>
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
        this.$router.push({ name: 'article', params: { postId }})
    }
  },
  computed: {
    ...mapGetters([
      'myFavo' 
    ])
  }
}
</script>
