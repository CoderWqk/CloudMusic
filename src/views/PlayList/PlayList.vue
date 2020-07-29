<template>
  <div class="playlist">
    <play-list-head :currentHeadInfo="currentHeadInfo" />
    <play-list-intro :currentHeadInfo="currentHeadInfo" />
    <play-list-list />
  </div>
</template>

<script>
import PlayListHead from './childComps/PlayListHead.vue';
import PlayListIntro from './childComps/PlayListIntro.vue';
import PlayListList from './childComps/PlayListList.vue';
export default {
  components: {
    PlayListHead,
    PlayListIntro,
    PlayListList
  },
  data() {
    return {
      headInfo: [
        {
          title: '「Pinky」泛着梦幻色泽的夏日汽水♡',
          name: '初恋心动失踪事...',
          imgSrc: 'http://p1.music.126.net/T_u5O7KbDpcnOSLIa8OEtw==/109951165122813288.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/zjUTk4bS_9WVOFOmDWqXRA==/109951165144522790.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：“心里藏着一罐粉色的气泡水 只要一看到你啊它就会咕噜咕噜地冒泡泡 一下子搞得我晕头转向连脸都会跟着红扑扑。”'
        },{
          title: '独立乐队指南丨优秀且神秘的时代浪潮',
          name: '宋寂寞-',
          imgSrc: 'http://p1.music.126.net/AeyEePQLf3A7h1r8ARSCCw==/109951165139696256.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/XrTMy7A01Lzapz680hwn7Q==/109951164933117333.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：Indie（独立）是一种态度，一种音乐人对于音乐创作的独立态度，推而广之，它同样也是听乐人对于音乐取舍的态度，我们听音乐或多或少都是在慢慢形成自己的音乐取向，形成一种不受外界干扰的独立态度，因此有必要时时Check Your Attitude，保持清醒头脑。'
        },{
          title: '维吾尔语精选歌曲',
          name: 'Amarjan...',
          imgSrc: 'http://p1.music.126.net/INq3U1kogB4zwrtTWP7kVg==/109951164983505096.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/3_4ZvXF2Xlwtk5iV63hb3g==/109951165153220408.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：精选维吾尔语歌曲，持续更新。最新、最经典的歌曲都会在这里更新，肯定会有那么一首是你的最爱，希望你们收藏并分享，Thank You！'
        },{
          title: 'KORG P1000电子琴',
          name: 'XJsurwa...',
          imgSrc: 'http://p1.music.126.net/2jy8QSBjtjRSeyLKR3aaCw==/109951164509321497.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/fg2W766yRVgzOMUsdQntPA==/109951164943882519.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：欢迎来到最新的维吾尔舞蹈俱乐部,同意并转发一下谢谢。'
        },{
          title: 'Mewlan Memtimin 买吾兰',
          name: 'Birari',
          imgSrc: 'http://p1.music.126.net/h3XzgwiKuoMDeohM96-B6w==/18954480951782493.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/W5ru3iGlXNw6AF36hi9Kxg==/109951165172855268.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：Mewlan Memtimin 买吾兰'
        },{
          title: '中文DJ（电摇版）（车载DJ）开车驾车必听',
          name: '巅峰车载音乐工...',
          imgSrc: 'http://p1.music.126.net/lMjuNL1ifmroz_KE8dnfkw==/109951164863932384.jpg?imageView=1&type=webp&thumbnail=246x0',
          avaSrc: 'http://p1.music.126.net/uaPKJy7ov3N_Egs97jd7MA==/109951165119518062.jpg?imageView=1&type=webp&thumbnail=60x0',
          intro: '简介：我的电台有:最好听串烧中文DJ～'
        }
      ],
      currentHeadInfo: {}
    }
  },
  methods: {
    getRandomNum() {
      let index = Math.floor(Math.random() * 6);
      this.getInfo(index);
    },
    getInfo(index) {
      this.currentHeadInfo = this.headInfo[index];
    }
  },
  created() {
    this.getRandomNum();
  }
}
</script>

<style>

</style>