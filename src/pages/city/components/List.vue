<template>
	<div class="list" ref="wrapper">
    <div>
      <div class="area ">
        <div class="title border-topbottom">Current City</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">CD</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">Hot City</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--用v-for作循环时，（item，key），而不是用index-->
      <div class="area" v-for="(item,key) in cities" :key="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">{{innerItem.name}}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
    export default {
        name: 'CityList',
        props: {
          hotCities:Array,
          cities:Object
        },
        mounted() {
          this.scroll = new Bscroll(this.$refs.wrapper)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc
  .list
    margin-top :.1rem
    overflow: hidden
    position:absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow hidden
      .button-wrapper
        float: left
        width: 33.33333%
        .button
          margin: .1rem
          padding .1rem 0
          text-align: center
          border: .02rem solid #ccc
    .item-list
      .item
        line-height: .7rem
        color: #666666
        padding-left: .2rem
</style>
