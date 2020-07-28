<template>
  <div class="title">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  color: #333;
  font-size: 34px;
  padding-left: 18px;
  margin-bottom: 28px;
  > span::before {
    position: absolute;
    content: "";
    left: 0;
    top: 4px;
    bottom: 0;
    margin: auto 0;
    width: 4px;
    height: 32px;
    background-color: #D33A31;
  }
}
</style>