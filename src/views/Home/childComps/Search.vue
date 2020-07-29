<template>
  <div class="search">

    <!-- 搜索框 -->
    <div class="search-input">
      <div class="input-wrap">
        <i class="iconfont search">&#xe621;</i>
        <input type="text" id="holder" v-model="inputVal" autocomplete="off">
        <label for="holder" v-show="!inputVal">搜索歌曲、歌手、专辑</label>
        <i class="iconfont delete" v-show="inputVal" @click="deleteClick">&#xe66f;</i>
      </div>
    </div>


    <!-- 热门搜索 -->
    <hot-list @itemClick="itemClick" v-if="!inputVal" />
    
    <!-- 搜索历史记录 -->
    <ul class="history" v-if="!inputVal">
      <list-item v-for="(item, index) in inputHistoryList" :key="index">
        <i class="iconfont record" slot="order" @click="historyItemClick(index)">&#xe673;</i>
        <p class="content" slot="content" @click="historyItemClick(index)">{{item}}</p>
        <i class="iconfont icon-r" slot="icon-r" @click="closeClick(index)">&#xe65c;</i>
      </list-item>
    </ul>
    <search-recommend 
      v-else 
      :inputVal="inputVal" 
      :searchTipsList="searchTipsList" />
  </div>
</template>

<script>
import ListItem from '../../../components/ListItem.vue';
import HotList from './HotList.vue';
import SearchRecommend from './SearchRecommend.vue';
export default {
  components: {
    ListItem,
    HotList,
    SearchRecommend
  },
  data() {
    return {
      inputHistoryList: [],
      inputVal: '',
      timer: '',
      searchTipsList: []
    }
  },
  methods: {
    deleteClick() {
      this.inputVal = '';
    },
    submitInput(e) {
      // 若输入框里的值不为空，将输入框的数据推入历史清单中
      if(this.inputVal.trim()) {
        this.inputHistoryList.push(this.inputVal);
        this.getMusicInfo();
      }
    },
    closeClick(index) {
      this.inputHistoryList.splice(index, 1);
    },
    itemClick(item) {
      this.inputVal = item;
    },
    historyItemClick(index) {
      this.inputVal = this.inputHistoryList[index];
    },
    async getMusicInfo() {
      const res = await this.$http.get('https://v1.alapi.cn/api/music/search?keyword='+this.inputVal);
      this.searchTipsList.push(...res.data.songs);
      console.log(this.searchTipsList)
    }
  },
  watch: {
    inputVal() {
      if(this.inputVal) {
        if(this.timer) {
          // 进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
          clearTimeout(this.timer);
          this.timer = setTimeout(res => {
            this.submitInput();
          }, 300);
        }else {
          this.timer = setTimeout(res => {
            // 进入该分支说明当前并没有在计时，那么就开始一个计时
            this.submitInput();
          }, 300)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  .search-input {
    padding: 30px 20px;
    .input-wrap {
      position: relative;
      width: calc(90% - 60px);
      height: 60px;
      line-height: 60px;
      margin: 0 auto;
      padding: 0 60px;
      border-radius: 30px;
      background-color: #ebecec;
      > .search {
        position: absolute;
        top: 0;
        left: 0;
        color: #c9c9c9;
        font-size: 32px;
        margin: 0 14px;
      }
      > .delete {
        position: absolute;
        top: 0;
        right: 0;
        color: #c9c9c9;
        font-size: 32px;
        margin: 0 14px;
      }
      > input {
        width: 100%;
        font-size: 28px;
        height: 60px;
        line-height: 60px;
      }
      > label {
        position: absolute;
        top: 0;
        left: 60px;
        color: #c9c9c9;
        font-size: 28px;
      }
    }
  }

  .history {
    
    .content {
      line-height: 86px;
      color: #333;
      font-size: 30px;
      margin-left: 20px;
    }
    .icon-r {
      font-size: 36px;
    }
  }
  
}
</style>