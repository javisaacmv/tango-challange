import {Router} from 'express'
import controller from '../controllers'

const router: Router = Router()

router.get('/:number', controller.index)

export default router