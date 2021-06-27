const { v4: uuidv4 } = require('uuid');

const orders = {
  success: true,
  orders: [
    {
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733ca"
      ],
      "name": "Space антарианский флюоресцентный бургер",
      "_id": uuidv4(),
      "status": "done",
      "number": 1,
      "createdAt": "2021-06-01T14:43:22.587Z",
      "updatedAt": "2021-06-01T14:43:22.603Z"
    },
    {
      "ingredients": [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9",
        "60d3b41abdacab0026a733cb"
      ],
      "name": "Бессмертный space краторный бургер",
      "_id": uuidv4(),
      "status": "done",
      "number": 2,
      "createdAt": "2021-06-23T14:47:22.587Z",
      "updatedAt": "2021-06-23T14:47:22.603Z"
    },
    {
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733d2",
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733d2",
        "60d3b41abdacab0026a733d2",
        "60d3b41abdacab0026a733cf"
      ],
      "name": "Фалленианский астероидный краторный минеральный бургер",
      "_id": uuidv4(),
      "status": "in progress",
      "number": 3,
      "createdAt": "2021-06-24T14:43:22.587Z",
      "updatedAt": "2021-06-24T14:43:22.603Z"
    }
  ],
  "total": 3,
  "totalToday": 2
}
const ordersUpdated = {
  success: true,
  orders: [
    ...orders.orders,
    {
      "ingredients": [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c9"
      ],
      "name": "Simply Burger",
      "_id": uuidv4(),
      "status": "in progress",
      "number": 4656,
      "createdAt": "2021-06-24T14:43:22.587Z",
      "updatedAt": "2021-06-24T14:43:22.603Z"
    }
  ],
  "total": 4,
  "totalToday": 3
}

module.exports = { orders, ordersUpdated }