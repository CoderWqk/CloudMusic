<template>
  <div class="play-list-footer">
    <i class="iconfont">&#xeeab;</i>
    <span class="content">官方动态歌单，根据你的口味定期更新好音乐</span>
    <span class="btn">查看我的歌单</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.play-list-footer {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: calc(100%-64px);
  padding: 26px 32px;
  background-color: #fff;
  > i {
    width: 72px;
    height: 72px;
    color: #ff1d12;
    font-size: 72px;
    text-align: center;
  }
  > .content {
    color: #666;
    font-size: 26px;
    flex-shrink: 1;
    margin: 0 12px;
  }
  > .btn {
    width: 224px;
    height: 68px;
    line-height: 68px;
    border-radius: 36px;
    color: #fff;
    font-size: 28px;
    padding: 0 28px;
    background-image: linear-gradient(-90deg,#ff5a4c,#ff1d12);
  }
}
</style>