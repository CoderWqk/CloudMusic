<template>
  <li class="list-item">
    <a href="javascript:;">
      <slot name="order"></slot>
      <div class="item-m">
        <p class="title">{{title}}</p>
        <p class="info">{{info}}</p>
      </div>
      <div class="item-r">
        <i class="iconfont">&#xe6a2;</i>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ""
      }
    },
    info: {
      type: String,
      default() {
        return ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding-left: 20px;
  border-bottom: 0.013333rem solid rgba(0, 0, 0, 0.1);
  a {
    display: flex;
    width: 100%;
    height: 86px;
    padding: 12px 0;
    .item-l {
      display: flex;
      align-items: center;
      width: 8%;
      color: #DF3436;
      font-size: 32px;
    }
    .item-m {
      flex: 1;
      .title {
        line-height: 50px;
        color: #333;
        font-size: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .info {
        line-height: 36px;
        color: #888;
        font-size: 24px;
      }
    }
    .item-r {
      width: 10%;
      > i {
        line-height: 86px;
        color: #aaa;
        font-size: 64px;
        text-align: center;
      }
    }
  }
}
</style>