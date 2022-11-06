const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/',checkRole('ADMIN'),typeController.create)
router.get('/',typeController.getAll)
router.get('/remove',checkRole("ADMIN"),typeController.remove)
module.exports = router