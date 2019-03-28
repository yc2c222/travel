<template>
	<ul class="list">
    <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
	</ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
      props: {
          cities:Object
      },
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display:flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.68rem
    right: 0
    bottom:0
    width: .4rem
    .item
      line-height:.42rem
      text-align: center
      color: $bgColor
</style>
