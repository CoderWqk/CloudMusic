<template>
  <div class="search-recommend">
    <!-- 提示正在搜索的内容 -->
    <list-item v-show="searchList.length == 0">
      <p slot="content" class="content search-tips">搜索“{{inputVal}}”</p>
    </list-item>
    <!-- 搜索提示 -->
    <div v-if="searchTipsList">
      <list-item 
        v-for="(item, index) in searchTipsList" 
        :key="index" 
        @listItemClick="searchTipsClick(index)"
        v-show="searchList.length == 0">
        <i class="iconfont record" slot="order">&#xe621;</i>
        <p slot="content" class="content search-info">{{item.name}}</p>
      </list-item>
    </div>
    <!-- 搜索内容 -->
    <div v-if="searchList">
      <list-item 
        v-for="(item, index) in searchList" 
        :key="index"
        v-show="searchList.length != 0">
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
      console.log(this.searchTipsList[index].name)
      console.log('----')
    },
    async getMusicInfo(songname) {
      this.searchList = [];
      const res = await this.$http.get('https://v1.alapi.cn/api/music/search?keyword=' + songname);
      this.searchList.push(...res.data.songs);
      console.log(this.searchList)
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
}
</style>