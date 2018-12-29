<template>
  <div style="background:#eee;padding: 20px">
    <Row style="text-align:center; padding: 10px">
      <Col :xs="24" :sm="{span:16, offset:8}" :md="{span:12, offset:12}" :lg="{span:8, offset:16}">
        <Card style="width: 100%;">
            <Input search v-model="keyWord" @on-keyup="updateKeyword(keyWord)" enter-button v-bind:placeholder="$t('__EnterSometh')" />
            <br/>
            <CheckboxGroup @on-change="updateConditions(filter)" v-model="filter">
              <Checkbox label="email">
                  <Icon type="ios-mail-open" />
                  <span>{{$t('__Mail')}}</span>
              </Checkbox>
              <Checkbox label="username">
                  <Icon type="ios-contact" />
                  <span>{{$t('__UserName')}}</span>
              </Checkbox>
              <Checkbox label="address">
                  <Icon type="ios-map" />
                  <span>{{$t('__Address')}}</span>
              </Checkbox>
              <Checkbox label="phone">
                  <Icon type="ios-call" />
                  <span>{{$t('__Phone')}}</span>
              </Checkbox>
              <Checkbox label="website">
                  <Icon type="logo-chrome" />
                  <span>{{$t('__Website')}}</span>
              </Checkbox>
              <Checkbox label="companyName">
                  <Icon type="ios-bookmarks" />
                  <span>{{$t('__Comapny')}}</span>
              </Checkbox>
              <Checkbox label="catchPhrase">
                  <Icon type="ios-megaphone" />
                  <span>{{$t('__CatchPhrase')}}</span>
              </Checkbox>
              <Checkbox label="bS">
                  <Icon type="ios-medal" />
                  <span>{{$t('__BusinessSolution')}}</span>
              </Checkbox>
          </CheckboxGroup>
        </Card>
      </Col>
    </Row>
    <Row>
        <Col :xs="24" :sm="12" :md="12" :lg="8" v-for="user in getUsersByQuery()" :key="user.id" style="padding: 10px;">
         <Card style="height: 370px;">
            <div style="text-align:center">
                <img src="../assets/user.png" style="width:20%">
                  <h3>{{user.name}}</h3>
                  <div  style="text-align:left">
                    <p><Icon type="ios-mail-open" /> {{$t('__Mail')}}: <a :href="'mailto:' + user.email">{{user.email}}</a></p>
                    <p><Icon type="ios-contact" /> {{$t('__UserName')}}: {{user.username}}</p>
                    <p><Icon type="ios-map" /> {{$t('__Address')}}: ({{user.address.zipcode}}) {{user.address.city + user.address.street + user.address.suite}}</p>
                    <p><Icon type="ios-call" /> {{$t('__Phone')}}: {{user.phone}}</p>
                    <p><Icon type="logo-chrome" /> {{$t('__Website')}}: <a :href="user.website">{{user.website}}</a></p>
                    <p><Icon type="ios-bookmarks" /> {{$t('__Comapny')}}: {{user.company.name}}</p>
                    <p><Icon type="ios-megaphone" /> {{$t('__CatchPhrase')}}: {{user.company.catchPhrase}}</p>
                    <p><Icon type="ios-medal" /> {{$t('__BusinessSolution')}}: {{user.company.bs}}</p>
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
