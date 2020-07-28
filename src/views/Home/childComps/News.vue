<template>
  <div class="news">

    
    <div class="hot">
      <div class="mask"></div>
      <div class="hot-icon"></div>
    </div>


    <div class="div">
      <list-item />
    </div>

  </div>
</template>

<script>
import ListItem from '../../../components/ListItem.vue';
export default {
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
.news {
  .hot {
    position: relative;
    width: 100%;
    height: 290px;
    background-image: url('../../../assets/img/hot_music_bg_2x.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .hot-icon {
      position: absolute;
      z-index: 1;
      width: 284px;
      height: 134px;
      background-image: url('../../../assets/img/index_icon_2x.png');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: -15px -40px;
      margin-top: 48px;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
    }
  }
}
</style>