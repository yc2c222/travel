<template>
	<div>
    <div class="banner" @click="handleBannerClick()">
      <img  class="banner-img" src="./../../../../static/img/recommend-5.jpg">
      <div class="banner-info">
        <div class="banner-title">A site</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe602;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
    export default {
        name: 'Banner',
      data () {
        return {
          showGallary:false,
          imgs:['../../../static/img/recommend-6.jpeg',
            '../../../static/img/recommend-7.jpeg'
          ]
        }
      },
        components: {
          CommonGallary
        },
      methods:{
        handleBannerClick () {
          this.showGallary = true;
        },
        handleGallaryClose () {
          this.showGallary = false;
        }
      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:63%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left:0
      right:0
      bottom:0
      line-height:.2rem
      color: #ffffff
      background-image:linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size:.35rem
        padding:.2rem
      .banner-number
        height:.32rem
        line-height:.3rem
        padding:.1rem .2rem
        border-radius:.2rem
        background:rgba(0,0,0,0.6)
        font-size:.30rem
        .banner-icon
          font-size:.3rem

</style>
