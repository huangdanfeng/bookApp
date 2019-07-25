<template>
  <div class="contain">
    <div class="header">
      <button class="user" open-type="getUserInfo" lang="zh_CN" @getuserinfo="login">
        <img :src="src" alt="图片加载失败">
        <div class="text">{{name}}</div>
      </button>
    </div>
    <div class="time">
      <card />
    </div>
    <div v-if="src != '../../static/images/user.png'" class="btn">
      <button type="warn" :size="warnSize" :loading="loading" :plain="plain"
              :disabled="disabled" @click="scanHandle">添加图书</button>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card'
import qcloud from 'wafer2-client-sdk'
import {loginUrl} from '@/pages/config'
import {scan, request} from 'utils/request'
import {showModal, showToast, showLoading, hideLoading} from 'utils/index'

export default {
  components: {
    Card
  },

  data () {
    return {
      src: '../../static/images/user.png', // 用户头像
      name: '点击登录', // 用户名称
      warnSize: 'default', // 按钮大小
      disabled: false, // 按钮是否可用
      plain: false, // 按钮是否镂空，背景色透明
      loading: false // 名称前是否带 loading 图标
    }
  },

  created () {
    const user = wx.getStorageSync('userInfo');
    // 如果登录过，直接去本地存储的头像
    if (user.openId) {
      this.src = user.avatarUrl;
      this.name = user.nickName;
    }
  },
  methods: {
    // 扫描图书二维码
    async scanHandle () {
      const user = wx.getStorageSync('userInfo');
      let res = await scan();
      let {data} = await request('/demo', 'get', {
        isbn: res.result,
        method: 'GET',
        openId: user.openId,
        nickName: user.nickName,
        avatarUrl: user.avatarUrl
      });
      if (data && data.code === 0) {
        showModal('成功', '图书已添加')
      } else {
        showModal('失败', '图书已存在')
      }
      hideLoading();
    },
    // 用户登录
    login (res) {
      const user = wx.getStorageSync('userInfo');
      if (!user.openId && res.target.userInfo) {
        showLoading('加载中');

        // 设置登录地址
        qcloud.setLoginUrl(loginUrl);
        qcloud.login({
          success: (userInfo) => {
            wx.setStorageSync('userInfo', userInfo);
            showToast('登录成功', 'success')
            hideLoading();
            this.src = userInfo.avatarUrl;
            this.name = userInfo.nickName;
          },
          fail: (err) => {
            wx.removeStorageSync('userInfo');
            hideLoading();
            showToast('登录失败，请重新登录', 'none')
            console.log(err);
          }
        });
      }
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  .header{
    text-align: center;
    padding: 20px;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .text{
      font-size: 16px;
      padding: 5px
    }
    .user{
      background-color: #fff;
      line-height: 1.5;
      &::after{
        border: none;
      }
    }
  }
  .time{
    padding: 10px;
  }
  .btn{
    padding: 30px;
  }
}
</style>
