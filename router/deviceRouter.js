const Router = require('express')
const router = new Router()
const deviceController =  require('../controller/deviceController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js')


router.post('/',deviceController.create)
router.get('/remove',checkRole("ADMIN"),deviceController.remove)
router.get('/',deviceController.getAll)
router.get('/getWhere',deviceController.getAllWhere)
router.get('/:id',deviceController.getOne)

module.exports = router