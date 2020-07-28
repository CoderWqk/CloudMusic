<template>
  <div class="tab-content">
    <Recommend v-if="tabIndex == 0" />
    <News v-if="tabIndex == 1" />
  </div>
</template>

<script>
import Recommend from './Recommend.vue';
import News from './News.vue';
export default {
  components: {
    Recommend,
    News
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