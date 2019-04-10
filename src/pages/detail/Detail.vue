<template>
	<div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
	</div>
</template>

<script>
  import DetailBanner from './components/Banner'
  import DetailHeader from './components/Header'
  import DetailList from './components/List'
    export default {
        name: 'Detail',
      components: {
          DetailBanner,
          DetailHeader,
          DetailList
      },
      data () {
          return {
            list:[
              {title:'Most-Recommend',children:[{title:'content-1'},{title:'content-2'}]},
              {title:'Recommend-1'},
              {title:'Recommend-2'},
              {title:'Recommend-3'}
              ]
          }
      }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
.content
  height:50rem
</style>
