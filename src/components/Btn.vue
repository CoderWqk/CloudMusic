<template>
  <div class="button" :style="{color: color}">
    {{content}}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default() {
        return ""
      }
    },
    color: {
      type: String,
      default() {
        return ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;
  font-size: 32px;
  text-align: center;
  background-color: #fff;
  border-radius: 36px;
}
</style>