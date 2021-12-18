import { HTTP_RES } from './../../constants/response-codes';
import { ROUTES } from './../router.consts';
import { Router } from 'express';

const router = Router();

router.get(ROUTES.users.main, (req, res, next) => {
   res.status(HTTP_RES.OK).send({
      message: `'${ROUTES.users.main}' - users route`,
   });
});

export default router;
