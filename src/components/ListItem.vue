<template>
  <div class="list-item">
    <li>
      <a href="javascript:;">
        <div class="item-l">

        </div>
        <div class="item-m">

        </div>
        <div class="item-r">

        </div>
      </a>
    </li>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list-item {
  a {
    display: block;
    width: 100%;
    height: 110px;
    padding: 24px 0;
    .item-l {
      width: 10%;
      height: 100%;
      background-color: red;
    }
    .item-m {
      width: 80%;
      height: 100%;
      background-color: yellow;
    }
    .item-r {
      width: 10%;
      height: 100%;
      background-color: pink;
    }
  }
}
</style>