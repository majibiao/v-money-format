import { moneyFormat } from '@/libs/util'
import options from '@/libs/option'

const money = (el, binding) => {
  // 判断是否是input元素
  var els = el.tagName.toLocaleUpperCase() === 'INPUT' ? el : (el.querySelector('input') ? el.querySelector('input') : null)
  if (els) {
    el = els
  } else {
    throw new Error('v-money-format requires 1 input')
  }
  const opt = Object.assign({}, options, binding.value ? binding.value : {})
  const regStr = '/^$*+?.|'
  const inRegStr = regStr.includes(opt.thousands) ? (`\\${opt.thousands}`) : opt.thousands
  const thousandsReg = new RegExp(inRegStr, 'g')
  if (!el.isFocus) {
    el.value = moneyFormat(el.value, opt.precision, opt.thousands)
  }
  el.onfocus = function () {
    el.isFocus = true
    el.value = el.value.replace(thousandsReg, '')
  }
  el.onblur = function () {
    el.isFocus = false
    el.value = moneyFormat(el.value, opt.precision, opt.thousands)
  }
  el.oninput = function () {
    const reg = new RegExp('^\\D*(\\d*(?:\\.\\d{0,' + opt.precision + '})?).*$', 'g')
    el.value = el.value.replace(thousandsReg, '').replace(reg, '$1').replace(/^(0)[^.]/g, '$1')
  }
}

export default money
