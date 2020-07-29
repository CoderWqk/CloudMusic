<template>
  <div class="playlist-list">
    <!-- 歌曲列表 -->
    <div class="list">
      <div class="title">歌曲列表</div>
      <div v-if="recommendList.length == 9">
        <list-item 
          v-for="(item, index) in recommendList" 
          :key="index" 
          :title="item.name" 
          :info="item.artistsname">
          <div slot="order" class="item-l">{{index + 1}}</div>
          <i class="iconfont" slot="icon-r">&#xe6a2;</i>
        </list-item>
      </div>
    </div>
    <!-- 更多 -->
    <div class="more" v-if="recommendList.length == 9">
      <p>查看更多歌曲,请下载客户端</p>
    </div>
    <!-- Loading -->
    <div class="loading" v-if="recommendList.length != 9"></div>
  </div>
</template>

<script>
import ListItem from '../../../components/ListItem.vue';
export default {
  components: {
    ListItem
  },
  data() {
    return {
      recommendList: []
    }
  },
  methods: {
    getMusicList(func, num) {
      for(let i = 0; i < num; i++) {
        func();
      }
    },
    async getRecommendData() {
      // 获取 推荐歌单 的相关信息
      const res = await this.$http.get('/rand.music?sort=' + '热歌榜' + '&format=json')
      this.recommendList.push(res.data)
      console.log(this.recommendList)
    }
  },
  created() {
    this.getMusicList(this.getRecommendData, 9);
  }
}
</script>

<style lang="scss" scoped>
.playlist-list {
  position: relative;
  .list {
    width: 100%;
    .title {
      width: 100%;
      height: 46px;
      line-height: 46px;
      color: #666;
      padding: 0 20px;
      background-color: #eeeff0;
    }
  }
  .more {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 388px;
    background: linear-gradient(rgba(255, 255, 255, .5), rgba(248, 248, 248, 1));;
    > p {
      color: #999;
      font-size: 28px;
      margin-top: 274px;
      text-align: center;
    }
  }
  > .loading {
    width: 48px;
    height: 48px;
    background: url('../../../assets/img/loading.gif') center center no-repeat;
    background-size: 100%;
    margin: 20px auto;
  }
}
</style>