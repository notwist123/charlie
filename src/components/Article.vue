<template>
  <div>
    <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <router-view></router-view>
        <Card>
            <div style="min-height: 200px;">
                Content
            </div>
        </Card>
    </Content>
  </div>
</template>

<script>
export default {
  name: 'article',
  data () {
    return {
    }
  }
}
</script>
