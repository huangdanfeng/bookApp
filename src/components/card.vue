<template>
  <div>
    <div class="card">
      <progress :percent="percent" show-info :font-size="size" active="true"
                stroke-width="8"/>
      <div>今年还剩<span class="time"> {{time}} </span>天，出走半生，愿你归来仍是少年！！！</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      size: 14
    }
  },
  computed: {
    time () {
      let d = new Date();
      return this.getCard(d.getMonth());
    },
    percent () {
      // 计算今年已经过了的天数的百分比
      let d = new Date();
      let sum = this.getCard(0);
      let today = this.getCard(d.getMonth())
      return ((1 - today / sum) * 100).toFixed(1);
    }
  },
  methods: {
    getCard (type) {
      let d = new Date();
      let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      // 计算今年还剩几个月
      let sum = data.reduce((total, cur, index) => {
        if (cur >= type + 1) {
          return total + new Date(d.getFullYear(), cur, 0).getDate();
        }
        return total;
      }, 0);
      // 计算当前月剩的天数
      if (type >= 1) {
        return sum - d.getDate();
      }
      return sum;
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  font-size: 14px;
  .time{
    color: coral;
    font-size: 18px;
  }
}
</style>
