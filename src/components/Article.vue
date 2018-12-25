<template>
  <div>
    <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
            {{posts.filter(x => x.id == this.$route.params.postId)[0].title}}
        </Breadcrumb>
        <router-view></router-view>
        <Card>
            <div style="min-height: 200px;">
                {{posts.filter(x => x.id == this.$route.params.postId)[0].body}}
            </div>
        </Card>
    </Content>
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
