<template>
  <div class="playlist-intro">
    <!-- 标签 -->
    <div class="tags">
      <span class="title">标签:</span>
      <span class="tag" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
    </div>
    <!-- 简介 -->
    <div class="intro">
      <p>{{currentHeadInfo.intro}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    currentHeadInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      tags: ['欧美', '流行', '浪漫'],
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist-intro {
  width: 100%;
  height: 234px;
  margin-top: 20px;
  .tags {
    color: #666;
    margin-bottom: 24px;
    padding: 0 28px;
    > .title {
      font-size: 28px;
      margin-right: 18px;
    }
    > .tag {
      font-size: 24px;
      margin-right: 18px;
      padding: 6px 16px;
      border: 2px solid rgba(0, 0, 0, .1);
      border-radius: 28px;
    }
  }
  .intro {
    position: relative;
    width: calc(100% - 56px);
    color: #666;
    font-size: 28px;
    padding-left: 36px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    > p {
      width: 100%;
      line-height: 38px;
    }
    > i {
      position: absolute;
      right: 28px;
      bottom: 4px;
      color: #bbb;
      font-size: 32px;
    }
  }
  
}
</style>