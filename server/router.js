const router = require('express').Router()
const controller = require('./controller.js')

router
  .route('/todoList')
  .get(controller.get)
  .post(controller.post)
  .patch(controller.patch)
  .delete(controller.delete)

module.exports = router;