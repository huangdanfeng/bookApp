<template>
  <span :class="computedClassStr" class="iconfont icon-start"></span>
</template>

<script>
// 星星评分组件
export default {
  name: 'start',
  props: ['rate', 'index'],
  computed: {
    computedClassStr () {
      // 评分四舍五入
      return this.index < Math.round(Number(this.rate) / 2) ? 'orign light' : 'orign'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../static/font/iconfont.css";

  .orign{
    color: #dbdbdb
  }
  .light{
    color: #F5D174;
  }
</style>
