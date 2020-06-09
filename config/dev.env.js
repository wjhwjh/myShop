'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


/*引入自己的数据*/
// webpack是基于node.js，所以在使用的时候结合node
// webpack 也是一个包，需要进行配置
// 如何玩转webpack,如何配置，都有那些作用
const express = require('express')
const app = express()
let appData = require('../data.json')

console.log('数据---', appData);

let seller = appData.seller
let goods = appData.goods
let ratings = appData.ratings

let apiRouter = express.Router()
app.use('/api', apiRouter)

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})