// 利用新增数组方法操作数据
var data = [
  {
    id: 1,
    pname: '小米',
    price: 3999
  },
  {
    id: 2,
    pname: 'oppo',
    price: 999
  },
  {
    id: 3,
    pname: '荣耀',
    price: 1299
  },
  {
    id: 4,
    pname: '华为',
    price: 1999
  }
]

// 获取相应的元素
var tbody = document.querySelector('tbody')
var search_price = document.querySelector('.search-price')
var search_pro = document.querySelector('.search-pro')
var start = document.querySelector('.start')
var end = document.querySelector('.end')
var product = document.querySelector('.product')

// 将数据渲染到页面
setDate(data)

function setDate(newData) {
  tbody.innerHTML = ''

  newData.forEach(function (value, index) {
    var tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${value.id}</td>
    <td>${value.pname}</td>
    <td>${value.price}</td>
    `
    tbody.appendChild(tr)
  })
}

// 根据价格查询商品
// 当点击了按钮，就根据商品的价格去筛选数组里面的对象
search_price.addEventListener('click', function () {
  var newData = data.filter((value) => {
    return value.price >= start.value && value.price <= end.value
  })
  // 将筛选后的对象渲染到页面
  setDate(newData)
})

// 根据名称查询商品
// 如果查询数据中唯一的元素，用some方法更合适
search_pro.addEventListener('click', function () {
  var arr = []
  data.some(function (value) {
    if (value.pname === product.value) {
      arr.push(value)
      return true
    }
  })
  setDate(arr)
})
