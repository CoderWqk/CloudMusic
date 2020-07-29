<template>
  <div class="tab-content">
    <Recommend v-if="tabIndex == 0" />
    <hot-song v-if="tabIndex == 1" />
    <Search v-if="tabIndex == 2" />
  </div>
</template>

<script>
import Recommend from './Recommend.vue';
import HotSong from './HotSong.vue';
import Search from './Search.vue';
export default {
  components: {
    Recommend,
    HotSong,
    Search
  },
  props: {
    tabIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-content {
  padding-top: 247px;
}
</style>