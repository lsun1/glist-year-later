const express = require('express')
const app = express()
const port = 3000
const parser = require('body-parser')
const path = require('path')
const router = require('./router.js')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router)

app.listen(port, () => console.log(`Listening on port ${port}!`))