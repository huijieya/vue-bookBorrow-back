let express = require('express') // 引入express
let Mock = require('mockjs') // 引入mock

let app = express() // 实例化express

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/userTable', function (req, res) {
  res.json(Mock.mock({
    'status': 200,
    'dataSource|5-9': [{
      'index|+1': 1,
      'userId|+1': 1000,
      'userName': '@cname',
      'sex|1': ['男', '女'],
      'phone': '@integer(13100000000,18999999999)'
    }]
  }))
})

app.use('/logTable', function (req, res) {
  res.json(Mock.mock({
    'status': 200,
    'dataSource|5-7': [{
      'orderId|+1': 3000,
      'bookId': '@natural(100, 104)',
      'userId': '@cname',
      'lendOutDate': "@date('yyyy-MM-dd')",
      'giveBackDate': "@date('yyyy-MM-dd')"
    }]
  }))
})

app.listen('8090', () => {
  console.log('监听端口 8090')
})
