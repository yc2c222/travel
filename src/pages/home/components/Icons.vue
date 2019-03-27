<!--Home的子组件-->
<template>
  <!--最外层Div用于设计子组件的宽高比里-->
	<div class="icons">
    <swiper>
      <!--用 v-for 做嵌套循环-->
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <i :class="item.class" ></i>
          </div>
          <p class="icon-desc">Text</p>
        </div>
      </swiper-slide>
    </swiper>

	</div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data() {
            return {
              iconList:[
                {id:'001',class:'fa  fa-github-alt fa-4x icon-img-content',desc:'iconText'},
                {id:'002',class:'fa  fa-yc-square fa-4x icon-img-content',desc:'iconText'},
                {id:'003',class:'fa  fa-github-alt fa-4x icon-img-content',desc:'iconText'},
                {id:'004',class:'fa  fa-yc-square fa-4x icon-img-content',desc:'iconText'},
                {id:'005',class:'fa  fa-github-alt fa-4x icon-img-content',desc:'iconText'},
                {id:'006',class:'fa  fa-yc-square fa-4x icon-img-content',desc:'iconText'},
                {id:'007',class:'fa  fa-github-alt fa-4x icon-img-content',desc:'iconText'},
                {id:'008',class:'fa  fa-yc-square fa-4x icon-img-content',desc:'iconText'},
                {id:'009',class:'fa  fa-gratipay fa-4x icon-img-content',desc:'iconText'},
                {id:'010',class:'fa  fa-gratipay fa-4x icon-img-content',desc:'iconText'},
                {id:'011',class:'fa  fa-gratipay fa-4x icon-img-content',desc:'iconText'},
                {id:'012',class:'fa  fa-gratipay fa-4x icon-img-content',desc:'iconText'}
              ]
            }
        },
      computed: {
          pages() {
            const pages = [];
            this.iconList.forEach((item,index) => {
              const page = Math.floor(index/8);
              if (!pages[page]) {
                pages[page] = [];
              }
              pages[page].push(item)
            });
            return pages
          },
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus" scoped>
  @import "~styles/mixins.styl"
.icons>>>.swiper-container
  height :0
  padding-bottom :40%
.icon
  position :relative
  overflow :hidden
  float :left
  width :25%
  height :0
  padding-bottom :20%
  .icon-img
    position :absolute
    top :0
    left :0
    right :0
    bottom .44rem
    box-sizing :border-box
    padding :.1rem
    margin :0 auto
    .icon-img-content
      display :block
      margin :0 .34rem
      height :100%
  .icon-desc
    position :absolute
    left :0
    right :0
    bottom :0
    height :.44rem
    line-height :.44rem
    text-align :center
    color :#333333
    ellipsis()

</style>
<!--文字过长时，实现...省略
overflow :hidden-->
<!--white-space :nowrap-->
<!--text-overflow :ellipsis-->
