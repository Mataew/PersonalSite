const {Router} = require("express")
const router = Router()

router.use(require("./TodoRoutes"))

module.exports = router