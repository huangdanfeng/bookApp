<template>
  <div>xiangqing</div>
</template>

<script>
  import {request} from 'utils/request'

  export default {
    name: 'index',
    async mounted () {
      let {data} = await request('/detail', 'get', {
        isbn: this.$root.$mp.query.isbn
      });
      console.log(data)
      console.log(this.$root.$mp.query)
    }
  }
</script>

<style lang="less" scoped>

</style>
