<template>
  <div class="app-link">
    <div class="tip">
      <p>若您已安装了网易云音乐，</p>
      <p>&nbsp;↑&nbsp;↑请下拉并点击“打开”按钮&nbsp;↑&nbsp;↑</p>
    </div>
    
    <div class="sub">
      (若无打开按钮，则 <a href="javascript:openclient();">点此打开</a> )
    </div>

    <div class="wrap">
      <div class="logo"></div>
      <a class="download" href="javascript:downloadclient();">立即下载</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app-link {
  height: 1334px;
  text-align: center;
  background: url('https://p3.music.126.net/3PJacreCq-eDuVDU4RFTQA==/18935789253812331.jpg') 0 0 no-repeat;
  background-size: 100% 100%;
  > .tip {
    padding-top: 32px;
    > p {
      color: #fff;
      font-size: 26px;
    }
  }
  > .sub {
    padding-top: 32px;
    color: #999;
    > a {
      color: #999;
      text-decoration: underline;
    }
  }
  > .wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    > .logo {
      width: 216px;
      height: 216px;
      background: url('https://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg') 0 0 no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
    }
    > .download {
      display: block;
      width: 376px;
      height: 92px;
      line-height: 92px;
      color: #fff;
      font-size: 48px;
      background: #311412;
      border: 1px solid #7c6a69;
      border-radius: 8px;
      margin-top: 80px;
    }
    > .download:hover {
      -webkit-tap-highlight-color: rgba(255, 255, 255, .15);
    }
  }
  
}

</style>