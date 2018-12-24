<template>
  <div>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <Menu-Item name="1">
            <Icon type="ios-home" />
            Home
        </Menu-Item>
        <Menu-Item name="2">
            <Icon type="ios-people" />
            User
        </Menu-Item>
        <Menu-Item name="4">
            <Icon type="ios-paper" />
            Post
        </Menu-Item>
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
