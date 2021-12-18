import { HTTP_RES } from './../constants/response-codes';
import { ROUTES } from './router.consts';
import { Router } from 'express';
import users from './users/users.routes';

const router = Router();

/* GET home page. */
router.get(ROUTES.main, (req, res, next) => {
   res.status(HTTP_RES.OK).send({ message: `'${ROUTES.main}' - home route` });
});
router.use(users);

export default router;
