<template>
  <div class="tab-bar">
    <div href="javascript:;" @click="tabItemClick(index)" v-for="(item, index) in titles" :key="index">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index;
      this.$emit('tabItemClick', index);
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  top: 168px;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  width: 100%;
  height: 79px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  > div {
    flex: 1;
    color: #333;
    font-size: 30px;
    text-align: center;
    > span {
      padding: 17px 10px;
      line-height: 79.5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .active {
    color: #DD001B;
    border-bottom: 3px solid #DD001B;
  }
}
</style>