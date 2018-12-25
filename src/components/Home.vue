<template>
  <div style="background:#eee;padding: 20px">
    <Row>
        <Col span="6" v-for="post in myFavo" :key="post.id" style="padding: 10px;">
          <Card :bordered="false" style="height: 270px;">
            <p @click="goArticle(post.id)" slot="title">{{post.title}}</p>
            <p>{{post.body}}</p>
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
