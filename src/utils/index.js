function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

// 显示弹框
export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

// 显示提示
export function showToast (title, icon) {
  wx.showToast({
    title,
    icon,
    duration: 2000
  });
}

// 显示loading
export function showLoading (title) {
  wx.showLoading({
    title
  })
}

// 隐藏loading
export function hideLoading () {
  wx.hideLoading()
}

export default {
  formatNumber,
  formatTime,
  showModal,
  showToast,
  showLoading,
  hideLoading
}
