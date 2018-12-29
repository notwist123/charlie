<template>
  <div style="background:#eee;padding: 20px">
    <Row style="text-align:center; padding: 10px">
      <Col span="8" offset="16">
        <Card style="width: 100%;">
            <Input search v-model="keyWord" @on-keyup="updateKeyword(keyWord)" enter-button placeholder="Enter something..." />
            <br/>
            <CheckboxGroup @on-change="updateConditions(filter)" v-model="filter">
              <Checkbox label="email">
                  <Icon type="ios-mail-open" />
                  <span>Mail</span>
              </Checkbox>
              <Checkbox label="username">
                  <Icon type="ios-contact" />
                  <span>UserName</span>
              </Checkbox>
              <Checkbox label="address">
                  <Icon type="ios-map" />
                  <span>Address</span>
              </Checkbox>
              <Checkbox label="phone">
                  <Icon type="ios-call" />
                  <span>Phone</span>
              </Checkbox>
              <Checkbox label="website">
                  <Icon type="logo-chrome" />
                  <span>Website</span>
              </Checkbox>
              <Checkbox label="companyName">
                  <Icon type="ios-bookmarks" />
                  <span>Company Name</span>
              </Checkbox>
              <Checkbox label="catchPhrase">
                  <Icon type="ios-megaphone" />
                  <span>CatchPhrase</span>
              </Checkbox>
              <Checkbox label="bS">
                  <Icon type="ios-medal" />
                  <span>Business Solution</span>
              </Checkbox>
          </CheckboxGroup>
        </Card>
      </Col>
    </Row>
    <Row>
        <Col span="8"  v-for="user in getUsersByQuery()" :key="user.id" style="padding: 10px;">
         <Card style="height: 370px;">
            <div style="text-align:center">
                <img src="../assets/user.png" style="width:20%">
                  <h3>{{user.name}}</h3>
                  <div  style="text-align:left">
                    <p><Icon type="ios-mail-open" /> Mail: <a :href="'mailto:' + user.email">{{user.email}}</a></p>
                    <p><Icon type="ios-contact" /> UserName: {{user.username}}</p>
                    <p><Icon type="ios-map" /> Address: ({{user.address.zipcode}}) {{user.address.city + user.address.street + user.address.suite}}</p>
                    <p><Icon type="ios-call" /> Phone: {{user.phone}}</p>
                    <p><Icon type="logo-chrome" /> Website: <a :href="user.website">{{user.website}}</a></p>
                    <p><Icon type="ios-bookmarks" /> Company Name: {{user.company.name}}</p>
                    <p><Icon type="ios-megaphone" /> CatchPhrase: {{user.company.catchPhrase}}</p>
                    <p><Icon type="ios-medal" /> Business Solution: {{user.company.bs}}</p>
                  </div>
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
  data () {
      return {
          filter: [],
          keyWord: ''
      }
  },
  methods: {
    ...mapActions([
    'updateConditions',
    'updateKeyword'
    ]),
    getUsersByQuery() {
      return this.$store.getters.getUsersByQuery()
    },
  },
  computed: {
    ...mapGetters([
      'users',
      'searchConditions'
    ])
  }
}
</script>
