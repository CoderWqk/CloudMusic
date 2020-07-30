<template>
  <div class="list-title">
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-title {
    width: 100%;
    height: 46px;
    line-height: 46px;
    color: #666;
    background-color: #0000000D;
    padding: 0 20px;
  }
</style>