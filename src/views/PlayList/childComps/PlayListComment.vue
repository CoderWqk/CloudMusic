<template>
  <div class="playlist-comment">
    <list-title :title="'精彩评论'" />
    <ul class="comment-list">
      <li v-for="(item, index) in commentList" :key="index">
        <div class="avatar">
          <img :src="item.avatarSrc" alt="" @click="$router.push('/applink')">
        </div>
        <div class="comment-wrap">
          <p class="username" @click="$router.push('/applink')">{{item.name}}</p>
          <p class="date" @click="$router.push('/applink')">{{item.date}}</p>
          <p class="info">{{item.info}}</p>
          <p class="count" @click="$router.push('/applink')">
            <span class="number">{{item.num}}</span>
            <i class="iconfont good">&#xe717;</i>
          </p>
        </div>
      </li>
    </ul>
    <p class="more" @click="$router.push('/applink')">查看全部4284条评论&nbsp;&gt;</p>
  </div>
</template>

<script>
import ListTitle from '../../../components/ListTitle.vue';
import axios from 'axios';
export default {
  components: {
    ListTitle
  },
  data() {
    return {
      commentList: [
        {
          name: 'uni_Pluto-Hades',
          avatarSrc: 'https://p1.music.126.net/EnfyZf4WIaK6fETvpPbecw==/109951164761311389.jpg?imageView=1&type=webp&thumbnail=60x0',
          date: '2020年2月27日',
          info: '必须是mafumafu的新歌啊',
          num: '384'
        },{
          name: '凯凯哦_',
          avatarSrc: 'https://p1.music.126.net/vu8OCUS1o2vA439qviF-5g==/109951165071801141.jpg?imageView=1&type=webp&thumbnail=60x0',
          date: '2019年10月27日',
          info: '在这里给喜欢晚上睡觉带耳机的崽子们提个醒，戴耳机睡觉之前先用棉棒配合双氧水给你的耳道消消毒在戴耳机，如果长时间感觉耳朵里面痒请滴用滴耳液治疗，因为崽子们的耳机一戴就是一整晚，十分容易造成外耳道细菌感染，请崽子们爱护自己的耳朵。转发的 希望宝贝们都注意点',
          num: '3494'
        },{
          name: '乔桥侨荞',
          avatarSrc: 'https://p1.music.126.net/Ae8YBZ_IgrjKYgmOa_UTew==/1365593465252355.jpg?imageView=1&type=webp&thumbnail=60x0',
          date: '2019年12月8日',
          info: '推歌只是个幌子，真正目的是告诉大家网易独家',
          num: '2330'
        },{
          name: '火影宝藏少女琳',
          avatarSrc: 'https://p1.music.126.net/1Mx6VC4510ACvWoI46rprQ==/109951164884522976.jpg?imageView=1&type=webp&thumbnail=60x0',
          date: '2019年7月22日',
          info: '我的男神啊！mamo超级棒的啊！有喜欢mamo的姐妹嘛QAQ告诉我因为mamo进来的不是我一个人！！！',
          num: '606'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.playlist-comment {
  > .comment-list {
    > li {
      display: flex;
      padding: 20px 20px 22px 0;
      border-bottom: 1px solid rgba(0,0,0,.1);
      > .avatar {
        margin: 0 20px;
        > img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      > .comment-wrap {
        position: relative;
        > .username {
          color: #666;
          font-size: 28px;
        }
        > .date {
          color: #999;
          font-size: 24px;
        }
        > .info {
          color: #333;
          font-size: 30px;
          margin-top: 10px;
        }
        > .count {
          position: absolute;
          top: 0;
          right: 0;
          color: #999;
          > .number {
            font-size: 24px;
          }
          > .good {
            font-size: 28px;
            margin-left: 10px;
          }
        }
      }
    }
  }
  > .more {
    color: #999;
    font-size: 28px;
    text-align: center;
    margin: 0 100px 120px;
    padding: 36px 0;
  }
}
</style>