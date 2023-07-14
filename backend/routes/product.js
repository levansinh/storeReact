import express from 'express'

import { projectController } from '../controllers/productController.js'

const router = express.Router()

router.delete('/:id',projectController.delete)
router.put('/edit/:id',projectController.update)
router.post('/',projectController.create)

router.get('/:slug',projectController.getBySlug)
router.get('/',projectController.getAll)

export default router