import {host} from '@/pages/config';
import {showModal, showLoading} from 'utils/index'

// 微信调用ajax接口
export function request (url, method, data = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url, // 仅为示例，并非真实的接口地址
      data: data,
      method: method,
      header: {
        'content-type': 'json' // 默认值
      },
      success (res) {
        resolve(res);
      },
      fail (error) {
        showModal('加载失败', '数据错误')
        reject(error);
      }
    })
  })
}

// 微信扫描二维码接口
export function scan (type = false) {
  return new Promise((resolve, reject) => {
    wx.scanCode({
      onlyFromCamera: type,
      success (res) {
        showLoading('加载中')
        resolve(res);
      },
      fail (error) {
        reject(error);
      }
    })
  })
}



