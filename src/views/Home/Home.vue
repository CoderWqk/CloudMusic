<template>
  <div class="home">
    <Header class="header" />
    <tab-bar :titles="titles" @tabItemClick="tabItemClick" />
    <tab-content :tabIndex="tabIndex"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import TabBar from './childComps/TabBar.vue';
import TabContent from './childComps/TabContent.vue';
export default {
  name: 'Home',
  data() {
    return{
      titles: ['推荐音乐', '热歌榜', '搜索'],
      tabIndex: 0
    }
  },
  components: {
    Header,
    TabBar,
    TabContent
  },
  methods: {
    tabItemClick(index) {
      this.tabIndex = index;
      console.log(this.tabIndex)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>