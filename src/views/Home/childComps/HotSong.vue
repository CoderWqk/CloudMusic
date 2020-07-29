<template>
  <div class="hot-song">

    
    <div class="hot-pic">
      <div class="mask"></div>
      <div class="hot-icon"></div>
    </div>


    <ul class="song-list" v-if="songList.length > 7">
      <list-item
        v-for="(item, index) in songList"
        :key="index"
        :title="item.name"
        :info="item.artistsname"
        @listItemClick="hotItemClick(index)">
        <div slot="order" class="item-l" :class="{active: index < 3}">{{index + 1}}</div>
        <i class="iconfont" slot="icon-r">&#xe6a2;</i>
      </list-item>
    </ul>
    <!-- Loading -->
    <div class="loading" v-if="songList.length < 7"></div>

    <div class="footer" v-show="songList.length == 20" @click="$router.push('/applink')">
      <span>查看完整榜单&nbsp;&gt;</span>
    </div>

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
      songList: []
    }
  },
  methods: {
    getMusicList(func, num) {
      for(let i = 0; i < num; i++) {
        func();
      }
    },
    async getHotSongData() {
      // 获取 热歌榜 的相关信息
      const res = await this.$http.get('/rand.music?sort=' + '热歌榜' + '&format=json')
      this.songList.push(res.data)
    },
    hotItemClick(index) {
      let song = JSON.stringify(this.songList[index]);
      sessionStorage.setItem("song", song);
      this.$router.push('/player')
    }
  },
  created() {
    this.getMusicList(this.getHotSongData, 20);
  }
}
</script>

<style lang="scss" scoped>
.hot-song {
  .hot-pic {
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
  .song-list {
    .active {
      color: #DF3436;
    }
  }
  .footer {
    height: 110px;
    line-height: 110px;
      text-align: center;
    > span {
      color: #999;
      font-size: 28px;
    }
  }
  .loading {
    width: 48px;
    height: 48px;
    background: url('../../../assets/img/loading.gif') center center no-repeat;
    background-size: 100%;
    margin: 20px auto;
  }
}
</style>