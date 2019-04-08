<template>
  <div id="app">
    <!--keep-alive标签是vue自带标签，其中的内容请求过后会保存在用户的内存中，不用重复获取-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
