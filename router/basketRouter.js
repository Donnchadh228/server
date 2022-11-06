const Router = require('express')
const router = new Router()
const basketController = require('../controller/basketController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.get('/add',basketController.add)
router.get('/',basketController.getAll)
router.get('/remove',basketController.remove)
router.get('/find',basketController.getBasket)
module.exports = router