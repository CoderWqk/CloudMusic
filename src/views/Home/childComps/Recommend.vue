<template>
  <div class="recommend">

    <Title :title="'推荐歌单'" />
    <ul class="recomment-list" v-if="commendList.length == 6">
      <li class="recommend-item" v-for="(item, index) in commendList" :key="index">
        <a href="javascript:;">
          <img :src="item.picurl" alt="">
          <p>{{item.artistsname}}-{{item.name}}</p>
          <div class="text">
            <i class="iconfont">&#xe711;</i>
            <span>8.6亿</span>
          </div>
        </a>
      </li>

    </ul>

    <Title :title="'最新音乐'" />
    <ul class="new-music" v-if="newList.length == 10">
      <li v-for="(item, index) in newList" :key="index">
        <a href="javascript:;">
          <div class="item-l">
            <p class="title">{{item.name}}</p>
            <p class="info">
              <span>{{item.artistsname}}</span>
            </p>
          </div>
          <div class="item-r">
            <i class="iconfont">&#xe6a2;</i>
          </div>
        </a>
      </li>
    </ul>

    <div class="footer">
      <div class="logo">
        <i class="iconfont">&#xe76a;</i>
        <span>网易云音乐</span>
      </div>
      <div class="openapp">
        打开APP,发现更多好音乐&lt;
      </div>
      <p class="copyright">
        仅供学习使用
      </p>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
export default {
  components: {
    Title,
  },
  data() {
    return {
      commendList: [],
      newList: []
    }
  },
  methods: {
    getMusicList(func, num) {
      for(let i = 0; i < num; i++) {
        func();
      }
    },
    async getCommendData() {
      // 获取 推荐歌单 的相关信息
      const res = await this.$http.get('/rand.music?sort=' + '热歌榜' + '&format=json')
      this.commendList.push(res.data)
    },
    async getNewData() {
      // 获取 最新音乐 的相关信息
      const res = await this.$http.get('/rand.music?sort=' + '新歌榜' + '&format=json')
      this.newList.push(res.data)
    }
  },
  created() {
    this.getMusicList(this.getCommendData, 6);
    this.getMusicList(this.getNewData, 10);
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  padding-top: 40px;
  > .recomment-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 48px;
    > .recommend-item {
      position: relative;
      width: 32.9%;
      padding-bottom: 64px;
      margin-bottom: 32px;
      a {
        > img {
          width: 100%;
        }
        > p {
          position: absolute;
          top: 259px;
          display: -webkit-box;    
          -webkit-box-orient: vertical;    
          -webkit-line-clamp: 2;    
          overflow: hidden;
          padding: 0 4px 0 12px;
        }
        > .text {
          position: absolute;
          top: 6px;
          right: 10px;
          color: #fff;
          > i {
            font-size: 24px;
            margin-right: 4px;
          }
        }
      }
      
    }
  }

  > .new-music {
    padding-left: 20px;
    a {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }
    .item-l {
      width: 90%;
      > .title {
        line-height: 50px;
        font-size: 32px;
      }
      > .info {
        position: relative;
        line-height: 36px;
        color: #888;
        font-size: 24px;
        padding-left: 36px;
      }
      > .info::before {
        content: "SQ";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto 0;
        display: inline-block;
        width: 24px;
        height: 16px;
        line-height: 16px;
        color: #f00;
        font-size: 12px;
        text-align: center;
        border: 1px solid #f00;
      }
    }
    .item-r {
      width: 10%;
      > i {
        display: inline-block;
        height: 86px;
        line-height: 86px;
        font-size: 64px;
        padding: 0 4.5px;
      }
    }
  }

  .footer {
    background-image: url('../../../assets/img/recommand_bg_2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .logo {
      display: flex;
      justify-content: center;
      padding-top: 127px;
      color: #000;
      font-size: 48px;
      > i {
        display: inline-block;
        width: 84px;
        height: 84px;
        line-height: 84px;
        color: #fff;
        font-size: 64px;
        text-align: center;
        background-color: #D43C33;
        border-radius: 10px;
        margin: 0 10px;
      }
      > span {
        line-height: 84px;
      }
    }
    .openapp {
      line-height: 76px;
      color: #d33a31;
      font-size: 34px;
      text-align: center;
      border: 2px solid #d33a31;
      border-radius: 38px;
      margin: 30px 72px 10px;
    }
    .copyright {
      color: #888;
      font-size: 16px;
      text-align: center;
      padding-bottom: 36px;
    }
  }
  
}
</style>