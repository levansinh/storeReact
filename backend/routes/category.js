import express from 'express'

import { categoryController } from '../controllers/categoryController.js'
import  {verifyToken} from "../middlewares/verifyToken.js"

const router = express.Router()

router.delete('/:id',categoryController.delete)
router.put('/edit/:id',categoryController.update)
router.post('/',categoryController.create)

router.get('/:id',categoryController.getOne)
router.get('/',categoryController.getAll)

export default router