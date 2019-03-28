<template>
	<ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
    <li class="item">H</li>
    <li class="item">I</li>
    <li class="item">J</li>
	</ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
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
