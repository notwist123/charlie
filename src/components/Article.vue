<template>
  <div style="background:#eee;padding: 30px">
    <Card :bordered="false">
      <p slot="title">{{posts.filter(x => x.id == this.$route.params.postId)[0].title}}</p>
      <p>{{posts.filter(x => x.id == this.$route.params.postId)[0].body}}</p>
    </Card>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  name: 'Article',
  computed: {
    ...mapGetters([
      'posts' 
    ])
  }
}
</script>
