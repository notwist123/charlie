<template>
  <div id="app">
    <template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <Menu-Item to='/home' name="1">
                            <Icon type="ios-home" /></Icon>
                            {{$t('__home')}}
                        </Menu-Item>
                        <Menu-Item to='/users' name="2">
                            <Icon type="md-people" /></Icon>
                            {{$t('__users')}}
                        </Menu-Item>
                        <Menu-Item to='/posts' name="3">
                            <Icon type="ios-paper"></Icon>
                            {{$t('__posts')}}
                        </Menu-Item>
                    </div>
                    <Dropdown @on-click="switchLang" style="margin-left: 20px">
                        <Button type="primary">
                            {{$t('__lang')}}
                            <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem name="en">English</DropdownItem>
                            <DropdownItem name="tw">中文</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
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
  name: 'App',
  methods: {
      switchLang(newLang) {
        this.$i18n.locale = newLang
        localStorage.setItem('locale', newLang)
      }
  }
}
</script>