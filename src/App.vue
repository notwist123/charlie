<template>
  <div id="app">
    <template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <Menu-Item to='/Home' name="1">
                            <Icon type="ios-navigate"></Icon>
                            Home
                        </Menu-Item>
                        <Menu-Item to='/Users' name="2">
                            <Icon type="ios-keypad"></Icon>
                            Users
                        </Menu-Item>
                        <Menu-Item to='/Posts' name="3">
                            <Icon type="ios-analytics"></Icon>
                            Posts
                        </Menu-Item>
                    </div>
                </Menu>
            </Header>
            <router-view></router-view>
        </Layout>
    </div>
</template>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
