<template>
  <div id="app">
    <template>
    <div class="layout">
        <Layout>
            <Affix>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <Menu-Item to='/home' name="1">
                            <Icon type="ios-home" />
                            <span class="header-text">{{$t('__home')}}</span>
                        </Menu-Item>
                        <Menu-Item to='/users' name="2">
                            <Icon type="md-people" />
                            <span class="header-text">{{$t('__users')}}</span>
                        </Menu-Item>
                        <Menu-Item to='/posts' name="3">
                            <Icon type="ios-paper" />
                            <span class="header-text">{{$t('__posts')}}</span>
                        </Menu-Item>
                    </div>
                    <Dropdown @on-click="switchLang" style="margin-left: 20px">
                        <Button type="primary">
                            <Icon type="md-globe" />
                            <span class="header-text">{{$t('__lang')}}</span>
                            <Icon type="ios-arrow-down"/>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem name="en">English</DropdownItem>
                            <DropdownItem name="tw">中文</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Menu>
            </Header>
            </Affix>
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

<style>
  @media (max-width: 560px) {
    .header-text {
      display:none;
    }
  }
</style>