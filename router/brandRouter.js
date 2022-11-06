const Router = require('express')
const router = new Router()
const brandController = require('../controller/brandController.js');
const checkRole = require('../middleware/checkRoleMiddleware.js')

router.post('/',checkRole("ADMIN"),brandController.create)
router.get('/',brandController.getAll)
router.get('/remove',checkRole("ADMIN"),brandController.remove)

module.exports = router