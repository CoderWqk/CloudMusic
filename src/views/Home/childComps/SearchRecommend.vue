<template>
  <div class="search-recommend">
    <!-- 提示正在搜索的内容 -->
    <list-item v-show="searchList.length == 0">
      <p slot="content" class="content search-tips">搜索“{{inputVal}}”</p>
    </list-item>
    <!-- 搜索提示 -->
    <div v-if="searchTipsList.length >= 7">
      <list-item 
        v-for="(item, index) in searchTipsList" 
        :key="index" 
        @listItemClick="searchTipsClick(index)"
        v-show="searchList.length == 0">
        <i class="iconfont record" slot="order">&#xe621;</i>
        <p slot="content" class="content search-info">{{item.name}}</p>
      </list-item>
    </div>
    <!-- Loading -->
    <div class="loading" v-else></div>
    <!-- 搜索内容 -->
    <div v-if="searchList.length == 10">
      <list-item 
        v-for="(item, index) in searchList" 
        :key="index"
        v-show="searchList.length != 0"
        @listItemClick="searchItemClick(index)">
        <p slot="content" class="content search-info">{{item.name}}</p>
        <i class="iconfont icon-r" slot="icon-r">&#xe6a2;</i>
      </list-item>
    </div>
    
  </div>
</template>

<script>
import ListItem from '../../../components/ListItem.vue';
export default {
  components: {
    ListItem
  },
  props: {
    inputVal: {
      type: String,
      default() {
        return ""
      }
    },
    searchTipsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      searchList: []
    }
  },
  methods: {
    searchTipsClick(index) {
      this.getMusicInfo(this.searchTipsList[index].name);
    },
    searchItemClick(index) {
      let song = JSON.stringify(this.searchList[index]);
      sessionStorage.setItem("song", song);
      this.$router.push('/player');
    },
    async getMusicInfo(songname) {
      this.searchList = [];
      const res = await this.$http.get('https://v1.alapi.cn/api/music/search?keyword=' + songname);
      this.searchList.push(...res.data.songs);
    }
  }
}
</script>

<style lang="scss" scoped>
.search-recommend {
  .content {
    line-height: 86px;
    font-size: 28px;
    margin-left: 20px;
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .search-tips {
    color: #507DAF;
  }
  .search-info {
    color: #333;
  }
  .icon-r {
    font-size: 42px;
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