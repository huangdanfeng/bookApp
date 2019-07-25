<template>
  <div>
    <div class="content" :key="index" v-for="(item, index) in list">
      <div class="banner">
        <image lazy-load="true" @click="preview(item)" :src="item.image"/>
      </div>
      <div class="text" @click="jump(item)">
        <div class="list">
          <div class="title">{{item.title}}</div>
          <div>
            <start :key="indexs" v-for="(items, indexs) in 5" :rate="item.rating" :index="indexs"></start>
          </div>
        </div>
        <div class="list">
          <div class="title">{{item.author || item.translator}}</div>
          <div>浏览量：{{item.visit}}</div>
        </div>
        <div class="list">
          <div class="title">{{item.publisher}}</div>
          <div>{{item.nickName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 列表组件
import Start from '@/components/start'

export default {
  props: ['list'],
  created () {
  },
  components: {
    Start
  },
  methods: {
    // 点击列表查看详情
    jump (value) {
      wx.navigateTo({
        url: '/pages/detail/main?isbn=' + value.isbn
      })
    },
    // 点击图片预览
    preview (value) {
      wx.previewImage({
        current: value.image, // 当前显示图片的http链接
        urls: [value.image] // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  display: flex;
  padding-top: 10px;
  font-size: 14px;
  .banner{
    image{
      padding: 0 15px 0 20px;
      width: 70px;
      height: 90px;
    }
  }
  .text{
    flex: 1;
    padding-left: 10px;
    padding-right: 8px;
    .list{
      padding-top: 3px;
      display: flex;
      .title{
        flex: 1;
        line-height: 18px;
        padding-right: 20px;
      }
    }
  }
}
</style>
