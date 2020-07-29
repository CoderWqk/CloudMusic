<template>
  <div class="hot-list">
    <div class="title">热门搜索</div>
    <ul class="list">
      <li v-for="(item, index) in hotList" :key="index">
        <a href="javascript:;" @click="itemClick(item)">{{item}}</a>
      </li>
    </ul>
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
      hotList: [
        'Taylor Swift', '田馥甄', '潘玮柏', '天外来物', '丢了你', '要我怎么办', '海底', '你是人间四月天', '情人', '还是分开'
      ]
    }
  },
  methods: {
    itemClick(item) {
      this.$emit('itemClick', item);
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-list {
  padding: 30px 20px 0;
  .title {
    color: #666;
    font-size: 24px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 14px;
    > li {
      margin-right: 16px;
      margin-bottom: 16px;
      > a {
        display: flex;
        font-size: 28px;
        padding: 12px 24px;
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 32px;
      }
    }
    
  }
}
</style>