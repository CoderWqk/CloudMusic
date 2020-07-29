<template>
  <div class="playlist-head">
    <div class="playlist-bg"></div>
    <div class="playlist-wrap">
      <!-- 歌曲相关图片信息 -->
      <div class="img-wrap">
        <img :src="currentHeadInfo.imgSrc" alt="">
        <span class="list-icon">歌单</span>
        <p class="playnum">
          <span>64.1万</span>
          <i class="iconfont">&#xe711;</i>
        </p>
      </div>
      <!-- 歌曲相关文字信息 -->
      <div class="content-wrap">
        <div class="title">{{currentHeadInfo.title}}</div>
        <div class="link">
          <img class="avatar" :src="currentHeadInfo.avaSrc" alt="">
          <span>{{currentHeadInfo.name}}</span>
          <i class="iconfont">&#xe66e;</i>
        </div>
      </div>
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
  }
}
</script>

<style lang="scss" scoped>
.playlist-head {
  position: relative;
  width: 100%;
  height: 372px;
  overflow: hidden;
  > .playlist-bg {
    width: 100%;
    height: 100%;
    background-image: url('https://p4.music.126.net/T_u5O7KbDpcnOSLIa8OEtw==/109951165122813288.jpg?param=170y170');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    filter: blur(30px);
  }
  > .playlist-wrap {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    display: flex;
    width: calc(100% - 50px);
    height: calc(100% - 120px);
    margin: 60px 20px 60px 30px;
    > .img-wrap {
      position: relative;
      > img {
        width: 252px;
        height: 252px;
      }
      > .list-icon {
        position: absolute;
        top: 20px;
        left: 0;
        z-index: 9;
        color: #fff;
        background-color: #D93030CC;
        padding: 0 16px;
        border-top-right-radius: 15.5px;
        border-bottom-right-radius: 15.5px;
      }
      > .playnum {
        position: absolute;
        right: 4px;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        color: #fff;
        > i {
          margin-top: 6px;
          font-size: 24px;
          padding: 0 12px;
        }
      }
    }
    > .img-wrap::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 36px;
      background-image: linear-gradient(90deg,rgba(0,0,0,0),rgba(0,0,0,.2));
    }
    >.content-wrap {
      margin-left: 32px;
      > .title {
        color: #fefefe;
        font-size: 34px;
      }
      > .link {
        position: relative;
        margin-top: 40px;
        > .avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          vertical-align: middle;
        }
        > span {
          color: #ffffffb3;
          font-size: 28px;
          margin-left: 10px;
        }
        > i {
          position: absolute;
          left: 46px;
          bottom: 0;
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 50%;
          color: #fff;
          font-size: 18px;
          text-align: center;
          background-color: #ffbd1f;
        }
      }
    }
  }
}
.playlist-head::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .2);
}
</style>