<template>
  <div class="header">
    <div class="logo">
      <i class="iconfont">&#xeeab;</i>
      <span>网易云音乐</span>
    </div>
    <Btn class="btn" :content="'下载APP'" />
  </div>
</template>

<script>
import Btn from './Btn.vue';
export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 40px);
  height: 168px;
  background-color: #d43c33;
  padding: 0 20px;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    > i {
      color: #fff;
      font-size: 56px;
      margin-right: 12px;
    }
    > span {
      color: #fff;
      font-size: 42px;
      font-weight: 500;
    }
  }
  .btn {
    width: 200px;
    height: 72px;
    line-height: 72px;
    color: #d43c33;
  }
}
</style>