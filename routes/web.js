import express from 'express'
import StudentC from '../controllers/StudentC.js'
const router=express.Router();

router.get('/',StudentC.getAllDoc)
router.post('/',StudentC.crateDoc)
router.get('/edit/:id',StudentC.editDoc)
router.post('/update/:id',StudentC.updateDocById)
router.post('/delete/:id',StudentC.deleteDoc)

export default router;