<template>
  <div class="play">
    <div class="song-bg" @click="playerClick">
      <!-- logo -->
      <div class="logo">
        <i class="iconfont">&#xe76a;</i>
        <span>网易云音乐</span>
      </div>
      <!-- album -->
      <div class="album-wrap">
        <!-- 磁碟背景图 -->
        <div class="album-bg"></div>
        <!-- 需要旋转 -->
        <div class="roll" :style="{'animation-play-state': isPlay ? 'running' : 'paused'}">
          <div class="light"></div>
          <div class="album">
            <img :src="song.picurl" alt="">
          </div>
        </div>
        <div class="playbtn">
          <i class="iconfont" v-if="!isPlay">&#xe6a2;</i>
        </div>
      </div>
      <!-- desc -->
      <div class="desc">
        <p class="songname">{{song.name}} - <span class="singer">{{song.artistsname}}</span></p>
        <div class="lyc">
          <p style="color: #fff;">假装这个是歌词(假装目前唱到这)</p>
          <p>假装这个是歌词</p>
          <p>假装这个是歌词</p>
          <p>假装这个是歌词</p>
        </div>
      </div>
      <!-- mask -->
    </div>
    <img class="mask" :src="song.picurl" alt="">
    <!-- footer -->
    <div class="footer">
      <div class="open" @click="$router.push('/applink')">打&nbsp;开</div>
      <div class="download">下&nbsp;载</div>
    </div>
    <audio :src="song.url" autoplay ref="audio">
    您的浏览器不支持 audio 标签。
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      song: {},
      isPlay: true
    }
  },
  methods: {
    getSong() {
      if(sessionStorage.getItem("song"))  {
        let song = JSON.parse(sessionStorage.getItem("song"))
        this.song = song;
      }
    },
    playerClick() {
      if(!this.isPlay) {
        this.$refs.audio.play();
      }else {
        this.$refs.audio.pause();
      }
      this.isPlay = !this.isPlay;
    }
  },
  created() {
    this.getSong();
  }
}
</script>

<style lang="scss" scoped>
.play {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: #161824;
  > .song-bg {
    position: relative;
    width: 100%;
    height: 86%;
    > .logo {
      > i {
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        font-size: 28px;
        text-align: center;
        border-radius: 8px;
        background-color: #dd001b;
        margin-top: 24px;
        margin-left: 24px;
      }
      > span {
        color: #fff;
        font-size: 24px;
        margin-left: 12px;
      }
    }
    > .album-wrap {
      position: relative;
      width: 588px;
      height: 588px;
      margin-top: 80px;
      margin-left: auto;
      margin-right: auto;
      > .album-bg {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url('https://s3.music.126.net/mobile-new/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48=') 0 0 no-repeat;
        background-size: 100% 100%;
      }
      > .roll {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        animation: roll 60s linear;
        > .light {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background: url('https://s3.music.126.net/mobile-new/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577=') 0 0 no-repeat;
          background-size: 100% 100%;
        }
        > .album {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          > img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      > .playbtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        > i {
          color: #fff;
          font-size: 144px;
        }
      }
    }
    > .album-wrap::after {
      content: "";
      position: absolute;
      top: -140px;
      right: 130px;
      width: 192px;
      height: 274px;
      background: url('https://s3.music.126.net/mobile-new/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862=') 0 0 no-repeat;
      background-size: 100% 100%;
    }
    > .desc {
      margin-top: 48px;
      color: #fff;
      text-align: center;

      > .songname {
        padding-bottom: 32px;
        font-size: 36px;
        > .singer {
          color: rgba(255, 255, 255, .6);
          font-size: 32px;
          margin: 28px 0;
        }
      }
      
      > .lyc {
        height: 112px;
        font-size: 32px;
        overflow: hidden;
        background: linear-gradient(transparent 10%, transparent 100%);
        > p {
          color: hsla(0,0%,100%,.6);
          padding-bottom: 16px;
        }
      }
    }
  }
  > .footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    > div {
      flex: 1;
      height: 80px;
      line-height: 80px;
      font-size: 36px;
      border-radius: 40px;
      text-align: center;
      border: 2px solid #FF3A3A;
    }
    > .open {
      color: #FF3A3A;
      margin-right: 20px;
    }
    > .download {
      color: #fff;
      background-color: #FF3A3A;
    }
  }
  > .mask {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      filter: blur(24px);
    }
}



@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>