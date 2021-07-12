/**
 * 密码框交互
 */
function psdClickHandler() {
  // 获取所有密码框
  const dots = document.querySelectorAll('.password > div > div')
  // 密码框个数
  const psdLen = dots.length
  // 密码框初始样式
  dots.forEach(dot => dot.classList.add('changer'))
  // 获取所有点击按钮
  const btns = document.querySelectorAll('.numpad > div')
  // 绑定点击事件
  btns.forEach(btn => {
    btn.onclick = function () {
      try {
        // 获取当前高亮输入框数量
        const acDots = psdLen - document.querySelectorAll('.changer').length
        // 删除按钮
        const isDelBtn = btn.classList.contains('delete')
        // 指纹按钮
        const isFingerprintBtn = btn.classList.contains('id')
        if (isFingerprintBtn) throw new Error('这个不是我们需要的按钮！！')
        if (isDelBtn) {
          // 高亮数量小于等0时return
          if (acDots <= 0) return
          // 否则当前高亮密码框添加默认样式
          dots[acDots - 1].classList.add('changer')
          return
        }
        // 高亮数量大于等于密码框数量时return
        if (acDots >= psdLen) return;
        // 否则给高亮后的密码框移除默认样式(添加高亮样式)
        dots[acDots].classList.remove('changer')
      } catch (error) {
        console.error(error)
      }
    }
  })

}

psdClickHandler()
