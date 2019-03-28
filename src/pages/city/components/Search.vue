<template>
	<div class="search">
    <input class="search-input" type="text" placeholder="Type City">
	</div>
</template>

<script>
    export default {
        name: 'CitySearch',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .61rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      height: .62rem
      width: 100%
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .2rem
      color: #333333
</style>
