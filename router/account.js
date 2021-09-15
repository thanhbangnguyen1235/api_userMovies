import express from 'express'
// import { getAdmins} from '../controllers/Admin.js'
import {getAccount} from '../controllers/account'

const router = express.Router()

router.route('/account')
    .post(getAccount)

// router.route('/admin/:id') 
//     .put(updateAdmin)

export default router
