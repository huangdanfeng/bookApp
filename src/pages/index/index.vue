<template>
  <div>
    <swiper :indicator-dots="indicatorDots" :circular="circular"
            :autoplay="autoplay" :interval="interval" :duration="duration">
      <block :key="index" v-for="(item, index) in imgUrls">
        <swiper-item>
          <div class="slid-wrap">
            <div class="slide-image" :key="index1" v-for="(items, index1) in item">
              <image @click="jump(items)" :src="items.image"/>
            </div>
          </div>
        </swiper-item>
      </block>
    </swiper>
    <my-list :list="list"></my-list>
    <div v-if="show" class="footer">没有更多数据了</div>
  </div>
</template>

<script>
import {request} from 'utils/request'
import {showToast} from 'utils/index'
import MyList from '@/components/list'

export default {
  data () {
    return {
      imgUrls: [], // 轮播图数据
      list: [], // 列表数据
      indicatorDots: true, // 是否显示面板指示点
      circular: true, // 是否采用衔接滑动
      autoplay: true, // 是否自动切换
      interval: 4000, // 自动切换时间间隔
      duration: 1000, // 滑动动画时长
      page: 0, // 页数
      size: 5, // 行数
      show: false // 数据加载完提示
    }
  },
  components: {
    MyList
  },
  created () {
    this.getList(true);
    this.getTop();
  },
  onPullDownRefresh () {
    this.getList(true);
    this.getTop();
  },
  onReachBottom () {
    this.page += 1;
    this.getList();
  },
  methods: {
    // 获取列表数据
    async getList (init) {
      wx.showNavigationBarLoading();
      if (init) {
        this.page = 0;
        this.show = false;
      }
      let {data} = await request('/booklist', 'get', {
        page: this.page,
        size: this.size
      });
      if (data && data.code !== 0) {
        showToast('获取数据失败', 'none')
        return;
      }
      if (data.data.length) {
        if (data.data.length < this.size) {
          this.show = true;
        }
        if (init) {
          this.list = data.data;
        } else {
          this.list.push(...data.data);
        }
      } else {
        this.show = true;
      }
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },
    // 获取轮播图数据
    async getTop () {
      let {data} = await request('/top', 'get');
      if (data && data.code !== 0) {
        showToast('获取数据失败', 'none')
        return;
      }

      // 获取轮播图页数
      let result = Math.round(data.data.length / 3);
      switch (result) {
        case 1 :
          this.imgUrls = [data.data];
          break;
        case 2 :
          const [one, two, three, ...rest] = data.data;
          this.imgUrls = [[one, two, three], rest];
          break;
        case 3 :
          const [one1, two1, three1, four, five, six, ...rests] = data.data;
          this.imgUrls = [[one1, two1, three1], [four, five, six], rests];
          break;
      }
    },
    // 轮播图点击跳转详情页面，注意地址必需是绝对地址，不是相对地址
    jump (value) {
      wx.navigateTo({
        url: '/pages/detail/main?isbn=' + value.isbn
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .slid-wrap{
    width: 100%;
    height: 100%;
    display: flex;
    .slide-image{
      flex: 1;
      height: 100%;
      box-sizing: border-box;
      padding: 10px 15px 12px 13px;
      image{
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer{
    text-align: center;
    color: #dbdbdb;
    font-size: 14px;
    padding: 30px;
  }
</style>
