<template>
  <div style="background:#eee;padding: 20px">
    <Row>
      <Input search enter-button placeholder="Enter something..." />
    </Row>
    <Row>
        <Col span="6"  v-for="user in users" :key="user.id" style="padding: 10px;">
         <Card >
            <div style="text-align:center">
                <img src="../assets/user.png" style="width:20%">
                  <h3>{{user.name}}</h3>
                  <p><Icon type="ios-mail-open" /> Mail: <a :href="'mailto:' + user.email">{{user.email}}</a></p>
                  
            </div>
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
  name: 'Users',
  computed: {
    ...mapGetters([
      'users' 
    ])
  }
}
</script>
