function moneyFormat (money, len, separator = ',') {
  len = len || 2
  if (!money && money !== 0) return ''
  if (isNaN(+money)) return ''
  if (money === 0 || money === '0') return '0.' + '0'.repeat(len)
  var arr = (money + '').split('.')
  var intStr = arr[0] ? arr[0] : 0
  var floatStr = arr[1] ? arr[1] : 0
  if (floatStr === 0) {
    floatStr = '0'.repeat(len)
  } else {
    floatStr = (+('0.' + floatStr)).toFixed(len).split('.')[1]
  }
  money = (intStr + '.' + floatStr).replace(/(\d{1,3})(?=(?:\d{3})+\.)/g, `$1${separator}`)
  return money
}

export { moneyFormat }
